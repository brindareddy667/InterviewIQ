/* ========================================
MAIN ACCORDIONS
======================================== */

document
.querySelectorAll(
".main-header"
)
.forEach(

header => {

header.addEventListener(

"click",

() => {

const content =
header.nextElementSibling;

content.classList.toggle(
"active"
);

}

);

}

);

function attachSubAccordions(){

document
.querySelectorAll(".sub-header")
.forEach(header => {

header.onclick = () => {

const content =
header.nextElementSibling;

content.classList.toggle(
"active"
);

};

});

}


document.getElementById(
"hr-content"
).innerHTML = `
<div class="sub-card">

<button class="sub-header">

1. Tell Me About Yourself

</button>

<div class="sub-content">

<h4>Why Interviewers Ask This</h4>

<p>
Usually the opening question of an interview.
It helps interviewers understand your background,
communication skills, confidence and career goals.
</p>

<h4>What They Evaluate</h4>

<ul>
<li>Communication Skills</li>
<li>Confidence</li>
<li>Clarity Of Thought</li>
<li>Career Direction</li>
<li>Professionalism</li>
</ul>

<h4>Common Mistakes</h4>

<ul>
<li>Starting from childhood</li>
<li>Reading resume line by line</li>
<li>Speaking too long</li>
<li>Ignoring projects</li>
<li>Not relating experience to role</li>
</ul>

<h4>Common Follow-Up Questions</h4>

<ol>
<li>Tell me more about your projects.</li>
<li>What motivates you?</li>
<li>What are your future goals?</li>
<li>Why did you choose this field?</li>
<li>What are you currently learning?</li>
<li>Which skill are you strongest at?</li>
<li>What challenge shaped you most?</li>
<li>What project are you proud of?</li>
<li>Why this industry?</li>
<li>What makes you unique?</li>
</ol>

</div>

</div>

<div class="sub-card">

<button class="sub-header">

2. Why Should We Hire You?

</button>

<div class="sub-content">

<h4>Why Interviewers Ask This</h4>

<p>
To understand how your skills and strengths
align with the role and what value you bring.
</p>

<h4>What They Evaluate</h4>

<ul>
<li>Self Awareness</li>
<li>Confidence</li>
<li>Communication</li>
<li>Professional Value</li>
<li>Role Understanding</li>
</ul>

<h4>Common Mistakes</h4>

<ul>
<li>Giving generic answers</li>
<li>No examples</li>
<li>Overconfidence</li>
<li>Comparing with others negatively</li>
<li>Talking only about academics</li>
</ul>

<h4>Common Follow-Up Questions</h4>

<ol>
<li>What makes you different?</li>
<li>What is your strongest skill?</li>
<li>How will you contribute?</li>
<li>Why are you a good fit?</li>
<li>How quickly do you learn?</li>
<li>How do you handle pressure?</li>
<li>What value can you add?</li>
<li>What achievements support your answer?</li>
<li>Why should we choose you?</li>
<li>How will you grow here?</li>
</ol>

</div>

</div>

<div class="sub-card">

<button class="sub-header">

3. Strengths & Weaknesses

</button>

<div class="sub-content">

<h4>Why Interviewers Ask This</h4>

<p>
To assess self-awareness, honesty,
professional maturity and growth mindset.
</p>

<h4>What They Evaluate</h4>

<ul>
<li>Honesty</li>
<li>Self Reflection</li>
<li>Improvement Mindset</li>
<li>Professional Awareness</li>
<li>Maturity</li>
</ul>

<h4>Common Mistakes</h4>

<ul>
<li>Saying you have no weaknesses</li>
<li>Giving fake weaknesses</li>
<li>Mentioning critical weaknesses</li>
<li>No improvement efforts</li>
<li>Overexplaining</li>
</ul>

<h4>Common Follow-Up Questions</h4>

<ol>
<li>How are you improving?</li>
<li>Give an example.</li>
<li>What feedback have you received?</li>
<li>How has it affected your work?</li>
<li>How do you manage it?</li>
<li>What strength helps you most?</li>
<li>Which strength are you proud of?</li>
<li>What weakness concerns you most?</li>
<li>How do you measure improvement?</li>
<li>What have you learned recently?</li>
</ol>

</div>

</div>

<div class="sub-card">

<button class="sub-header">

4. Where Do You See Yourself In 5 Years?

</button>

<div class="sub-content">

<h4>Why Interviewers Ask This</h4>

<p>
To understand ambition, career planning
and long-term professional goals.
</p>

<h4>What They Evaluate</h4>

<ul>
<li>Career Goals</li>
<li>Growth Mindset</li>
<li>Planning</li>
<li>Commitment</li>
<li>Professional Vision</li>
</ul>

<h4>Common Mistakes</h4>

<ul>
<li>Unrealistic goals</li>
<li>No clear direction</li>
<li>Job hopping mentality</li>
<li>Unrelated ambitions</li>
<li>Vague answers</li>
</ul>

<h4>Common Follow-Up Questions</h4>

<ol>
<li>What skills do you want to build?</li>
<li>What role interests you?</li>
<li>How will this role help?</li>
<li>What leadership goals do you have?</li>
<li>What industries interest you?</li>
<li>What responsibilities attract you?</li>
<li>How will you achieve those goals?</li>
<li>What motivates your growth?</li>
<li>What challenges excite you?</li>
<li>How will you measure success?</li>
</ol>

</div>

</div>

<div class="sub-card">

<button class="sub-header">

5. Why Do You Want This Role?

</button>

<div class="sub-content">

<h4>Why Interviewers Ask This</h4>

<p>
To evaluate your motivation,
career alignment and understanding
of the role.
</p>

<h4>What They Evaluate</h4>

<ul>
<li>Interest In Role</li>
<li>Career Alignment</li>
<li>Preparation</li>
<li>Awareness</li>
<li>Motivation</li>
</ul>

<h4>Common Mistakes</h4>

<ul>
<li>Talking only about salary</li>
<li>Generic answers</li>
<li>Not understanding the role</li>
<li>No career connection</li>
<li>Copy-paste responses</li>
</ul>

<h4>Common Follow-Up Questions</h4>

<ol>
<li>What excites you about this role?</li>
<li>How does it align with your goals?</li>
<li>Why not another role?</li>
<li>What do you expect to learn?</li>
<li>What responsibilities interest you?</li>
<li>What challenges do you expect?</li>
<li>What skills make you suitable?</li>
<li>How did you discover this role?</li>
<li>What interests you about this field?</li>
<li>How will you contribute?</li>
</ol>

</div>

</div>

<div class="sub-card">

<button class="sub-header">

6. Why Do You Want To Work Here?

</button>

<div class="sub-content">

<h4>Why Interviewers Ask This</h4>

<p>
To determine whether you researched the company
and genuinely understand its products, culture,
values and opportunities.
</p>

<h4>What They Evaluate</h4>

<ul>
<li>Company Research</li>
<li>Preparation</li>
<li>Professionalism</li>
<li>Interest Level</li>
<li>Cultural Fit</li>
</ul>

<h4>Common Mistakes</h4>

<ul>
<li>Knowing nothing about the company</li>
<li>Talking only about salary</li>
<li>Giving generic answers</li>
<li>Confusing company information</li>
<li>No genuine interest</li>
</ul>

<h4>Common Follow-Up Questions</h4>

<ol>
<li>What do you know about us?</li>
<li>What attracted you here?</li>
<li>Which company value do you like?</li>
<li>Which product interests you most?</li>
<li>Why not another company?</li>
<li>How can you contribute?</li>
<li>What research have you done?</li>
<li>What recent achievement impressed you?</li>
<li>What do you expect from us?</li>
<li>How do our goals align with yours?</li>
</ol>

</div>

</div>

<div class="sub-card">

<button class="sub-header">

7. Describe A Challenge You Faced

</button>

<div class="sub-content">

<h4>Why Interviewers Ask This</h4>

<p>
To evaluate resilience, problem solving ability,
ownership and decision making under pressure.
</p>

<h4>What They Evaluate</h4>

<ul>
<li>Problem Solving</li>
<li>Ownership</li>
<li>Decision Making</li>
<li>Resilience</li>
<li>Communication</li>
</ul>

<h4>Common Mistakes</h4>

<ul>
<li>Blaming others</li>
<li>No solution discussed</li>
<li>No measurable outcome</li>
<li>Weak examples</li>
<li>No learning explained</li>
</ul>

<h4>Common Follow-Up Questions</h4>

<ol>
<li>What was the hardest part?</li>
<li>How did you solve it?</li>
<li>What did you learn?</li>
<li>Would you do anything differently?</li>
<li>Who helped you?</li>
<li>How long did it take?</li>
<li>How did you stay motivated?</li>
<li>How did you measure success?</li>
<li>Did it affect deadlines?</li>
<li>Would you approach it differently today?</li>
</ol>

</div>

</div>

<div class="sub-card">

<button class="sub-header">

8. Leadership Experience

</button>

<div class="sub-content">

<h4>Why Interviewers Ask This</h4>

<p>
To understand your ability to guide,
influence and support a team toward a goal.
</p>

<h4>What They Evaluate</h4>

<ul>
<li>Leadership</li>
<li>Initiative</li>
<li>Responsibility</li>
<li>Communication</li>
<li>Decision Making</li>
</ul>

<h4>Common Mistakes</h4>

<ul>
<li>No real example</li>
<li>Taking all credit</li>
<li>Weak impact</li>
<li>No measurable result</li>
<li>Confusing leadership with authority</li>
</ul>

<h4>Common Follow-Up Questions</h4>

<ol>
<li>How did you motivate the team?</li>
<li>What challenge did you face?</li>
<li>How did you delegate tasks?</li>
<li>How did you handle disagreements?</li>
<li>What was the outcome?</li>
<li>How did you measure success?</li>
<li>What leadership style do you prefer?</li>
<li>What would you improve?</li>
<li>What did you learn?</li>
<li>How many people were involved?</li>
</ol>

</div>

</div>

<div class="sub-card">

<button class="sub-header">

9. Failure & Lessons Learned

</button>

<div class="sub-content">

<h4>Why Interviewers Ask This</h4>

<p>
To evaluate accountability,
self-awareness and willingness to improve.
</p>

<h4>What They Evaluate</h4>

<ul>
<li>Honesty</li>
<li>Accountability</li>
<li>Maturity</li>
<li>Growth Mindset</li>
<li>Resilience</li>
</ul>

<h4>Common Mistakes</h4>

<ul>
<li>Saying you never failed</li>
<li>Blaming others</li>
<li>No learning discussed</li>
<li>Trivial examples</li>
<li>Avoiding responsibility</li>
</ul>

<h4>Common Follow-Up Questions</h4>

<ol>
<li>What caused the failure?</li>
<li>What did you learn?</li>
<li>How did you recover?</li>
<li>How did it affect you?</li>
<li>Would you do anything differently?</li>
<li>What feedback did you receive?</li>
<li>How did you improve afterwards?</li>
<li>How did the team react?</li>
<li>What was the biggest lesson?</li>
<li>How did this shape your growth?</li>
</ol>

</div>

</div>

<div class="sub-card">

<button class="sub-header">

10. Team Conflict

</button>

<div class="sub-content">

<h4>Why Interviewers Ask This</h4>

<p>
To evaluate teamwork,
conflict resolution and communication skills.
</p>

<h4>What They Evaluate</h4>

<ul>
<li>Collaboration</li>
<li>Communication</li>
<li>Empathy</li>
<li>Maturity</li>
<li>Problem Solving</li>
</ul>

<h4>Common Mistakes</h4>

<ul>
<li>Speaking negatively about teammates</li>
<li>Blaming others entirely</li>
<li>No resolution discussed</li>
<li>Aggressive attitude</li>
<li>Weak examples</li>
</ul>

<h4>Common Follow-Up Questions</h4>

<ol>
<li>How did the conflict start?</li>
<li>How did you respond?</li>
<li>How was it resolved?</li>
<li>What did you learn?</li>
<li>Would you act differently now?</li>
<li>How did it affect the project?</li>
<li>How did others react?</li>
<li>What communication strategy worked?</li>
<li>How did trust get rebuilt?</li>
<li>What was the final outcome?</li>
</ol>

</div>

</div>

`;

attachSubAccordions();

document.getElementById(
"project-content"
).innerHTML = `

<div class="sub-card">

<button class="sub-header">

1. Explain Your Project Architecture

</button>

<div class="sub-content">

<h4>Why Interviewers Ask This</h4>

<p>
To verify whether you truly understand
your project and can explain the complete
system flow.
</p>

<h4>What They Evaluate</h4>

<ul>
<li>System Understanding</li>
<li>Ownership</li>
<li>Technical Depth</li>
<li>Design Thinking</li>
<li>Communication</li>
</ul>

<h4>Common Mistakes</h4>

<ul>
<li>Memorized answers</li>
<li>Skipping important components</li>
<li>Not knowing data flow</li>
<li>Confusing technologies</li>
<li>No architecture understanding</li>
</ul>

<h4>Common Follow-Up Questions</h4>

<ol>
<li>How does data flow through the system?</li>
<li>Why did you choose this architecture?</li>
<li>What are the bottlenecks?</li>
<li>How would you scale it?</li>
<li>How would you secure it?</li>
<li>What happens if a service fails?</li>
<li>How does the frontend communicate with backend?</li>
<li>What database is used?</li>
<li>How is data stored?</li>
<li>What would you improve?</li>
</ol>

</div>

</div>

<div class="sub-card">

<button class="sub-header">

2. Explain End-To-End Workflow

</button>

<div class="sub-content">

<h4>Why Interviewers Ask This</h4>

<p>
To understand whether you know every
step that happens from user input
to final output.
</p>

<h4>What They Evaluate</h4>

<ul>
<li>Project Understanding</li>
<li>Workflow Knowledge</li>
<li>Communication</li>
<li>Attention To Detail</li>
<li>Ownership</li>
</ul>

<h4>Common Mistakes</h4>

<ul>
<li>Skipping steps</li>
<li>Not knowing backend flow</li>
<li>Ignoring database interactions</li>
<li>Confusing process order</li>
<li>Giving vague answers</li>
</ul>

<h4>Common Follow-Up Questions</h4>

<ol>
<li>What happens first?</li>
<li>What happens after submission?</li>
<li>Where is data stored?</li>
<li>How is validation performed?</li>
<li>How are errors handled?</li>
<li>How does the backend respond?</li>
<li>What APIs are used?</li>
<li>How does authentication work?</li>
<li>How is output generated?</li>
<li>How is the workflow tested?</li>
</ol>

</div>

</div>

<div class="sub-card">

<button class="sub-header">

3. Why Did You Choose This Technology?

</button>

<div class="sub-content">

<h4>Why Interviewers Ask This</h4>

<p>
To evaluate decision making
and technology awareness.
</p>

<h4>What They Evaluate</h4>

<ul>
<li>Technology Knowledge</li>
<li>Decision Making</li>
<li>Research Skills</li>
<li>Practical Thinking</li>
<li>Awareness Of Alternatives</li>
</ul>

<h4>Common Mistakes</h4>

<ul>
<li>Saying it was easy</li>
<li>No comparison with alternatives</li>
<li>Not knowing limitations</li>
<li>Blind technology selection</li>
<li>Following tutorials only</li>
</ul>

<h4>Common Follow-Up Questions</h4>

<ol>
<li>Why Flask over Django?</li>
<li>Why SQL over NoSQL?</li>
<li>Why Python?</li>
<li>What alternatives exist?</li>
<li>What are the drawbacks?</li>
<li>Would you choose it again?</li>
<li>What are scalability concerns?</li>
<li>What are security concerns?</li>
<li>What did you learn from using it?</li>
<li>What would you replace it with?</li>
</ol>

</div>

</div>

<div class="sub-card">

<button class="sub-header">

4. Biggest Challenge Faced

</button>

<div class="sub-content">

<h4>Why Interviewers Ask This</h4>

<p>
To assess technical problem solving
and perseverance.
</p>

<h4>What They Evaluate</h4>

<ul>
<li>Problem Solving</li>
<li>Debugging Skills</li>
<li>Persistence</li>
<li>Learning Ability</li>
<li>Ownership</li>
</ul>

<h4>Common Mistakes</h4>

<ul>
<li>No real challenge</li>
<li>Blaming tools</li>
<li>No solution discussed</li>
<li>Weak example</li>
<li>No learning outcome</li>
</ul>

<h4>Common Follow-Up Questions</h4>

<ol>
<li>How did you identify the issue?</li>
<li>What debugging steps did you use?</li>
<li>What tools helped?</li>
<li>How long did it take?</li>
<li>What did you learn?</li>
<li>What alternatives did you try?</li>
<li>Who helped you?</li>
<li>Would you solve it differently today?</li>
<li>What impact did it have?</li>
<li>How did you verify the fix?</li>
</ol>

</div>

</div>

<div class="sub-card">

<button class="sub-header">

5. How Would You Improve The Project?

</button>

<div class="sub-content">

<h4>Why Interviewers Ask This</h4>

<p>
To assess critical thinking
and future planning ability.
</p>

<h4>What They Evaluate</h4>

<ul>
<li>Vision</li>
<li>Product Thinking</li>
<li>Technical Awareness</li>
<li>Scalability Thinking</li>
<li>Creativity</li>
</ul>

<h4>Common Follow-Up Questions</h4>

<ol>
<li>What features would you add?</li>
<li>How would you scale it?</li>
<li>How would you improve security?</li>
<li>How would you improve performance?</li>
<li>How would you improve UI?</li>
<li>How would you reduce cost?</li>
<li>What technologies would change?</li>
<li>How would you support more users?</li>
<li>What would version 2 contain?</li>
<li>What would be your highest priority?</li>
</ol>

</div>

</div>

<div class="sub-card">

<button class="sub-header">

6. Database Design Decisions

</button>

<div class="sub-content">

<h4>Why Interviewers Ask This</h4>

<p>
To evaluate how well you understand
data storage, relationships and
database architecture.
</p>

<h4>What They Evaluate</h4>

<ul>
<li>Database Knowledge</li>
<li>Data Modeling</li>
<li>Relationships</li>
<li>Scalability</li>
<li>Optimization Awareness</li>
</ul>

<h4>Common Mistakes</h4>

<ul>
<li>Not knowing schema design</li>
<li>Confusing tables and relationships</li>
<li>Ignoring normalization</li>
<li>No indexing knowledge</li>
<li>Weak database understanding</li>
</ul>

<h4>Common Follow-Up Questions</h4>

<ol>
<li>How many tables did you create?</li>
<li>Why did you create those tables?</li>
<li>How are tables connected?</li>
<li>What primary keys are used?</li>
<li>Did you use foreign keys?</li>
<li>How would you optimize queries?</li>
<li>What indexing strategy would you use?</li>
<li>How would you scale the database?</li>
<li>What challenges did you face?</li>
<li>Would you redesign anything?</li>
</ol>

</div>

</div>

<div class="sub-card">

<button class="sub-header">

7. Scalability Considerations

</button>

<div class="sub-content">

<h4>Why Interviewers Ask This</h4>

<p>
To understand whether you can think
beyond a small student project and
design systems for larger user bases.
</p>

<h4>What They Evaluate</h4>

<ul>
<li>System Design Thinking</li>
<li>Scalability Awareness</li>
<li>Architecture Knowledge</li>
<li>Performance Understanding</li>
<li>Future Planning</li>
</ul>

<h4>Common Follow-Up Questions</h4>

<ol>
<li>How would you support 10,000 users?</li>
<li>What becomes the bottleneck?</li>
<li>Would you cache data?</li>
<li>Would you change the database?</li>
<li>How would you scale the backend?</li>
<li>Would you use load balancing?</li>
<li>How would you improve performance?</li>
<li>How would you reduce latency?</li>
<li>How would you monitor the system?</li>
<li>What would fail first?</li>
</ol>

</div>

</div>

<div class="sub-card">

<button class="sub-header">

8. Security Considerations

</button>

<div class="sub-content">

<h4>Why Interviewers Ask This</h4>

<p>
To evaluate awareness of real-world
security practices and risks.
</p>

<h4>What They Evaluate</h4>

<ul>
<li>Security Awareness</li>
<li>Authentication Knowledge</li>
<li>Authorization Knowledge</li>
<li>Data Protection</li>
<li>Risk Awareness</li>
</ul>

<h4>Common Follow-Up Questions</h4>

<ol>
<li>How are passwords stored?</li>
<li>How do you prevent SQL Injection?</li>
<li>How do you validate user input?</li>
<li>How do you protect sensitive data?</li>
<li>How would authentication work?</li>
<li>How would authorization work?</li>
<li>How do you prevent XSS attacks?</li>
<li>How do you secure APIs?</li>
<li>How would you handle security breaches?</li>
<li>What security feature would you add first?</li>
</ol>

</div>

</div>

<div class="sub-card">

<button class="sub-header">

9. Deployment Strategy

</button>

<div class="sub-content">

<h4>Why Interviewers Ask This</h4>

<p>
To determine whether you understand
how projects move from development
to production environments.
</p>

<h4>What They Evaluate</h4>

<ul>
<li>Deployment Knowledge</li>
<li>Hosting Awareness</li>
<li>Production Thinking</li>
<li>Infrastructure Basics</li>
<li>System Lifecycle Understanding</li>
</ul>

<h4>Common Follow-Up Questions</h4>

<ol>
<li>Where would you host this project?</li>
<li>How would you deploy updates?</li>
<li>How would you monitor production?</li>
<li>How would you manage databases?</li>
<li>How would you handle backups?</li>
<li>How would you manage downtime?</li>
<li>Would you use Docker?</li>
<li>Would you use cloud services?</li>
<li>How would you scale deployment?</li>
<li>How would you roll back changes?</li>
</ol>

</div>

</div>

<div class="sub-card">

<button class="sub-header">

10. Biggest Learning From The Project

</button>

<div class="sub-content">

<h4>Why Interviewers Ask This</h4>

<p>
To understand how much growth,
learning and ownership you gained
through the project.
</p>

<h4>What They Evaluate</h4>

<ul>
<li>Reflection</li>
<li>Learning Ability</li>
<li>Ownership</li>
<li>Growth Mindset</li>
<li>Professional Development</li>
</ul>

<h4>Common Follow-Up Questions</h4>

<ol>
<li>What surprised you most?</li>
<li>What skill improved the most?</li>
<li>What would you do differently?</li>
<li>What mistake taught you the most?</li>
<li>What technology did you learn?</li>
<li>What challenge changed your approach?</li>
<li>What are you proud of?</li>
<li>What would you teach others?</li>
<li>What would you improve first?</li>
<li>How did this project help your career?</li>
</ol>

</div>

</div>

`;

attachSubAccordions();

document.getElementById(
"technical-content"
).innerHTML = `

<div class="sub-card">

<button class="sub-header">

🐍 Python

</button>

<div class="sub-content">

<h4>Most Asked Questions</h4>

<ol>
<li>Difference between List and Tuple</li>
<li>Dictionary vs Set</li>
<li>What are Decorators?</li>
<li>What are Generators?</li>
<li>Difference between Deep Copy and Shallow Copy</li>
<li>Explain Lambda Functions</li>
<li>What are Iterators?</li>
<li>Difference between is and ==</li>
<li>How does Exception Handling work?</li>
<li>What are Python Modules and Packages?</li>
</ol>

<h4>Important Topics</h4>

<ul>
<li>Data Types</li>
<li>Functions</li>
<li>OOP Concepts</li>
<li>Exception Handling</li>
<li>File Handling</li>
<li>Modules & Packages</li>
<li>Decorators</li>
<li>Generators</li>
<li>Comprehensions</li>
<li>Memory Management</li>
</ul>

<h4>Coding Round Focus</h4>

<ul>
<li>String Manipulation</li>
<li>Arrays & Lists</li>
<li>Hashmaps</li>
<li>Recursion</li>
<li>Searching</li>
<li>Sorting</li>
<li>Pattern Problems</li>
<li>Sliding Window</li>
<li>Two Pointer Technique</li>
<li>Basic Dynamic Programming</li>
</ul>

<h4>Common Mistakes</h4>

<ul>
<li>Ignoring edge cases</li>
<li>Poor exception handling</li>
<li>Not understanding references</li>
<li>Confusing mutable and immutable objects</li>
<li>Writing inefficient loops</li>
<li>Hardcoding values</li>
<li>Ignoring code readability</li>
<li>Poor naming conventions</li>
<li>Not modularizing code</li>
<li>Lack of testing</li>
</ul>

<h4>Interview Patterns</h4>

<ul>
<li>Debug a code snippet</li>
<li>Optimize an existing solution</li>
<li>Write utility functions</li>
<li>Implement OOP design</li>
<li>Solve data processing tasks</li>
<li>File handling problems</li>
<li>API integration tasks</li>
<li>Automation scripts</li>
<li>Data manipulation questions</li>
<li>Scenario-based Python questions</li>
</ul>

</div>

</div>

<div class="sub-card">

<button class="sub-header">

🗄 SQL

</button>

<div class="sub-content">

<h4>Most Asked Questions</h4>

<ol>
<li>Difference between WHERE and HAVING</li>
<li>Types of JOINs</li>
<li>Primary Key vs Foreign Key</li>
<li>What is Normalization?</li>
<li>What is Indexing?</li>
<li>Difference between DELETE, DROP and TRUNCATE</li>
<li>What are Subqueries?</li>
<li>What are Views?</li>
<li>What are Stored Procedures?</li>
<li>How does Group By work?</li>
</ol>

<h4>Important Topics</h4>

<ul>
<li>SELECT Queries</li>
<li>Joins</li>
<li>Aggregation Functions</li>
<li>Subqueries</li>
<li>Normalization</li>
<li>Indexes</li>
<li>Views</li>
<li>Transactions</li>
<li>Stored Procedures</li>
<li>Database Design</li>
</ul>

<h4>Coding Round Focus</h4>

<ul>
<li>Employee Database Problems</li>
<li>Nth Highest Salary</li>
<li>Duplicate Detection</li>
<li>Group By Challenges</li>
<li>Join Problems</li>
<li>Sales Analytics</li>
<li>Customer Analytics</li>
<li>Date Functions</li>
<li>Ranking Queries</li>
<li>Window Functions</li>
</ul>

<h4>Common Mistakes</h4>

<ul>
<li>Using SELECT *</li>
<li>Missing indexes</li>
<li>Incorrect joins</li>
<li>Ignoring null values</li>
<li>Poor query optimization</li>
<li>Redundant tables</li>
<li>Improper normalization</li>
<li>Weak database design</li>
<li>No constraints</li>
<li>Not considering scalability</li>
</ul>

<h4>Interview Patterns</h4>

<ul>
<li>Write SQL query on whiteboard</li>
<li>Optimize slow query</li>
<li>Database schema design</li>
<li>Normalization discussion</li>
<li>Real-world analytics problems</li>
<li>Ranking and aggregation</li>
<li>Debug broken query</li>
<li>Data cleaning tasks</li>
<li>Database scaling discussion</li>
<li>Index optimization questions</li>
</ul>

</div>

</div>

<div class="sub-card">

<button class="sub-header">

🤖 Machine Learning

</button>

<div class="sub-content">

<h4>Most Asked Questions</h4>

<ol>
<li>Bias vs Variance</li>
<li>Overfitting vs Underfitting</li>
<li>Train Test Split</li>
<li>Feature Engineering</li>
<li>Cross Validation</li>
<li>Random Forest vs Decision Tree</li>
<li>Classification vs Regression</li>
<li>Confusion Matrix</li>
<li>Precision vs Recall</li>
<li>Model Evaluation Metrics</li>
</ol>

<h4>Important Topics</h4>

<ul>
<li>Data Cleaning</li>
<li>Feature Engineering</li>
<li>Model Selection</li>
<li>Hyperparameter Tuning</li>
<li>Model Evaluation</li>
<li>Cross Validation</li>
<li>Classification</li>
<li>Regression</li>
<li>Clustering</li>
<li>Deployment Basics</li>
</ul>

<h4>Project Discussion Topics</h4>

<ul>
<li>Dataset Selection</li>
<li>Data Preprocessing</li>
<li>Feature Selection</li>
<li>Model Choice</li>
<li>Evaluation Metrics</li>
<li>Error Analysis</li>
<li>Challenges Faced</li>
<li>Model Improvements</li>
<li>Deployment Strategy</li>
<li>Future Enhancements</li>
</ul>

<h4>Common Mistakes</h4>

<ul>
<li>Data Leakage</li>
<li>Ignoring Data Quality</li>
<li>Overfitting</li>
<li>Wrong Metric Selection</li>
<li>No Baseline Model</li>
<li>Poor Feature Engineering</li>
<li>Weak Validation</li>
<li>Ignoring Business Context</li>
<li>No Error Analysis</li>
<li>Blind Model Selection</li>
</ul>

<h4>Interview Patterns</h4>

<ul>
<li>Explain ML Project</li>
<li>Model Comparison Questions</li>
<li>Feature Engineering Discussion</li>
<li>Business Problem Translation</li>
<li>Dataset Challenges</li>
<li>Evaluation Metric Selection</li>
<li>Real-world Scenarios</li>
<li>Error Analysis Questions</li>
<li>Deployment Questions</li>
<li>Optimization Discussions</li>
</ul>

</div>

</div>

<div class="sub-card">

<button class="sub-header">

🌐 Web Development

</button>

<div class="sub-content">

<h4>Most Asked Questions</h4>

<ol>
<li>Difference between GET and POST</li>
<li>How do REST APIs work?</li>
<li>Client Side vs Server Side Rendering</li>
<li>Authentication vs Authorization</li>
<li>Cookies vs Sessions</li>
<li>What is CORS?</li>
<li>How does a browser request work?</li>
<li>How do APIs communicate?</li>
<li>How do you secure a web application?</li>
<li>How would you improve website performance?</li>
</ol>

<h4>Important Topics</h4>

<ul>
<li>HTML Fundamentals</li>
<li>CSS Layouts</li>
<li>JavaScript</li>
<li>DOM Manipulation</li>
<li>REST APIs</li>
<li>Authentication</li>
<li>Authorization</li>
<li>Frontend Frameworks</li>
<li>Backend Development</li>
<li>Deployment</li>
</ul>

<h4>Project Discussion Topics</h4>

<ul>
<li>Frontend Architecture</li>
<li>Backend Architecture</li>
<li>API Design</li>
<li>User Authentication</li>
<li>Database Integration</li>
<li>Error Handling</li>
<li>Performance Optimization</li>
<li>Security</li>
<li>Deployment</li>
<li>Scalability</li>
</ul>

<h4>Common Mistakes</h4>

<ul>
<li>No Input Validation</li>
<li>Hardcoded Values</li>
<li>Poor Error Handling</li>
<li>Weak Security</li>
<li>Ignoring Responsive Design</li>
<li>Messy Folder Structure</li>
<li>No API Documentation</li>
<li>Poor UI Consistency</li>
<li>Weak State Management</li>
<li>No Testing</li>
</ul>

<h4>Interview Patterns</h4>

<ul>
<li>Build CRUD Application</li>
<li>Design Login System</li>
<li>Create REST API</li>
<li>Debug Frontend Issue</li>
<li>Optimize Website</li>
<li>Authentication Flow Discussion</li>
<li>Database Integration Questions</li>
<li>Deployment Discussion</li>
<li>Performance Analysis</li>
<li>Project Walkthrough</li>
</ul>

</div>

</div>

<div class="sub-card">

<button class="sub-header">

📚 Data Structures & Algorithms

</button>

<div class="sub-content">

<h4>Most Asked Questions</h4>

<ol>
<li>Arrays vs Linked Lists</li>
<li>Stack vs Queue</li>
<li>HashMap Internals</li>
<li>Binary Search</li>
<li>Tree Traversals</li>
<li>BFS vs DFS</li>
<li>Recursion</li>
<li>Sorting Algorithms</li>
<li>Dynamic Programming Basics</li>
<li>Time Complexity Analysis</li>
</ol>

<h4>Important Topics</h4>

<ul>
<li>Arrays</li>
<li>Strings</li>
<li>Linked Lists</li>
<li>Stacks</li>
<li>Queues</li>
<li>Trees</li>
<li>Graphs</li>
<li>Hashing</li>
<li>Recursion</li>
<li>Dynamic Programming</li>
</ul>

<h4>Coding Round Focus</h4>

<ul>
<li>Two Pointer Problems</li>
<li>Sliding Window</li>
<li>Binary Search</li>
<li>Sorting</li>
<li>Hashmaps</li>
<li>Tree Traversals</li>
<li>Graph Traversals</li>
<li>Greedy Algorithms</li>
<li>Recursion</li>
<li>Dynamic Programming</li>
</ul>

<h4>Common Mistakes</h4>

<ul>
<li>Ignoring Edge Cases</li>
<li>Poor Complexity Analysis</li>
<li>Brute Force Solutions</li>
<li>Weak Problem Breakdown</li>
<li>No Dry Run</li>
<li>Incorrect Recursion</li>
<li>Memory Inefficiency</li>
<li>Weak Optimization</li>
<li>Incomplete Testing</li>
<li>Panicking Under Pressure</li>
</ul>

<h4>Interview Patterns</h4>

<ul>
<li>Live Coding</li>
<li>Optimization Discussion</li>
<li>Complexity Analysis</li>
<li>Whiteboard Coding</li>
<li>Debugging Existing Code</li>
<li>Edge Case Identification</li>
<li>Algorithm Comparison</li>
<li>Data Structure Selection</li>
<li>Scenario-Based Coding</li>
<li>Follow-Up Optimizations</li>
</ul>

</div>

</div>

<div class="sub-card">

<button class="sub-header">

☁️ Cloud Basics

</button>

<div class="sub-content">

<h4>Most Asked Questions</h4>

<ol>
<li>What is Cloud Computing?</li>
<li>IaaS vs PaaS vs SaaS</li>
<li>What is AWS?</li>
<li>What is Azure?</li>
<li>What is Scalability?</li>
<li>What is Load Balancing?</li>
<li>What are Virtual Machines?</li>
<li>What are Containers?</li>
<li>What is Docker?</li>
<li>What is CI/CD?</li>
</ol>

<h4>Important Topics</h4>

<ul>
<li>Cloud Fundamentals</li>
<li>AWS Services</li>
<li>Azure Services</li>
<li>Storage Solutions</li>
<li>Networking</li>
<li>Security</li>
<li>Monitoring</li>
<li>Containers</li>
<li>Docker</li>
<li>CI/CD</li>
</ul>

<h4>Project Discussion Topics</h4>

<ul>
<li>Hosting Applications</li>
<li>Database Hosting</li>
<li>Storage Solutions</li>
<li>Monitoring</li>
<li>Scaling Applications</li>
<li>Backups</li>
<li>Cloud Security</li>
<li>Cost Optimization</li>
<li>Deployment Pipelines</li>
<li>Cloud Architecture</li>
</ul>

<h4>Interview Patterns</h4>

<ul>
<li>Deployment Questions</li>
<li>Cloud Architecture Discussion</li>
<li>AWS Service Selection</li>
<li>Scaling Problems</li>
<li>Cost Optimization</li>
<li>Cloud Security Questions</li>
<li>Docker Questions</li>
<li>CI/CD Questions</li>
<li>Migration Questions</li>
<li>Production Discussions</li>
</ul>

</div>

</div>

<div class="sub-card">

<button class="sub-header">

🏗️ System Design

</button>

<div class="sub-content">

<h4>Most Asked Questions</h4>

<ol>
<li>Design URL Shortener</li>
<li>Design Chat Application</li>
<li>Design Queue System</li>
<li>Design File Storage System</li>
<li>Design Video Streaming Service</li>
<li>Design Notification Service</li>
<li>How would you scale a website?</li>
<li>How would you handle millions of users?</li>
<li>How would you reduce latency?</li>
<li>How would you design APIs?</li>
</ol>

<h4>Important Topics</h4>

<ul>
<li>Scalability</li>
<li>Caching</li>
<li>Databases</li>
<li>Load Balancing</li>
<li>Microservices</li>
<li>API Design</li>
<li>Message Queues</li>
<li>Monitoring</li>
<li>Reliability</li>
<li>Security</li>
</ul>

<h4>Interview Patterns</h4>

<ul>
<li>High Level Design</li>
<li>Low Level Design</li>
<li>Scaling Discussions</li>
<li>Database Choices</li>
<li>Architecture Reviews</li>
<li>API Design</li>
<li>Traffic Estimation</li>
<li>Bottleneck Analysis</li>
<li>Failure Handling</li>
<li>Production Scenarios</li>
</ul>

</div>

</div>

`;

attachSubAccordions();

document.getElementById(
"scenario-content"
).innerHTML = `

<div class="sub-card">

<button class="sub-header">

1. Application Crashes In Production

</button>

<div class="sub-content">

<h4>Situation</h4>

<p>
Your application works perfectly during testing,
but suddenly crashes after deployment.
</p>

<h4>What Interviewers Expect</h4>

<ul>
<li>Stay Calm</li>
<li>Check Logs</li>
<li>Reproduce Issue</li>
<li>Identify Root Cause</li>
<li>Deploy Fix Safely</li>
</ul>

<h4>Investigation Steps</h4>

<ol>
<li>Check application logs</li>
<li>Review recent deployments</li>
<li>Check server resources</li>
<li>Verify database connectivity</li>
<li>Check environment variables</li>
<li>Review error traces</li>
<li>Reproduce issue locally</li>
<li>Isolate failing module</li>
<li>Test fix</li>
<li>Deploy and monitor</li>
</ol>

</div>

</div>

<div class="sub-card">

<button class="sub-header">

2. Database Suddenly Becomes Slow

</button>

<div class="sub-content">

<h4>Situation</h4>

<p>
Users complain that pages are loading
extremely slowly due to database delays.
</p>

<h4>What Interviewers Expect</h4>

<ul>
<li>Analytical Thinking</li>
<li>Performance Debugging</li>
<li>Database Knowledge</li>
<li>Optimization Skills</li>
<li>Root Cause Analysis</li>
</ul>

<h4>Investigation Steps</h4>

<ol>
<li>Identify slow queries</li>
<li>Review execution plans</li>
<li>Check indexes</li>
<li>Monitor database load</li>
<li>Analyze joins</li>
<li>Check locks</li>
<li>Review recent changes</li>
<li>Optimize queries</li>
<li>Add caching if needed</li>
<li>Monitor improvements</li>
</ol>

</div>

</div>

<div class="sub-card">

<button class="sub-header">

3. API Starts Returning Errors

</button>

<div class="sub-content">

<h4>Situation</h4>

<p>
A previously working API begins returning
500 Internal Server Errors.
</p>

<h4>Investigation Steps</h4>

<ol>
<li>Check API logs</li>
<li>Review recent code changes</li>
<li>Validate request payloads</li>
<li>Verify database access</li>
<li>Check third-party dependencies</li>
<li>Inspect error traces</li>
<li>Reproduce issue</li>
<li>Test fixes</li>
<li>Deploy patch</li>
<li>Monitor traffic</li>
</ol>

</div>

</div>

<div class="sub-card">

<button class="sub-header">

4. Users Report Wrong Results

</button>

<div class="sub-content">

<h4>Situation</h4>

<p>
The application runs successfully,
but results shown to users are incorrect.
</p>

<h4>Investigation Steps</h4>

<ol>
<li>Verify input data</li>
<li>Check business logic</li>
<li>Validate database values</li>
<li>Review calculations</li>
<li>Inspect APIs</li>
<li>Compare expected output</li>
<li>Run test cases</li>
<li>Review recent updates</li>
<li>Identify root cause</li>
<li>Deploy correction</li>
</ol>

</div>

</div>

<div class="sub-card">

<button class="sub-header">

5. Login System Stops Working

</button>

<div class="sub-content">

<h4>Situation</h4>

<p>
Users are suddenly unable to sign in.
</p>

<h4>Investigation Steps</h4>

<ol>
<li>Check authentication service</li>
<li>Verify credentials flow</li>
<li>Check token generation</li>
<li>Inspect sessions</li>
<li>Review database users table</li>
<li>Validate encryption logic</li>
<li>Check logs</li>
<li>Reproduce issue</li>
<li>Patch authentication flow</li>
<li>Retest login process</li>
</ol>

</div>

</div>

<div class="sub-card">

<button class="sub-header">

6. High Traffic Surge

</button>

<div class="sub-content">

<h4>Situation</h4>

<p>
Your application suddenly receives
10x more users than normal.
</p>

<h4>Expected Thinking</h4>

<ol>
<li>Identify bottlenecks</li>
<li>Scale servers</li>
<li>Use load balancing</li>
<li>Optimize database</li>
<li>Enable caching</li>
<li>Reduce heavy operations</li>
<li>Monitor performance</li>
<li>Auto-scale infrastructure</li>
<li>Track error rates</li>
<li>Review architecture</li>
</ol>

</div>

</div>

<div class="sub-card">

<button class="sub-header">

7. Memory Leak In Production

</button>

<div class="sub-content">

<h4>Situation</h4>

<p>
Server memory usage keeps increasing
until the application crashes.
</p>

<h4>Investigation Steps</h4>

<ol>
<li>Monitor memory usage</li>
<li>Review object lifecycle</li>
<li>Check loops</li>
<li>Inspect caches</li>
<li>Review file handling</li>
<li>Analyze logs</li>
<li>Use profiling tools</li>
<li>Find leak source</li>
<li>Fix issue</li>
<li>Monitor again</li>
</ol>

</div>

</div>

<div class="sub-card">

<button class="sub-header">

8. Deployment Failure

</button>

<div class="sub-content">

<h4>Situation</h4>

<p>
Deployment pipeline fails moments before release.
</p>

<h4>Investigation Steps</h4>

<ol>
<li>Review deployment logs</li>
<li>Check build status</li>
<li>Verify environment variables</li>
<li>Check dependencies</li>
<li>Validate configuration</li>
<li>Run tests</li>
<li>Rebuild application</li>
<li>Identify failure point</li>
<li>Deploy fix</li>
<li>Verify production health</li>
</ol>

</div>

</div>

<div class="sub-card">

<button class="sub-header">

9. Security Breach Alert

</button>

<div class="sub-content">

<h4>Situation</h4>

<p>
You receive an alert indicating suspicious activity.
</p>

<h4>Expected Response</h4>

<ol>
<li>Contain threat</li>
<li>Review logs</li>
<li>Identify affected systems</li>
<li>Revoke compromised access</li>
<li>Patch vulnerabilities</li>
<li>Notify stakeholders</li>
<li>Restore secure access</li>
<li>Monitor activity</li>
<li>Document incident</li>
<li>Prevent recurrence</li>
</ol>

</div>

</div>

<div class="sub-card">

<button class="sub-header">

10. Third Party Service Failure

</button>

<div class="sub-content">

<h4>Situation</h4>

<p>
A critical third-party API becomes unavailable.
</p>

<h4>Expected Thinking</h4>

<ol>
<li>Confirm outage</li>
<li>Enable fallback</li>
<li>Retry intelligently</li>
<li>Use cached data</li>
<li>Notify users</li>
<li>Monitor status</li>
<li>Reduce dependency impact</li>
<li>Prepare backup solution</li>
<li>Restore functionality</li>
<li>Review resilience strategy</li>
</ol>

</div>

</div>

`;

attachSubAccordions();

document.getElementById(
"softskill-content"
).innerHTML = `

<div class="sub-card">

<button class="sub-header">

1. STAR Method

</button>

<div class="sub-content">

<h4>What Is STAR?</h4>

<p>
A structured framework used to answer
behavioral interview questions effectively.
</p>

<h4>Structure</h4>

<ol>
<li>Situation</li>
<li>Task</li>
<li>Action</li>
<li>Result</li>
</ol>

<h4>When To Use</h4>

<ul>
<li>Leadership Questions</li>
<li>Conflict Resolution Questions</li>
<li>Teamwork Questions</li>
<li>Challenge Questions</li>
<li>Achievement Questions</li>
<li>Failure Questions</li>
<li>Problem Solving Questions</li>
<li>Project Discussions</li>
<li>Responsibility Questions</li>
<li>Decision Making Questions</li>
</ul>

<h4>Common Mistakes</h4>

<ul>
<li>Missing the Result</li>
<li>Giving vague examples</li>
<li>Talking too much about the situation</li>
<li>Ignoring personal contribution</li>
<li>No measurable outcome</li>
</ul>

</div>

</div>

<div class="sub-card">

<button class="sub-header">

2. Communication Skills

</button>

<div class="sub-content">

<h4>What Interviewers Expect</h4>

<ul>
<li>Clear Speaking</li>
<li>Structured Answers</li>
<li>Professional Language</li>
<li>Confidence</li>
<li>Active Listening</li>
<li>Logical Thinking</li>
<li>Concise Explanations</li>
<li>Positive Tone</li>
<li>Clarity</li>
<li>Engagement</li>
</ul>

<h4>Ways To Improve</h4>

<ol>
<li>Practice introductions</li>
<li>Record yourself</li>
<li>Mock interviews</li>
<li>Read aloud daily</li>
<li>Improve vocabulary</li>
<li>Slow down while speaking</li>
<li>Structure answers</li>
<li>Practice storytelling</li>
<li>Avoid filler words</li>
<li>Review recordings</li>
</ol>

</div>

</div>

<div class="sub-card">

<button class="sub-header">

3. Confidence During Interviews

</button>

<div class="sub-content">

<h4>Confidence Signals</h4>

<ul>
<li>Good posture</li>
<li>Steady voice</li>
<li>Eye contact</li>
<li>Calm pace</li>
<li>Clear answers</li>
<li>Professional attitude</li>
<li>Positive energy</li>
<li>Prepared responses</li>
<li>Active listening</li>
<li>Strong introductions</li>
</ul>

<h4>Common Confidence Killers</h4>

<ul>
<li>Lack of preparation</li>
<li>Negative self-talk</li>
<li>Rushing answers</li>
<li>Poor sleep</li>
<li>Comparing yourself to others</li>
<li>Fear of mistakes</li>
<li>Weak project knowledge</li>
<li>Ignoring practice</li>
<li>Poor communication</li>
<li>Panic during questions</li>
</ul>

</div>

</div>

<div class="sub-card">

<button class="sub-header">

4. Active Listening

</button>

<div class="sub-content">

<h4>Why It Matters</h4>

<p>
Many candidates answer a different
question than what was actually asked.
</p>

<h4>Best Practices</h4>

<ul>
<li>Listen completely</li>
<li>Do not interrupt</li>
<li>Take a moment before answering</li>
<li>Clarify unclear questions</li>
<li>Focus on keywords</li>
<li>Confirm understanding</li>
<li>Answer directly</li>
<li>Stay engaged</li>
<li>Maintain eye contact</li>
<li>Stay calm</li>
</ul>

</div>

</div>

<div class="sub-card">

<button class="sub-header">

5. Handling Unknown Questions

</button>

<div class="sub-content">

<h4>What To Do</h4>

<ol>
<li>Stay calm</li>
<li>Do not panic</li>
<li>Think aloud logically</li>
<li>Break problem into parts</li>
<li>Relate to known concepts</li>
<li>Ask clarifying questions</li>
<li>Be honest</li>
<li>Explain your approach</li>
<li>Show learning mindset</li>
<li>Remain confident</li>
</ol>

<h4>Avoid</h4>

<ul>
<li>Making things up</li>
<li>Saying random facts</li>
<li>Giving up immediately</li>
<li>Staying silent</li>
<li>Becoming defensive</li>
</ul>

</div>

</div>

<div class="sub-card">

<button class="sub-header">

6. Leadership Communication

</button>

<div class="sub-content">

<h4>Leadership Traits</h4>

<ul>
<li>Clear Communication</li>
<li>Ownership</li>
<li>Decision Making</li>
<li>Empathy</li>
<li>Delegation</li>
<li>Accountability</li>
<li>Motivation</li>
<li>Conflict Resolution</li>
<li>Problem Solving</li>
<li>Vision</li>
</ul>

</div>

</div>

<div class="sub-card">

<button class="sub-header">

7. Team Collaboration

</button>

<div class="sub-content">

<h4>Important Skills</h4>

<ul>
<li>Communication</li>
<li>Respect</li>
<li>Listening</li>
<li>Knowledge Sharing</li>
<li>Reliability</li>
<li>Adaptability</li>
<li>Accountability</li>
<li>Supportiveness</li>
<li>Trust Building</li>
<li>Conflict Management</li>
</ul>

</div>

</div>

<div class="sub-card">

<button class="sub-header">

8. Conflict Resolution

</button>

<div class="sub-content">

<h4>Recommended Approach</h4>

<ol>
<li>Stay calm</li>
<li>Listen carefully</li>
<li>Understand both sides</li>
<li>Focus on facts</li>
<li>Avoid emotions</li>
<li>Find common goals</li>
<li>Suggest solutions</li>
<li>Agree on action plan</li>
<li>Follow up</li>
<li>Maintain professionalism</li>
</ol>

</div>

</div>

<div class="sub-card">

<button class="sub-header">

9. Time Management

</button>

<div class="sub-content">

<h4>Interview Examples</h4>

<ul>
<li>Managing deadlines</li>
<li>Balancing academics and projects</li>
<li>Prioritizing tasks</li>
<li>Handling multiple responsibilities</li>
<li>Meeting project milestones</li>
<li>Planning work</li>
<li>Reducing delays</li>
<li>Scheduling efficiently</li>
<li>Tracking progress</li>
<li>Managing pressure</li>
</ul>

</div>

</div>

<div class="sub-card">

<button class="sub-header">

10. Professional Etiquette

</button>

<div class="sub-content">

<h4>Best Practices</h4>

<ul>
<li>Arrive early</li>
<li>Dress appropriately</li>
<li>Be respectful</li>
<li>Maintain professionalism</li>
<li>Use positive language</li>
<li>Thank interviewers</li>
<li>Keep answers structured</li>
<li>Stay engaged</li>
<li>Avoid distractions</li>
<li>Follow up professionally</li>
</ul>

</div>

</div>

`;

attachSubAccordions();

document.getElementById(
"resume-content"
).innerHTML = `

<div class="sub-card">

<button class="sub-header">

1. ATS Friendly Resume

</button>

<div class="sub-content">

<h4>What Is ATS?</h4>

<p>
Applicant Tracking Systems scan resumes
before they reach recruiters.
Your resume must be ATS compatible.
</p>

<h4>Best Practices</h4>

<ul>
<li>Use simple formatting</li>
<li>Use standard headings</li>
<li>Include role-specific keywords</li>
<li>Use readable fonts</li>
<li>Keep formatting clean</li>
<li>Use bullet points</li>
<li>Avoid excessive graphics</li>
<li>Keep sections structured</li>
<li>Use professional file names</li>
<li>Maintain consistency</li>
</ul>

<h4>Common Mistakes</h4>

<ul>
<li>Overdesigned resumes</li>
<li>Tables everywhere</li>
<li>Missing keywords</li>
<li>Poor formatting</li>
<li>Irrelevant information</li>
</ul>

</div>

</div>

<div class="sub-card">

<button class="sub-header">

2. Writing Strong Project Descriptions

</button>

<div class="sub-content">

<h4>Every Project Should Mention</h4>

<ol>
<li>Problem Statement</li>
<li>Objective</li>
<li>Technologies Used</li>
<li>Your Contribution</li>
<li>Challenges Faced</li>
<li>Results Achieved</li>
<li>Impact Created</li>
<li>Features Implemented</li>
<li>Learning Outcomes</li>
<li>Future Scope</li>
</ol>

<h4>Common Mistakes</h4>

<ul>
<li>Only mentioning project title</li>
<li>No technologies listed</li>
<li>No measurable impact</li>
<li>Copying from GitHub</li>
<li>Very short descriptions</li>
</ul>

</div>

</div>

<div class="sub-card">

<button class="sub-header">

3. Skills Section

</button>

<div class="sub-content">

<h4>Recommended Categories</h4>

<ul>
<li>Programming Languages</li>
<li>Frameworks</li>
<li>Databases</li>
<li>Cloud Platforms</li>
<li>Developer Tools</li>
<li>Machine Learning Tools</li>
<li>Version Control</li>
<li>Operating Systems</li>
<li>Data Analysis Tools</li>
<li>Soft Skills</li>
</ul>

<h4>Best Practices</h4>

<ul>
<li>List only known skills</li>
<li>Keep skills relevant</li>
<li>Group similar skills</li>
<li>Update regularly</li>
<li>Avoid exaggeration</li>
</ul>

</div>

</div>

<div class="sub-card">

<button class="sub-header">

4. Education Section

</button>

<div class="sub-content">

<h4>What To Include</h4>

<ul>
<li>Degree Name</li>
<li>College Name</li>
<li>Graduation Year</li>
<li>CGPA / Percentage</li>
<li>Relevant Coursework</li>
<li>Academic Achievements</li>
<li>Scholarships</li>
<li>Certifications</li>
<li>Research Work</li>
<li>Leadership Positions</li>
</ul>

</div>

</div>

<div class="sub-card">

<button class="sub-header">

5. Certifications

</button>

<div class="sub-content">

<h4>Valuable Certification Areas</h4>

<ul>
<li>Python</li>
<li>SQL</li>
<li>Cloud Computing</li>
<li>Machine Learning</li>
<li>Cyber Security</li>
<li>Data Analysis</li>
<li>Web Development</li>
<li>DevOps</li>
<li>System Design</li>
<li>AI Tools</li>
</ul>

<h4>Tip</h4>

<p>
Mention only certifications that add value
to the role you are applying for.
</p>

</div>

</div>

<div class="sub-card">

<button class="sub-header">

6. Resume Formatting

</button>

<div class="sub-content">

<h4>Formatting Checklist</h4>

<ul>
<li>One Page Preferred</li>
<li>Consistent Fonts</li>
<li>Proper Headings</li>
<li>Good Spacing</li>
<li>Professional Layout</li>
<li>Bullet Points</li>
<li>Consistent Alignment</li>
<li>No Large Paragraphs</li>
<li>Readable Structure</li>
<li>Professional Appearance</li>
</ul>

</div>

</div>

<div class="sub-card">

<button class="sub-header">

7. Common Resume Mistakes

</button>

<div class="sub-content">

<h4>Top Mistakes</h4>

<ol>
<li>Spelling Errors</li>
<li>Grammar Mistakes</li>
<li>Fake Skills</li>
<li>Fake Projects</li>
<li>Too Many Pages</li>
<li>Missing Contact Details</li>
<li>Weak Project Descriptions</li>
<li>Poor Formatting</li>
<li>Irrelevant Information</li>
<li>Outdated Resume</li>
</ol>

</div>

</div>

<div class="sub-card">

<button class="sub-header">

8. Resume Review Checklist

</button>

<div class="sub-content">

<h4>Before Applying</h4>

<ul>
<li>Proofread Resume</li>
<li>Update Skills</li>
<li>Update Projects</li>
<li>Check Contact Details</li>
<li>Verify Links</li>
<li>Tailor For Role</li>
<li>Check ATS Compatibility</li>
<li>Review Formatting</li>
<li>Remove Irrelevant Content</li>
<li>Export To PDF</li>
</ul>

</div>

</div>

<div class="sub-card">

<button class="sub-header">

9. Freshers Resume Tips

</button>

<div class="sub-content">

<h4>Focus Areas</h4>

<ul>
<li>Projects</li>
<li>Internships</li>
<li>Certifications</li>
<li>Technical Skills</li>
<li>Achievements</li>
<li>Hackathons</li>
<li>Leadership Activities</li>
<li>Volunteer Work</li>
<li>Research Work</li>
<li>Learning Initiatives</li>
</ul>

</div>

</div>

<div class="sub-card">

<button class="sub-header">

10. Achievements & Impact

</button>

<div class="sub-content">

<h4>Strong Achievement Examples</h4>

<ul>
<li>Competition Rankings</li>
<li>Hackathon Wins</li>
<li>Research Publications</li>
<li>Scholarships</li>
<li>Open Source Contributions</li>
<li>Leadership Roles</li>
<li>Sports Achievements</li>
<li>Technical Certifications</li>
<li>Project Impact Metrics</li>
<li>Community Contributions</li>
</ul>

<h4>Tip</h4>

<p>
Whenever possible, quantify achievements
using numbers and measurable outcomes.
</p>

</div>

</div>

`;

attachSubAccordions();

document.getElementById(
"checklist-content"
).innerHTML = `

<div class="sub-card">

<button class="sub-header">

1. One Day Before The Interview

</button>

<div class="sub-content">

<h4>Preparation Checklist</h4>

<ul>
<li>Research the company thoroughly</li>
<li>Understand the job description</li>
<li>Review your resume completely</li>
<li>Revise all major projects</li>
<li>Review technical concepts</li>
<li>Prepare HR answers</li>
<li>Review certifications</li>
<li>Prepare questions for interviewer</li>
<li>Organize documents</li>
<li>Get proper sleep</li>
</ul>

<h4>Must Revise</h4>

<ol>
<li>Introduction</li>
<li>Projects</li>
<li>Internships</li>
<li>Technical Skills</li>
<li>Achievements</li>
<li>Role Specific Concepts</li>
<li>Resume Details</li>
<li>Recent Learning</li>
<li>Problem Solving Approach</li>
<li>Career Goals</li>
</ol>

</div>

</div>

<div class="sub-card">

<button class="sub-header">

2. One Hour Before The Interview

</button>

<div class="sub-content">

<h4>Quick Checklist</h4>

<ul>
<li>Check internet connection</li>
<li>Test microphone</li>
<li>Test camera</li>
<li>Charge devices</li>
<li>Keep resume ready</li>
<li>Keep notebook ready</li>
<li>Close distractions</li>
<li>Review key notes</li>
<li>Take deep breaths</li>
<li>Stay confident</li>
</ul>

<h4>Avoid</h4>

<ul>
<li>Learning new topics</li>
<li>Panic studying</li>
<li>Comparing yourself with others</li>
<li>Last minute stress</li>
<li>Overthinking</li>
</ul>

</div>

</div>

<div class="sub-card">

<button class="sub-header">

3. During The Interview

</button>

<div class="sub-content">

<h4>Best Practices</h4>

<ul>
<li>Greet confidently</li>
<li>Maintain eye contact</li>
<li>Listen carefully</li>
<li>Answer clearly</li>
<li>Think before speaking</li>
<li>Use structured responses</li>
<li>Give examples</li>
<li>Stay professional</li>
<li>Be honest</li>
<li>Show enthusiasm</li>
</ul>

<h4>For Technical Questions</h4>

<ol>
<li>Understand the question</li>
<li>Clarify doubts</li>
<li>Explain thought process</li>
<li>Break down problems</li>
<li>Discuss edge cases</li>
<li>Consider optimization</li>
<li>Communicate clearly</li>
<li>Stay calm</li>
<li>Verify solution</li>
<li>Summarize approach</li>
</ol>

</div>

</div>

<div class="sub-card">

<button class="sub-header">

4. After The Interview

</button>

<div class="sub-content">

<h4>Post Interview Checklist</h4>

<ul>
<li>Thank the interviewer</li>
<li>Reflect on performance</li>
<li>Write down questions asked</li>
<li>Identify weak areas</li>
<li>Note strong responses</li>
<li>Review mistakes</li>
<li>Plan improvements</li>
<li>Follow up professionally</li>
<li>Update preparation notes</li>
<li>Continue learning</li>
</ul>

<h4>Growth Mindset</h4>

<p>
Every interview is valuable, whether selected
or not. Treat every experience as an opportunity
to improve communication, technical knowledge
and confidence for future interviews.
</p>

</div>

</div>

`;

attachSubAccordions();