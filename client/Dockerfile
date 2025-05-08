# Use an official Node.js runtime as the base image
FROM node:20

# Set the working directory in the container
WORKDIR /app

# Copy package.json and pnpm-lock.yaml
COPY package.json ./
COPY pnpm-lock.yaml ./

# Install pnpm globally
RUN npm install -g pnpm

# Install dependencies
RUN pnpm install

# Copy the rest of the application code
COPY . .

# Expose the port the app runs on
EXPOSE 3000

# Command to run the application
CMD ["pnpm", "start-server"]