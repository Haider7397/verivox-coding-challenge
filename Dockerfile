# Use an official Node.js image as the base image
FROM node:22.2.0

# Set the working directory inside the container
WORKDIR /usr/src/app

# Copy package.json and package-lock.json to the container
COPY . /usr/src/app

# Install dependencies
RUN npm install

# Expose port 4200
EXPOSE 4200

# Start the Angular application
CMD ["npm", "start"]
