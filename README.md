# Design System

## Project info


## About this Design System

This project is a comprehensive design system built with modern web technologies. It provides a collection of reusable components, styles, and design patterns that ensure consistency and efficiency across your projects.

## Technologies

This design system is built with:

- **React** - UI component library
- **TypeScript** - Type safety and developer experience
- **Tailwind CSS** - Utility-first CSS framework
- **shadcn/ui** - Beautifully designed components built with Radix UI and Tailwind
- **Storybook** - Component development and documentation environment
- **Vite** - Fast build tooling and development server

## Getting Started

### Local Development

To work with this design system locally:

```sh
# Clone the repository
git clone <YOUR_GIT_URL>

# Navigate to the project directory
cd design-system

# Install dependencies
npm install

# Start the development server
npm run dev
```

### Storybook

To run the Storybook documentation:

```sh
npm run storybook
```

This will open Storybook in your browser, where you can explore and interact with all components.

## Components

This design system includes a variety of components powered by Radix UI primitives:

- Accordions, Alerts, and Dialogs
- Form elements (Inputs, Checkboxes, Radio, Select)
- Navigation components (Menus, Tabs)
- Layout components
- Data visualization components
- And much more

All components are accessible, customizable, and fully typed with TypeScript.

## How to use this Design System

You can use this design system in two ways:

1. **Via Integration**: Import components directly into your projects
2. **Direct Integration**: Copy components from this repository into your projects as needed.

## Deployment

### Deploying to Vercel

This design system can be easily deployed to Vercel:

1. Create an account on [Vercel](https://vercel.com) if you don't have one
2. Connect your repository to Vercel:
   - Go to the Vercel dashboard
   - Click "Add New" > "Project"
   - Select your repository
   - Configure build settings (Vercel should auto-detect Vite settings)
   - Click "Deploy"

3. Configure environment variables if needed
4. Once deployed, Vercel will provide you with a URL to access your design system

For Storybook deployment:
- Add a Vercel configuration in `vercel.json` with the build command: `npm run build-storybook`
- Set the output directory to `storybook-static`

### Continuous Deployment

Vercel automatically deploys changes when you push to your repository. You can configure:
- Preview deployments for pull requests
- Custom domains
- Team collaboration

## Custom Domain

You can connect a custom domain to your design system:

1. Navigate to your Vercel project settings
2. Select "Domains"
3. Add your custom domain
4. Follow the instructions to configure your DNS settings

For detailed instructions, check out [Vercel's documentation on custom domains](https://vercel.com/docs/concepts/projects/domains)


