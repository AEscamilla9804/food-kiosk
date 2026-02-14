🍔 Food Kiosk App

A full-stack digital ordering system built with Next.js, Prisma, and TypeScript.
The platform allows customers to browse products, place orders, and track their status in real time, while administrators can manage products, categories, and kitchen workflow.

Designed as a production-style application with modern React architecture, server actions, validation, and database management.

📌 Overview

Food Kiosk is a restaurant ordering system composed of three main flows:

- Customer Panel → Browse menu, place orders, view order status
- Kitchen Panel → Manage and complete incoming orders
- Admin Panel → Manage products, categories, and availability

The project focuses on modern full-stack React patterns, including Server Components, Server Actions, Prisma ORM, and real-time UI updates.

✨ Features

Customer

- Browse products by category
- Real-time product availability
- Place orders
- Live "Orders Ready" panel

Kitchen

- View pending orders
- Mark orders as completed
- Real-time UI refresh

Admin

- Create / Edit / Delete products
- Toggle product availability (active / inactive)
- Upload product images (Cloudinary)
- Category management
- Automatic UI revalidation

Technical

- Server Actions (Next.js)
- Zod validation (client + server)
- Optimistic UI patterns
- Real-time refresh (SWR / router.refresh)
- Image upload with Cloudinary
- Mobile-friendly responsive UI

🧰 Tech Stack

Frontend

- Next.js 14 (App Router)
- React
- TypeScript
- Tailwind CSS
- SWR

Backend

- Next.js Server Actions
- Prisma ORM
- Development DB w/Docker
- Production DB w/Neon

Validation

- Zod

Media Storage

- Cloudinary

📂 Project Structure

/app 
    /admin 
    /order 
    /orders 
/components 
    /admin
    /order
    /product
    /ui
/actions 
/prisma 
/public
/src
    /schema 
    /types
    /lib
    /utils

🌱 Environment Variables

Create a .env file in the project root:

- DATABASE_URL="postgresql://..."

- NEXT_PUBLIC_CLOUDINARY_CLOUD_NAME="..."
- NEXT_PUBLIC_CLOUDINARY_API_KEY="..."
- CLOUDINARY_API_SECRET="..."

💾 Using Separate Databases (Dev vs Production)

This project supports isolated databases for development and production.

Development
- DATABASE_URL="postgresql://localhost:5432/foodkiosk_dev"

Production
- DATABASE_URL="postgresql://production-db-url"

Then run:

npx prisma migrate deploy

This ensures:

- Safe schema sync
- No data conflicts
- Clean production deployment

⚙️ Installation

Clone the repository:

    git clone https://github.com/yourusername/food-kiosk
    cd food-kiosk

Install dependencies:

    npm install

Generate Prisma client:

    npx prisma generate

Run migrations:

    npx prisma migrate dev

Start development server:

    npm run dev

🚀 Deployment

Recommended platforms:

- Vercel → Frontend + Server Actions
- Neon / Supabase → PostgreSQL
- Cloudinary → Image storage

Steps:

1. Configure environment variables in hosting platform
2. Push repository
3. Run Prisma production migration:
    npx prisma migrate deploy

📸 Screenshots

Customer View:
https://drive.google.com/file/d/1bnkneFREra8dm1gtxotcE0-B_qrwkjL1/view?usp=drive_link

Kitchen View:
https://drive.google.com/file/d/1JClP0bNReqQXIlcHbFovA7qS2OMTR3R9/view?usp=drive_link

Admin Panel:
https://drive.google.com/file/d/1zcQoVILtMbf-VZyLFU00l4-TEYCMbLY-/view?usp=drive_link

Order Status:
https://drive.google.com/file/d/1CMOZt-0BgQERvOeeBRLVAzE2NQlWB-Z4/view?usp=drive_link

Create Product Form:
https://drive.google.com/file/d/1s_oCR2urYxlV9yBm9cE5B4q6M18RYFM_/view?usp=drive_link

Edit Product Form:
https://drive.google.com/file/d/1B8inuwqO6V1E9uUWzUnXxXJ1kfs_xwCL/view?usp=drive_link

🎯 Future Improvements

- Authentication & roles
- Analytics dashboard
- Real-time updates without polling
- Advanced caching

👨‍💻 Author

Alan Escamilla

- Mechatronic Engineer
- Full-Stack Developer (React / Next.js / TypeScript)

📄 License

This project is for educational and portfolio purposes.