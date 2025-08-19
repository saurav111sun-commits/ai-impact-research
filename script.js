document.addEventListener('DOMContentLoaded', function() {
    // Smooth scrolling for navigation links
    document.querySelectorAll('nav a').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            document.querySelector(this.getAttribute('href')).scrollIntoView({
                behavior: 'smooth'
            });
        });
    });

    // Collapsible abstract section
    const abstractSection = document.getElementById('abstract');
    const abstractContent = abstractSection.querySelector('.collapsible-content');
    const abstractTitle = abstractSection.querySelector('h2');
    let isCollapsed = true;
    abstractContent.style.maxHeight = '120px';

    abstractTitle.addEventListener('click', () => {
        isCollapsed = !isCollapsed;
        if (!isCollapsed) {
            abstractContent.style.maxHeight = abstractContent.scrollHeight + 'px';
            abstractTitle.setAttribute('data-after', ' (Click to Collapse)');
        } else {
            abstractContent.style.maxHeight = '120px';
            abstractTitle.setAttribute('data-after', ' (Click to Expand)');
        }
    });
    
    // Set dynamic content for the ::after pseudo-element
    const styleSheet = document.createElement("style");
    document.head.appendChild(styleSheet);
    abstractTitle.addEventListener('click', () => {
         styleSheet.sheet.insertRule(`#abstract h2::after { content: '${abstractTitle.getAttribute("data-after")}'; }`, 0);
    });
     styleSheet.sheet.insertRule(`#abstract h2::after { content: ' (Click to Expand)'; }`, 0);


    // Chart.js implementation
    // Sex Distribution Chart
    const sexCtx = document.getElementById('sexDistributionChart').getContext('2d');
    new Chart(sexCtx, {
        type: 'pie',
        data: {
            labels: ['Females', 'Males'],
            datasets: [{
                label: 'Sex Distribution',
                data: [63.2, 36.8],
                backgroundColor: ['#007bff', '#6c757d'],
            }]
        },
        options: { responsive: true, plugins: { legend: { position: 'top' }}}
    });

    // Year of Study Chart
    const yearCtx = document.getElementById('yearOfStudyChart').getContext('2d');
    new Chart(yearCtx, {
        type: 'doughnut',
        data: {
            labels: ['1st Year', '2nd Year', '3rd Year'],
            datasets: [{
                label: 'Year of Study',
                data: [22.5, 36.8, 40.7],
                backgroundColor: ['#28a745', '#ffc107', '#dc3545'],
            }]
        },
        options: { responsive: true, plugins: { legend: { position: 'top' }}}
    });

    // Positive Impact Chart
    const positiveImpactCtx = document.getElementById('positiveImpactChart').getContext('2d');
    new Chart(positiveImpactCtx, {
        type: 'line',
        data: {
            labels: ['Control', 'Low', 'Moderate', 'High'],
            datasets: [
                {
                    label: 'P1: Cognitive Enhancement',
                    data: [5.9, 11.7, 14.0, 17.0],
                    borderColor: '#007bff',
                    tension: 0.2
                },
                {
                    label: 'P4: Psychological Well-being',
                    data: [5.8, 11.0, 14.2, 18.0],
                    borderColor: '#28a745',
                    tension: 0.2
                }
            ]
        },
        options: { responsive: true, scales: { y: { beginAtZero: true }}}
    });

    // Negative Impact Chart
    const negativeImpactCtx = document.getElementById('negativeImpactChart').getContext('2d');
    new Chart(negativeImpactCtx, {
        type: 'line',
        data: {
            labels: ['Control', 'Low', 'Moderate', 'High'],
            datasets: [
                {
                    label: 'N1: Cognitive Overreliance',
                    data: [10.0, 11.8, 11.7, 7.7],
                    borderColor: '#dc3545',
                    tension: 0.2
                },
                 {
                    label: 'N3: Psychological Stress',
                    data: [10.8, 11.8, 10.0, 7.4],
                    borderColor: '#ffc107',
                    tension: 0.2
                }
            ]
        },
        options: { responsive: true, scales: { y: { beginAtZero: false }}}
    });
});