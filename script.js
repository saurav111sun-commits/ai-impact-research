@import url('https://fonts.googleapis.com/css2?family=Playfair+Display:wght@700&family=Lato:wght@400;700&display=swap');

:root {
    --royal-blue: #0A2463;
    --dark-charcoal: #212529;
    --gold-accent: #D9AE4B;
    --off-white: #F8F9FA;
    --light-gray: #DEE2E6;
    --pure-white: #FFFFFF;
}

body {
    font-family: 'Lato', sans-serif;
    line-height: 1.7;
    margin: 0;
    padding: 0;
    background-color: var(--off-white);
    color: var(--dark-charcoal);
}

.container {
    max-width: 900px;
    margin: 0 auto;
    padding: 0 25px;
}

header {
    background: linear-gradient(rgba(10, 36, 99, 0.85), rgba(10, 36, 99, 0.85)), url('https://www.transparenttextures.com/patterns/clean-gray-paper.png');
    color: var(--pure-white);
    padding: 3rem 0;
    text-align: center;
}

header h1 {
    font-family: 'Playfair Display', serif;
    font-size: 3rem;
    margin: 10px 0;
    color: var(--pure-white);
}

header .subtitle {
    font-size: 1.2rem;
    margin: 0;
    color: var(--gold-accent);
    text-transform: uppercase;
    letter-spacing: 1px;
}

header .authors {
    font-style: italic;
    color: var(--light-gray);
    font-size: 1.1rem;
    margin-top: 15px;
}

nav {
    background-color: var(--dark-charcoal);
    padding: 1rem 0;
    position: sticky;
    top: 0;
    z-index: 1000;
    box-shadow: 0 3px 6px rgba(0,0,0,0.2);
}

nav a {
    color: var(--pure-white);
    text-decoration: none;
    margin: 0 15px;
    font-weight: 700;
    transition: color 0.3s;
}

nav a:hover {
    color: var(--gold-accent);
}

nav .container {
    display: flex;
    justify-content: center;
    flex-wrap: wrap;
}

main {
    padding: 2.5rem 0;
}

section {
    background-color: var(--pure-white);
    padding: 2.5rem;
    margin-bottom: 2.5rem;
    border-radius: 10px;
    box-shadow: 0 5px 15px rgba(0,0,0,0.07);
    border-left: 5px solid var(--royal-blue);
}

h2 {
    font-family: 'Playfair Display', serif;
    color: var(--royal-blue);
    font-size: 2.2rem;
    margin-top: 0;
    margin-bottom: 1.5rem;
    border-bottom: 2px solid var(--gold-accent);
    padding-bottom: 10px;
}

h3 {
    font-family: 'Lato', sans-serif;
    font-weight: 700;
    color: var(--dark-charcoal);
    font-size: 1.4rem;
}

ul {
    padding-left: 20px;
}

li {
    margin-bottom: 10px;
}

.charts-container {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
    gap: 2rem;
    margin-top: 2rem;
}

.chart-item {
    padding: 1.5rem;
    border-radius: 8px;
    background-color: var(--off-white);
}

.chart-item h3 {
    text-align: center;
    margin-bottom: 1rem;
    font-size: 1.2rem;
}

/* Accordion Styles */
.accordion-item {
    border-bottom: 1px solid var(--light-gray);
}
.accordion-header {
    background-color: transparent;
    border: none;
    width: 100%;
    text-align: left;
    padding: 18px 0;
    font-size: 1.2rem;
    font-weight: 700;
    color: var(--dark-charcoal);
    cursor: pointer;
    transition: background-color 0.3s;
    position: relative;
}
.accordion-header::after {
    content: '+';
    position: absolute;
    right: 10px;
    font-size: 1.5rem;
    color: var(--royal-blue);
    transition: transform 0.3s;
}
.accordion-header.active::after {
    transform: rotate(45deg);
}
.accordion-header:hover {
    background-color: #f1f1f1;
}
.accordion-content {
    max-height: 0;
    overflow: hidden;
    transition: max-height 0.4s ease-out;
    padding: 0 15px;
    background-color: var(--off-white);
}

footer {
    text-align: center;
    padding: 2rem 0;
    background-color: var(--dark-charcoal);
    color: var(--pure-white);
    margin-top: 2rem;
}

/* Responsive Design */
@media (max-width: 768px) {
    header h1 {
        font-size: 2.5rem;
    }
    nav .container {
        flex-direction: column;
        align-items: center;
    }
    nav a {
        margin: 8px 0;
    }
}
