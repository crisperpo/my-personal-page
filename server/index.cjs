const dotenv = require('dotenv');
const express = require('express');
const axios = require('axios');
const cors = require('cors');

const homePageQuery = require('./queries/homePageQuery.cjs');

dotenv.config({ override: true });
const app = express();
app.use(cors());
const port = 3000;

app.get('/api/get-home-page-data', async (_, res) => {
    try {
        const contentfulSpaceId = process.env.CONTENTFUL_SPACE_ID;
        const contentfullApiKey = process.env.CONTENTFUL_ACCESS_TOKEN;

        if (!contentfulSpaceId || !contentfullApiKey) {
            throw new Error('Environment data is missing');
        }

        console.log('Sending request to Contentful API with Space ID:', contentfulSpaceId);
        console.log('Sending request to Contentful API with Access Token:', contentfullApiKey);
        const response = await axios.post(
            `https://graphql.contentful.com/content/v1/spaces/${contentfulSpaceId}/`,
            { query: homePageQuery },
            {
                headers: {
                    Authorization: `Bearer ${contentfullApiKey}`,
                    'Content-Type': 'application/json'
                }
            }
        );
        if (
            response.headers['content-type'] &&
            response.headers['content-type'].includes('application/json')
        ) {
            const { data } = response.data;
            if (data) {
                res.status(200).json(data);
            } else {
                throw new Error('No data found in response');
            }
        } else {
            throw new Error('Unexpected response format from Contentful API');
        }
    } catch (error) {
        if (error.response) {
            console.error('Error response from Contentful API:', error.response.data);
            res.status(error.response.status).json({
                error: error.response.data || 'Unexpected error from Contentful API',
            });
        } else {
            console.error('Error making request to Contentful API:', error.message);
            res.status(500).json({ error: error.message });
        }
    }
});

app.listen(port, () => {
    console.log(`Server running at http://localhost:${port}`);
});
