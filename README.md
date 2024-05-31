# Social Media Icon Preview

This is a web application built with Next.js, TypeScript, and Tailwind CSS that allows users to upload an image and preview how it will look as an icon on Twitter, Facebook, and Instagram.

https://icon-viewer.vercel.app

![スクリーンショット 2024-05-31 17 52 24](https://github.com/hatsu38/icon-viewer/assets/16137809/6cbac179-90bf-43c3-9b1c-0ea10ad9391d)


## Features

- Upload an image and preview it as an icon on Twitter, Facebook, and Instagram.
- Crop and zoom the uploaded image for better preview customization.
- Randomly select a default image from a set of predefined images.

## Installation

To get started with this project, follow these steps:

1. **Clone the repository:**

    ```bash
    git clone https://github.com/yourusername/social-media-icon-preview.git
    cd social-media-icon-preview
    ```

2. **Install dependencies:**

    Make sure you have [Node.js](https://nodejs.org/) installed. Then run:

    ```bash
    npm install
    ```

3. **Start the development server:**

    ```bash
    npm run dev
    ```

    The application should now be running on [http://localhost:3000](http://localhost:3000).

## Usage

1. Open the application in your web browser.
2. Click on the file upload area to select an image from your computer or drag and drop an image into the upload area.
3. Use the cropper tool to adjust the image as needed.
4. Preview how the image will look as an icon on Twitter, Facebook, and Instagram.

## Components

### FileUpload

The `FileUpload` component allows users to upload an image, which can then be cropped and previewed.

### Twitter

The `Twitter` component displays the uploaded image as it would appear on a Twitter timeline.

### Facebook

The `Facebook` component shows the uploaded image in a Facebook post preview.

### Instagram

The `Instagram` component previews the uploaded image as it would appear on an Instagram profile.

## Meta Tags

This project includes basic meta tags for SEO and social media sharing. These tags are defined in the custom `_document.tsx` file.

## Development

### Adding New Features

If you want to add new features or improve existing ones, please follow these steps:

1. Fork the repository.
2. Create a new branch for your feature:

    ```bash
    git checkout -b feature-name
    ```

3. Make your changes.
4. Commit your changes:

    ```bash
    git commit -m "Add new feature"
    ```

5. Push to the branch:

    ```bash
    git push origin feature-name
    ```

6. Create a pull request on GitHub.

### Running Tests

To run tests, use the following command:

```bash
npm run test
