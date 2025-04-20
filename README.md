# React 19 + Vite + Tailwind CSS + Ant Design Dashboard

## Features
- Modern React 19 dashboard with composable layout
- Tailwind CSS for utility-first styling
- Ant Design (antd) for UI components
- React Router for routing
- Vite for fast development and builds
- Automated deployment to AWS S3 with Terraform

---

## Prerequisites
- [Node.js](https://nodejs.org/) (v18+ recommended)
- [npm](https://www.npmjs.com/)
- [AWS CLI](https://docs.aws.amazon.com/cli/latest/userguide/getting-started-install.html) (configured with `aws configure`)
- [Terraform](https://developer.hashicorp.com/terraform/tutorials/aws-get-started/install-cli)

---

## Local Development

1. **Install dependencies:**
   ```sh
   npm install
   ```

2. **Start the development server:**
   ```sh
   npm run dev
   ```
   The app will be available at http://localhost:5173

3. **Run tests:**
   ```sh
   npm test
   ```

---

## Build for Production

```sh
npm run build
```
The production build will be output to the `build/` directory (see `vite.config.js`).

---

## AWS S3 Deployment (with Terraform)

### 1. Configure AWS Credentials
Make sure you have run:
```sh
aws configure
```

### 2. Provision S3 Bucket with Terraform
From the `terraform/` directory:
```sh
cd terraform
terraform init
terraform apply
```
- Edit `terraform/terraform.tfvars` to set a unique `bucket_name` before applying.

### 3. Deploy to S3
From the project root:
```sh
npm run deploy
```
This will build your app and sync the output to your S3 bucket.

---

## Project Structure
```
/ (root)
  src/                # React source code
    components/       # Composable UI components
  terraform/          # Terraform IaC for AWS S3
  index.html          # Vite entry HTML
  package.json        # Project config and scripts
  vite.config.js      # Vite config
  tailwind.config.js  # Tailwind config
```

---

## Notes
- The S3 bucket is configured for static website hosting and public read access.
- For production, consider using AWS CloudFront for HTTPS and CDN.
- Update the Content Security Policy in `index.html` as needed for your use case.

---

## Troubleshooting
- If you see `NoSuchBucket` errors, ensure you have run `terraform apply` and the bucket exists.
- If you see S3 public access errors, check the Terraform config for public access block settings.
- For Vite/React/AntD issues, ensure all dependencies are installed and up to date.

---

## License
Apache-2.0
