// main-worker.js

// The HTML content for your personal landing page
const personalLandingPageHTML = `<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Rahul Daswani's Personal Website</title>
    <!-- Tailwind CSS CDN for easy styling -->
    <script src="https://cdn.tailwindcss.com"></script>
    <style>
        /* Custom font for a modern look */
        body {
            font-family: 'Inter', sans-serif;
            background-color: #f3f4f6; /* Light gray background for the whole page */
            padding-top: 64px; /* Adjust body padding to account for fixed navbar height */
        }
        /* Style for the timeline items to ensure the dot is centered over the line */
        .timeline-item-dot::before {
            content: '';
            position: absolute;
            top: 50%;
            width: 24px; /* w-6 */
            height: 24px; /* h-6 */
            background-color: #4f46e5; /* bg-indigo-500 */
            border-radius: 50%; /* rounded-full */
            box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1); /* shadow-lg */
            border: 2px solid white; /* border-2 border-white */
            transform: translateY(-50%);
            z-index: 10;
        }
        .timeline-item-left .timeline-item-dot::before {
            right: -12px; /* Half of w-6 to center it on the line */
        }
        .timeline-item-right .timeline-item-dot::before {
            left: -12px; /* Half of w-6 to center it on the line */
        }
    </style>
</head>
<body>
    <!-- Navigation Bar -->
    <nav class="fixed top-0 left-0 w-full bg-gray-800 text-white p-4 shadow-lg z-50">
        <div class="container mx-auto flex justify-between items-center">
            <a href="/" class="text-xl font-bold rounded-md px-3 py-2 hover:bg-gray-700 transition-colors">Rahul Daswani</a>
            <div class="flex items-center space-x-6">
                <!-- Speaking Link -->
                <a href="/speaking" class="text-lg hover:text-indigo-300 transition-colors rounded-md px-3 py-2 hover:bg-gray-700">Speaking</a>

                <!-- Contact Link -->
                <a href="mailto:rahuldaswani@post.harvard.edu" class="text-lg hover:text-indigo-300 transition-colors rounded-md px-3 py-2 hover:bg-gray-700">Contact</a>

                <!-- Book My Time Dropdown -->
                <div class="relative group">
                    <button id="bookTimeBtn" class="text-lg hover:text-indigo-300 transition-colors rounded-md px-3 py-2 hover:bg-gray-700 focus:outline-none">
                        Book My Time <span class="ml-1">&#9662;</span> <!-- Down arrow unicode -->
                    </button>
                    <div id="bookTimeDropdown" class="absolute right-0 mt-2 w-64 bg-white rounded-md shadow-lg py-2 hidden group-hover:block">
                        <a href="https://tidycal.com/rahuldaswani/15-minute-meeting" target="_blank" class="block px-4 py-2 text-gray-800 hover:bg-gray-100 transition-colors rounded-md">
                            15 minute (free) session
                        </a>
                        <a href="https://tidycal.com/rahuldaswani/60-minute-meeting" target="_blank" class="block px-4 py-2 text-gray-800 hover:bg-gray-100 transition-colors rounded-md">
                            60 minute coaching session
                        </a>
                    </div>
                </div>
            </div>
        </div>
    </nav>

    <div class="min-h-screen flex flex-col items-center py-10 px-4 sm:px-6 lg:px-8" id="top">
        <!-- Hero Section: Profile Picture and Name -->
        <header class="bg-gradient-to-r from-blue-500 to-indigo-600 text-white w-full max-w-4xl mx-auto p-8 rounded-lg shadow-xl mb-12 text-center">
            <!-- Profile Picture Placeholder: You can replace this URL with your actual image -->
            <img src="https://placehold.co/150x150/007bff/ffffff?text=RD" alt="Profile Picture" class="w-36 h-36 rounded-full mx-auto mb-6 border-4 border-white shadow-lg">
            <h1 class="text-4xl sm:text-5xl font-extrabold mb-2">Rahul Daswani</h1>
            <p class="text-xl sm:text-2xl font-light">Futurist | Government Expert | Ex-McKinsey | Executive Coach</p>
        </header>

        <main class="w-full max-w-4xl mx-auto">
            <!-- Activities Section -->
            <section class="bg-white p-8 rounded-lg shadow-md mb-12">
                <h2 class="text-3xl font-bold text-gray-800 mb-6 text-center">Activities & Engagements</h2>
                <div class="grid grid-cols-1 md:grid-cols-2 gap-6 text-lg text-gray-700">
                    <div class="flex items-center space-x-3 bg-gray-50 p-4 rounded-md shadow-sm">
                        <span class="text-indigo-500 text-2xl">🌍</span>
                        <span>Country Lead, HeForShe Singapore (UN movement)</span>
                    </div>
                    <div class="flex items-center space-x-3 bg-gray-50 p-4 rounded-md shadow-sm">
                        <span class="text-indigo-500 text-2xl">🗣️</span>
                        <span>Co-Founder, Okayornot.sg (constructive conversations on race)</span>
                    </div>
                    <div class="flex items-center space-x-3 bg-gray-50 p-4 rounded-md shadow-sm">
                        <span class="text-indigo-500 text-2xl">💡</span>
                        <span>Vice Chair & Head of Capability Building, Sinda Youth Club</span>
                    </div>
                    <div class="flex items-center space-x-3 bg-gray-50 p-4 rounded-md shadow-sm">
                        <span class="text-indigo-500 text-2xl">🤝</span>
                        <span>Co-Chair, Advisory Professionals Network</span>
                    </div>
                    <div class="flex items-center space-x-3 bg-gray-50 p-4 rounded-md shadow-sm">
                        <span class="text-indigo-500 text-2xl">🎙️</span>
                        <span>Spotify Podcast interview with WeWork, 'Start with Culture'</span>
                    </div>
                    <div class="flex items-center space-x-3 bg-gray-50 p-4 rounded-md shadow-sm">
                        <span class="text-indigo-500 text-2xl">👨‍🏫</span>
                        <span>Faculty & Professional Coach, Centre for Asia Leadership Initiatives</span>
                    </div>
                     <div class="flex items-center space-x-3 bg-gray-50 p-4 rounded-md shadow-sm">
                        <span class="text-indigo-500 text-2xl">📈</span>
                        <span>Strategic Advisor, Candour USA (diverse, equitable workplaces)</span>
                    </div>
                </div>
            </section>

            <!-- Career Journey Timeline Section -->
            <section class="bg-white p-8 rounded-lg shadow-md">
                <h2 class="text-3xl font-bold text-gray-800 mb-8 text-center">My Career Journey</h2>
                <div class="relative py-6">
                    <!-- Vertical line for the timeline effect, centered for larger screens -->
                    <div class="absolute inset-y-0 left-1/2 w-1 bg-indigo-200 rounded-full transform -translate-x-1/2 hidden sm:block"></div>
                    <!-- Vertical line for mobile, aligned with content start -->
                    <div class="absolute inset-y-0 left-4 w-1 bg-indigo-200 rounded-full sm:hidden"></div>


                    <!-- Timeline Item 1: Digital Industry Singapore, IMDA -->
                    <div class="mb-8 flex flex-col sm:flex-row items-center w-full">
                        <!-- Content on the left for desktop, ordered first on mobile -->
                        <div class="sm:w-1/2 sm:pr-8 flex justify-end relative timeline-item-left">
                            <div class="text-right sm:text-right w-full">
                                <h3 class="text-xl font-semibold text-indigo-800 mb-1">Account Director, Digital Industry Singapore, IMDA</h3>
                                <p class="text-sm font-semibold text-gray-600">2023 - Present</p>
                            </div>
                        </div>
                        <!-- Content on the right for desktop, ordered second on mobile -->
                        <div class="sm:w-1/2 sm:pl-8 pt-4 sm:pt-0 w-full">
                            <div class="bg-indigo-50 p-6 rounded-lg shadow-md w-full">
                                <p class="text-gray-700">Led long-term capability planning and competency frameworks for a 1,000-person organization, streamlined recruiting processes leading to 50% efficiency gains, and developed sector growth strategies for Quantum, Telecoms, Media, and Cybersecurity.</p>
                            </div>
                        </div>
                    </div>

                    <!-- Timeline Item 2: Open Government Products, GovTech (Deputy Director) -->
                    <div class="mb-8 flex flex-col sm:flex-row-reverse items-center w-full">
                        <!-- Content on the right for desktop, ordered first on mobile -->
                        <div class="sm:w-1/2 sm:pl-8 flex justify-start relative timeline-item-right">
                            <div class="text-left sm:text-left w-full">
                                <h3 class="text-xl font-semibold text-indigo-800 mb-1">Deputy Director & Head, Partnerships, Open Government Products, GovTech</h3>
                                <p class="text-sm font-semibold text-gray-600">2021 - 2023</p>
                            </div>
                        </div>
                        <!-- Content on the left for desktop, ordered second on mobile -->
                        <div class="sm:w-1/2 sm:pr-8 pt-4 sm:pt-0 w-full">
                            <div class="bg-indigo-50 p-6 rounded-lg shadow-md w-full">
                                <p class="text-gray-700">Led strategy, hiring, and management for Policy and Partnerships functions. Generated leads and secured projects to adapt OGP's ways of working to over 20 government agencies. Advised on national capability development frameworks.</p>
                            </div>
                        </div>
                    </div>

                    <!-- Timeline Item 3: Open Government Products, GovTech (Founding Head) -->
                    <div class="mb-8 flex flex-col sm:flex-row items-center w-full">
                        <div class="sm:w-1/2 sm:pr-8 flex justify-end relative timeline-item-left">
                            <div class="text-right sm:text-right w-full">
                                <h3 class="text-xl font-semibold text-indigo-800 mb-1">Founding Head, People and Culture, Open Government Products, GovTech</h3>
                                <p class="text-sm font-semibold text-gray-600">2019 - 2021</p>
                            </div>
                        </div>
                        <div class="sm:w-1/2 sm:pl-8 pt-4 sm:pt-0 w-full">
                            <div class="bg-indigo-50 p-6 rounded-lg shadow-md w-full">
                                <p class="text-gray-700">Designed and implemented processes to attract and retain technology talent, growing the organization from 26 to 70 staff. Developed a comprehensive performance management framework and shared OGP's innovative practices globally.</p>
                            </div>
                        </div>
                    </div>

                    <!-- Timeline Item 4: Ministry of Home Affairs -->
                    <div class="mb-8 flex flex-col sm:flex-row-reverse items-center w-full">
                        <div class="sm:w-1/2 sm:pl-8 flex justify-start relative timeline-item-right">
                            <div class="text-left sm:text-left w-full">
                                <h3 class="text-xl font-semibold text-indigo-800 mb-1">Lead, Futures Team / Strategic Resource Planning & Management, MHA</h3>
                                <p class="text-sm font-semibold text-gray-600">2017 - 2019</p>
                            </div>
                        </div>
                        <div class="sm:w-1/2 sm:pr-8 pt-4 sm:pt-0 w-full">
                            <div class="bg-indigo-50 p-6 rounded-lg shadow-md w-full">
                                <p class="text-gray-700">Led liaison with Ministry of Finance for financial and manpower resources. Developed a framework for government response options to fake news and devised policy recommendations to lower recidivism rates.</p>
                            </div>
                        </div>
                    </div>

                    <!-- Timeline Item 5: SkillsFuture Singapore -->
                    <div class="mb-8 flex flex-col sm:flex-row items-center w-full">
                        <div class="sm:w-1/2 sm:pr-8 flex justify-end relative timeline-item-left">
                            <div class="text-right sm:text-right w-full">
                                <h3 class="text-xl font-semibold text-indigo-800 mb-1">Senior Manager, Industry Development Division, SkillsFuture Singapore</h3>
                                <p class="text-sm font-semibold text-gray-600">2016 - 2017</p>
                            </div>
                        </div>
                        <div class="sm:w-1/2 sm:pl-8 pt-4 sm:pt-0 w-full">
                            <div class="bg-indigo-50 p-6 rounded-lg shadow-md w-full">
                                <p class="text-gray-700">Assessed demand and supply of emerging skills across industries. Developed hypotheses on skill emergence and planned nation-wide continuous education and adult training capacity for priority skills.</p>
                            </div>
                        </div>
                    </div>

                    <!-- Timeline Item 6: Strategy Group, Prime Minister's Office -->
                    <div class="mb-8 flex flex-col sm:flex-row-reverse items-center w-full">
                        <div class="sm:w-1/2 sm:pl-8 flex justify-start relative timeline-item-right">
                            <div class="text-left sm:text-left w-full">
                                <h3 class="text-xl font-semibold text-indigo-800 mb-1">Senior Strategist, Centre for Strategic Futures, Prime Minister's Office</h3>
                                <p class="text-sm font-semibold text-gray-600">2014 - 2016</p>
                            </div>
                        </div>
                        <div class="sm:w-1/2 sm:pr-8 pt-4 sm:pt-0 w-full">
                            <div class="bg-indigo-50 p-6 rounded-lg shadow-md w-full">
                                <p class="text-gray-700">Drove an inter-agency project to improve public service response time to strategic issues. Designed a game for considering long-term implications of trends and managed a $4M annual research portfolio.</p>
                            </div>
                        </div>
                    </div>

                    <!-- Timeline Item 7: Agricultural Transformation Agency (Ethiopia) -->
                    <div class="mb-8 flex flex-col sm:flex-row items-center w-full">
                        <div class="sm:w-1/2 sm:pr-8 flex justify-end relative timeline-item-left">
                            <div class="text-right sm:text-right w-full">
                                <h3 class="text-xl font-semibold text-indigo-800 mb-1">Senior Consultant, Agricultural Transformation Agency (Ethiopia)</h3>
                                <p class="text-sm font-semibold text-gray-600">2012 - 2013</p>
                            </div>
                        </div>
                        <div class="sm:w-1/2 sm:pl-8 pt-4 sm:pt-0 w-full">
                            <div class="bg-indigo-50 p-6 rounded-lg shadow-md w-full">
                                <p class="text-gray-700">Designed a public sector-led system for business support to agricultural cooperatives. Wrote and presented a report on improving Ethiopia's government capacity for effective Implementation Support.</p>
                            </div>
                        </div>
                    </div>

                    <!-- Timeline Item 8: Climate Change Development Authority (Papua New Guinea) -->
                    <div class="mb-8 flex flex-col sm:flex-row-reverse items-center w-full">
                        <div class="sm:w-1/2 sm:pl-8 flex justify-start relative timeline-item-right">
                            <div class="text-left sm:text-left w-full">
                                <h3 class="text-xl font-semibold text-indigo-800 mb-1">Founding COO, Climate Change Development Authority (PNG)</h3>
                                <p class="text-sm font-semibold text-gray-600">2010 - 2011</p>
                            </div>
                        </div>
                        <div class="sm:w-1/2 sm:pr-8 pt-4 sm:pt-0 w-full">
                            <div class="bg-indigo-50 p-6 rounded-lg shadow-md w-full">
                                <p class="text-gray-700">Led the formation of the Climate Change Development Authority, reported directly to the Prime Minister. Developed funding proposals over $500M and facilitated training programs for CCDA staff.</p>
                            </div>
                        </div>
                    </div>

                    <!-- Timeline Item 9: McKinsey & Company (South-East Asia) -->
                    <div class="mb-8 flex flex-col sm:flex-row items-center w-full">
                        <div class="sm:w-1/2 sm:pr-8 flex justify-end relative timeline-item-left">
                            <div class="text-right sm:text-right w-full">
                                <h3 class="text-xl font-semibold text-indigo-800 mb-1">Business Analyst, McKinsey & Company (South-East Asia)</h3>
                                <p class="text-sm font-semibold text-gray-600">2008 - 2009</p>
                            </div>
                        </div>
                        <div class="sm:w-1/2 sm:pl-8 pt-4 sm:pt-0 w-full">
                            <div class="bg-indigo-50 p-6 rounded-lg shadow-md w-full">
                                <p class="text-gray-700">Supported the Indonesian Council for Climate Change and prioritized opportunities for private education services in Malaysia. Conducted organizational health index surveys for public policy schools.</p>
                            </div>
                        </div>
                    </div>

                    <!-- Timeline Item 10: Harvard Kennedy School (Education) -->
                    <div class="mb-8 flex flex-col sm:flex-row-reverse items-center w-full">
                        <div class="sm:w-1/2 sm:pl-8 flex justify-start relative timeline-item-right">
                            <div class="text-left sm:text-left w-full">
                                <h3 class="text-xl font-semibold text-indigo-800 mb-1">Master in Public Policy, Harvard Kennedy School</h3>
                                <p class="text-sm font-semibold text-gray-600">2011 - 2013</p>
                            </div>
                        </div>
                        <div class="sm:w-1/2 sm:pr-8 pt-4 sm:pt-0 w-full">
                            <div class="bg-indigo-50 p-6 rounded-lg shadow-md w-full">
                                <p class="text-gray-700">Concentration: Political and Economic Development.</p>
                            </div>
                        </div>
                    </div>

                    <!-- Timeline Item 11: University of Michigan (Education) -->
                    <div class="flex flex-col sm:flex-row items-center w-full">
                        <div class="sm:w-1/2 sm:pr-8 flex justify-end relative timeline-item-left">
                            <div class="text-right sm:text-right w-full">
                                <h3 class="text-xl font-semibold text-indigo-800 mb-1">B.S.E. in Mechanical Engineering, University of Michigan</h3>
                                <p class="text-sm font-semibold text-gray-600">2004 - 2007</p>
                            </div>
                        </div>
                        <div class="sm:w-1/2 sm:pl-8 pt-4 sm:pt-0 w-full">
                            <div class="bg-indigo-50 p-6 rounded-lg shadow-md w-full">
                                <p class="text-gray-700">Cum Laude; Minor: Mathematics.</p>
                            </div>
                        </div>
                    </div>

                </div>
            </section>
        </main>
    </div>

    <script>
        // Get the button and dropdown elements
        const bookTimeBtn = document.getElementById('bookTimeBtn');
        const bookTimeDropdown = document.getElementById('bookTimeDropdown');

        // Toggle dropdown visibility on button click
        bookTimeBtn.addEventListener('click', function() {
            bookTimeDropdown.classList.toggle('hidden');
        });

        // Close dropdown when clicking outside
        window.addEventListener('click', function(event) {
            if (!bookTimeBtn.contains(event.target) && !bookTimeDropdown.contains(event.target)) {
                bookTimeDropdown.classList.add('hidden');
            }
        });
    </script>
</body>
</html>
`;

const speakingPageHTML = `<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Rahul Daswani - Speaking Engagements</title>
    <!-- Tailwind CSS CDN for easy styling -->
    <script src="https://cdn.tailwindcss.com"></script>
    <style>
        /* Custom font for a modern look */
        body {
            font-family: 'Inter', sans-serif;
            background-color: #f3f4f6; /* Light gray background for the whole page */
            padding-top: 64px; /* Adjust body padding to account for fixed navbar height */
        }
    </style>
</head>
<body>
    <!-- Navigation Bar (Duplicated for consistency, consider a shared component for larger sites) -->
    <nav class="fixed top-0 left-0 w-full bg-gray-800 text-white p-4 shadow-lg z-50">
        <div class="container mx-auto flex justify-between items-center">
            <a href="/" class="text-xl font-bold rounded-md px-3 py-2 hover:bg-gray-700 transition-colors">Rahul Daswani</a>
            <div class="flex items-center space-x-6">
                <!-- Main Page Link (Home) -->
                <a href="/" class="text-lg hover:text-indigo-300 transition-colors rounded-md px-3 py-2 hover:bg-gray-700">Home</a>

                <!-- Speaking Link (Current Page) -->
                <a href="/speaking" class="text-lg text-indigo-300 font-bold rounded-md px-3 py-2 bg-gray-700">Speaking</a>

                <!-- Contact Link -->
                <a href="mailto:rahuldaswani@post.harvard.edu" class="text-lg hover:text-indigo-300 transition-colors rounded-md px-3 py-2 hover:bg-gray-700">Contact</a>

                <!-- Book My Time Dropdown -->
                <div class="relative group">
                    <button id="bookTimeBtn" class="text-lg hover:text-indigo-300 transition-colors rounded-md px-3 py-2 hover:bg-gray-700 focus:outline-none">
                        Book My Time <span class="ml-1">&#9662;</span>
                    </button>
                    <div id="bookTimeDropdown" class="absolute right-0 mt-2 w-64 bg-white rounded-md shadow-lg py-2 hidden group-hover:block">
                        <a href="https://tidycal.com/rahuldaswani/15-minute-meeting" target="_blank" class="block px-4 py-2 text-gray-800 hover:bg-gray-100 transition-colors rounded-md">
                            15 minute (free) session
                        </a>
                        <a href="https://tidycal.com/rahuldaswani/60-minute-meeting" target="_blank" class="block px-4 py-2 text-gray-800 hover:bg-gray-100 transition-colors rounded-md">
                            60 minute coaching session
                        </a>
                    </div>
                </div>
            </div>
        </div>
    </nav>

    <div class="min-h-screen flex flex-col items-center py-10 px-4 sm:px-6 lg:px-8" id="top">
        <!-- Hero Section for Speaking Page -->
        <header class="bg-gradient-to-r from-green-500 to-teal-600 text-white w-full max-w-4xl mx-auto p-8 rounded-lg shadow-xl mb-12 text-center">
            <h1 class="text-4xl sm:text-5xl font-extrabold mb-4">Speaking Engagements</h1>
            <p class="text-xl sm:text-2xl font-light">Sharing insights on Futurist thinking, Government Innovation, and Executive Coaching.</p>
        </header>

        <main class="w-full max-w-4xl mx-auto">
            <!-- Upcoming Events Section -->
            <section class="bg-white p-8 rounded-lg shadow-md mb-12">
                <h2 class="text-3xl font-bold text-gray-800 mb-8 text-center">Upcoming Events</h2>
                <div class="space-y-8">
                    <!-- Example Upcoming Event 1 -->
                    <div class="border-l-4 border-indigo-500 pl-4 py-2">
                        <h3 class="text-xl font-semibold text-gray-900 mb-2">The Future of Public Service in a Digital Age</h3>
                        <p class="text-gray-700 mb-1">
                            <span class="font-medium">Date:</span> July 25, 2025
                        </p>
                        <p class="text-gray-700 mb-1">
                            <span class="font-medium">Location:</span> Singapore Tech Summit, Suntec City Convention Centre
                        </p>
                        <p class="text-gray-700">Join Rahul Daswani as he discusses the evolving landscape of government service and the role of technology in shaping future public policy.</p>
                        <a href="#" target="_blank" class="text-indigo-600 hover:underline mt-2 inline-block">Learn More / Register</a>
                    </div>

                    <!-- Example Upcoming Event 2 -->
                    <div class="border-l-4 border-indigo-500 pl-4 py-2">
                        <h3 class="text-xl font-semibold text-gray-900 mb-2">Leadership in Uncertainty: Lessons from Ex-McKinsey</h3>
                        <p class="text-gray-700 mb-1">
                            <span class="font-medium">Date:</span> August 10, 2025
                        </p>
                        <p class="text-700 mb-1">
                            <span class="font-medium">Location:</span> Virtual Webinar (Global Executive Leadership Forum)
                        </p>
                        <p class="text-gray-700">Explore strategies for effective leadership and decision-making in complex environments, drawing on insights from a former McKinsey analyst.</p>
                        <a href="#" target="_blank" class="text-indigo-600 hover:underline mt-2 inline-block">Register Here</a>
                    </div>
                </div>
            </section>

            <!-- Past Engagements Section -->
            <section class="bg-white p-8 rounded-lg shadow-md">
                <h2 class="text-3xl font-bold text-gray-800 mb-8 text-center">Past Engagements</h2>
                <div class="space-y-8">
                    <!-- Example Past Engagement 1 -->
                    <div class="border-l-4 border-gray-400 pl-4 py-2">
                        <h3 class="text-xl font-semibold text-gray-900 mb-2">Start with Culture: A Spotify Podcast Interview</h3>
                        <p class="gray-700 mb-1">
                            <span class="font-medium">Date:</span> 2020
                        </p>
                        <p class="text-gray-700 mb-1">
                            <span class="font-medium">Platform:</span> WeWork Spotify Podcast
                        </p>
                        <p class="text-gray-700">Discussion on building strong organizational culture, talent attraction, and retention strategies, particularly in fast-growing technology environments.</p>
                        <a href="https://open.spotify.com/episode/YOUR_EPISODE_ID" target="_blank" class="text-indigo-600 hover:underline mt-2 inline-block">Listen to Podcast</a>
                    </div>

                    <!-- Example Past Engagement 2 -->
                    <div class="border-l-4 border-gray-400 pl-4 py-2">
                        <h3 class="text-xl font-semibold text-gray-900 mb-2">What it'll take to lead a public agency of the future</h3>
                        <p class="text-gray-700 mb-1">
                            <span class="font-medium">Date:</span> 2021
                        </p>
                        <p class="text-gray-700 mb-1">
                            <span class="font-medium">Platform:</span> GovInsider Exclusive (Article/Interview)
                        </p>
                        <p class="text-gray-700">Insights into the qualities and approaches required for effective leadership in future public sector agencies, focusing on digital transformation and innovation.</p>
                        <a href="#" target="_blank" class="text-indigo-600 hover:underline mt-2 inline-block">Read Article</a>
                    </div>

                    <!-- Example Past Engagement 3 -->
                    <div class="border-l-4 border-gray-400 pl-4 py-2">
                        <h3 class="text-xl font-semibold text-gray-900 mb-2">Workforce Planning for an Ageing Population and Changing Technology</h3>
                        <p class="text-gray-700 mb-1">
                            <span class="font-medium">Date:</span> 2019
                        </p>
                        <p class="text-gray-700 mb-1">
                            <span class="font-medium">Platform:</span> Internal Publication / Senior Management Presentation
                        </p>
                        <p class="text-gray-700">Presented recommendations on strategic workforce planning to address demographic shifts and technological advancements within the public sector.</p>
                        <!-- No public link available, so omitted or can be a placeholder -->
                    </div>

                </div>
            </section>
        </main>
    </div>

    <script>
        // Get the button and dropdown elements
        const bookTimeBtn = document.getElementById('bookTimeBtn');
        const bookTimeDropdown = document.getElementById('bookTimeDropdown');

        // Toggle dropdown visibility on button click
        bookTimeBtn.addEventListener('click', function() {
            bookTimeDropdown.classList.toggle('hidden');
        });

        // Close dropdown when clicking outside
        window.addEventListener('click', function(event) {
            if (!bookTimeBtn.contains(event.target) && !bookTimeDropdown.contains(event.target)) {
                bookTimeDropdown.classList.add('hidden');
            }
        });
    </script>
</body>
</html>
`;

// Event listener for incoming requests
export default {
    async fetch(request, env, ctx) {
        const url = new URL(request.url);

        // Route based on the path
        if (url.pathname === '/speaking') {
            // Serve the speaking page HTML
            return new Response(speakingPageHTML, {
                headers: { 'Content-Type': 'text/html' },
            });
        } else if (url.pathname === '/' || url.pathname === '/index.html') {
            // Serve the main personal landing page HTML
            return new Response(personalLandingPageHTML, {
                headers: { 'Content-Type': 'text/html' },
            });
        } else {
            // Handle 404 for other paths
            return new Response('Not Found', { status: 404 });
        }
    }
};
