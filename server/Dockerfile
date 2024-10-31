# Base image
FROM node:18

# Set working directory
WORKDIR /server

# Copy package.json and install dependencies
COPY package*.json ./
RUN npm install

# Copy the rest of the app files
COPY . .

# Set environment variable for production
ENV NODE_ENV=production

# Expose the port the app runs on
EXPOSE 5000

# Start the app
CMD ["npm", "start"]
