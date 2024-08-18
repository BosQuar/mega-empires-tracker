# Use an official Node runtime as the base image
FROM node:14

# Set the working directory in the container to /app
WORKDIR /app

# Copy package.json and package-lock.json into the directory
COPY package*.json ./

# Install any needed packages specified in package.json
RUN npm install

# Copy the rest of the working environment into the container
COPY . .

# Generate Prisma client
RUN npx prisma generate

# Build the SvelteKit application
RUN npm run build

EXPOSE 3000
CMD ["node", "build/index.js"]