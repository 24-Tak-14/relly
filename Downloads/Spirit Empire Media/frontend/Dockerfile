FROM node:18-alpine AS builder

WORKDIR /app

COPY frontend/package.json frontend/package-lock.json ./
RUN npm ci

COPY frontend/ ./

RUN npm run build

# --- Production Stage ---
FROM node:18-alpine

WORKDIR /app

# Copy built assets from the builder stage
COPY --from=builder /app/dist ./dist

# Serve static files
CMD ["npm", "run", "preview", "--", "--port", "8080"] # Vite's preview command, often uses port 5050 or similar, adjust if needed
