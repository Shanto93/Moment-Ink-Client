# Moment Ink

## Live Link

[Live Website](https://moments-ink.web.app/)

## Technologies Used
- React
- Firebase
- React Router
- Node.js
- Express
- MongoDB

## Main Features Implemented

### Home Page

1. **Header (Navbar) and Hero Section:**
   - Simple navbar with links.
   - Engaging banner for visual appeal.

2. **Sections:**
   - Recent blog posts
   - Newsletter
   - Two unique additional sections

3. **Navbar Links:**
   - Home
   - Add Blog
   - All Blogs
   - Featured Blogs
   - Wishlist

4. **User Authentication:**
   - Display Login and Register buttons if the user is not logged in.
   - Show user's profile picture and a logout button if logged in.

5. **Recent Blogs Section:**
   - Display six blogs with title, image, short description, category, details button, and wishlist button.
   - Clicking the wishlist button adds the blog to the user's wishlist.

6. **Newsletter Section:**
   - Display a toast message on submitting an email (e.g., "Thank you for subscribing").

### All Blogs Page

1. **Blog Listing:**
   - Display all blogs added by users.
   - Allow filtering by category and a search field by blog title.

2. **Blog Details:**
   - Each blog has a title, image, short description, category, details button, and wishlist button.
   - Clicking the wishlist button adds the blog to the logged-in user's wishlist.

### Blog Details Page

1. **Blog Information:**
   - Display blog details like title, image, short description, long description.

2. **Comments Section:**
   - Users can comment, and comments with owner name and profile picture are shown.
   - Users cannot comment on their own blog.

3. **Update Button:**
   - Display a conditional update button for the blog owner.

### Add Blog Page

1. **Blog Submission Form:**
   - Form for inputting blog information.
   - Fields for title, image URL, category, short description, long description, and a submit button.
   - Dropdown for the category.

### Update Blog Page

1. **Blog Editing:**
   - Allow logged-in users to update/edit the blogs they added.
   - Private/protected route.

### Featured Blogs Page

1. **Top 10 Posts:**
   - Table of top 10 posts based on word count in the long description.
   - Includes Serial Number, Blog Title, Blog Owner, and Blog Owner Profile Picture.
   - Utilized [chosen table library].

### Wishlist Page

1. **Wishlist Display:**
   - Show all blogs wishlisted by a specific user.
   - Each blog has a title, image, short description, category, details button, and remove wishlist button.
   - Clicking remove wishlist removes the blog from the user's wishlist.

### Authentication

1. **Email and Password Authentication:**
   - Implemented registration and login pages.

2. **Additional Logins:**
   - Implemented [additional login method].

3. **Error Handling:**
   - Display errors on the login page for authentication failures.
   - Display errors on the registration page for password criteria not met.

### Additional Features

1. **404 Page:**
   - Custom 404 (not found) page for improved user experience.

## Thank You for Exploring Our Blog Website!
