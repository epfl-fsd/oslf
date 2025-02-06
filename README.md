<a id="readme-top"></a>

<div align="center">
  <h3 align="center">Où sont les frites?</h3>
  <hr>

  <p align="center">
    Your essential guide to finding the best french fries on EPFL campus
    <br />
    <a href="https://github.com/epfl-fsd/ousontlesfrites"><strong>Explore the docs »</strong></a>
    <br />
    <br />
    <a href="https://ousontlesfrites.epfl.ch">View Website</a>
    ·
    <a href="https://github.com/epfl-fsd/ousontlesfrites/issues/new?labels=bug&template=bug-report---.md">Report Bug</a>
    ·
    <a href="https://github.com/epfl-fsd/ousontlesfrites/issues/new?labels=enhancement&template=feature-request---.md">Request Feature</a>
  </p>
</div>

## About The Project

Où sont les frites? is the definitive application for locating french fries across EPFL's campus. Whether you're a student rushing between classes, a researcher on lunch break, or a visitor exploring the campus, our app helps you find the nearest spot serving fresh, hot fries.

### Key Features

-   Real-time availability of fries at all campus restaurants and food trucks
-   Daily menu integration with campus restaurants
-   Queue time estimates during peak hours
-   Price comparison between different campus locations
-   Rating system for fries quality and portion size
-   Special offers and "fries of the day" notifications
-   Filter by location (Esplanade, Quartier Nord, Satellight, etc.)
-   Opening hours and lunch rush hours information

### Built With

Our application leverages modern web technologies to provide the best user experience:

[![Next][Next.js]][Next-url]
[![React][React.js]][React-url]
[![Tailwind][Tailwind.css]][Tailwind-url]

## Getting Started

This guide is divided into two sections:

-   **Production Deployment**: For users who want to run the application
-   **Development Setup**: For developers who want to contribute to the project

## Production Deployment

### Prerequisites

-   Docker

### Environment Variables

Create a `.env` file with the following required variables:

```env
# API Configuration (Required)
API_USERNAME=XXXXXXXXXXXXXXX  # Your API username
API_PASSWORD=XXXXXXXXXXXXXXX  # Your API password
API_URL=XXXXXXXXXXXXXXX       # API endpoint URL
```

### Quick Start

1. Pull the image from GitHub Container Registry:

    ```sh
    docker pull ghcr.io/epfl-fsd/ousontlesfrites:latest
    ```

2. Run the container:

    ```sh
    docker run -d \
      --name ousontlesfrites \
      -p 3000:3000 \
      --env-file .env \
      ghcr.io/epfl-fsd/ousontlesfrites:latest
    ```

3. Access the application at [http://localhost:3000](http://localhost:3000)

### Managing the Container

Stop the container:

```sh
docker stop ousontlesfrites
```

Start an existing container:

```sh
docker start ousontlesfrites
```

Remove the container:

```sh
docker rm ousontlesfrites
```

## Development Setup

### Prerequisites

-   Node.js (version 20 or higher)
-   npm
-   Docker (optional, for local container testing)

### Local Development

1. Clone the repository

    ```sh
    git clone https://github.com/epfl-fsd/ousontlesfrites.git
    ```

2. Install dependencies

    ```sh
    npm install
    ```

3. Create `.env` file with required variables (see Production section)

4. Start development server

    ```sh
    npm run dev
    ```

5. Access [http://localhost:3000](http://localhost:3000)

### Docker Development

Build a local Docker image:

```sh
docker build -t ousontlesfrites-dev .
```

Run the development image:

```sh
docker run -d \
  --name ousontlesfrites-dev \
  -p 3000:3000 \
  --env-file .env \
  ousontlesfrites-dev
```

[Next.js]: https://img.shields.io/badge/next.js-000000?style=for-the-badge&logo=nextdotjs&logoColor=white
[Next-url]: https://nextjs.org/
[React.js]: https://img.shields.io/badge/React-20232A?style=for-the-badge&logo=react&logoColor=61DAFB
[React-url]: https://reactjs.org/
[Tailwind.css]: https://img.shields.io/badge/Tailwind_CSS-38B2AC?style=for-the-badge&logo=tailwind-css&logoColor=white
[Tailwind-url]: https://tailwindcss.com/
