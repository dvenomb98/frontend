
# BJJ DOJO

## Project Description

BJJ DOJO is an online platform that curates free YouTube videos from the best Brazilian Jiu-Jitsu instructors and organizes them into comprehensive courses. This allows users to learn from the best without having to spend time searching for content or organizing it themselves.

### Features
- :white_check_mark: Blazing fast - Utilizing Next.js for SSG and SSR, most content is generated on the server and served as static pages to enhance SEO and user experience. Any additional content needed is fetched on the client side.
- :white_check_mark: Beautiful styling - Aesthetically pleasing design utilizing Tailwind CSS and Material-UI for a modern and visually appealing user interface.
- :white_check_mark: Forum - Users can create posts in specific categories, like and comment on them. Only non-sensitive information, such as name and profile photo, is fetched from "/api/users/" to prevent client-side data leaks.
- :white_check_mark: User rankings based on belts - Users can view each other's rank in the forum, which is determined by the amount of content viewed.
- :white_check_mark: Creators page - Users can view all instructors' profiles, even if they are not registered.
- :white_check_mark: Courses - Users can access all courses and their content, watch videos, and mark them as completed.
- :white_check_mark: Favorites - Users can save and view their favorite videos on a dedicated page.
- :white_check_mark: Contact - Users can reach out to the platform owner through a contact form, which is built with Nodemailer and API routes.

### Upcoming features:

- :x: Theme switcher
- :x: Finish homepage
- :x: Add at least 10 more courses
- :x: Additional sign-in options (meta etc..)

### Finished features:

## Installation

**Warning**: You will need Firebase keys to connect to the database. Contact me for access to the required credentials to developers database.

- Clone project
- Run npm install
- Run npm run dev

Now you can open [http://localhost:3000](http://localhost:3000) in your browser to see the project running.


## Contributing

We welcome contributions! If you're interested in contributing, please feel free to submit a pull request or open an issue to discuss your ideas.
