# Use Node.js LTS version as the base image
FROM node:lts-alpine

# Create a working directory
WORKDIR /src

# Copy package.json and package-lock.json files to the working directory
COPY package*.json ./

# Install dependencies
RUN npm install

# Copy the rest of the project files to the working directory
COPY . .

# Build the React app
RUN npm run build

# Expose the port that the React app will run on
EXPOSE 3000

# Start the React app
CMD ["npm", "start"]