// Data Stores
let currentRole = 'participant'; // 'participant' | 'organization' | 'public'

let organizations = [
    {
    id: "org-1",
    name: "AgriFuture Global Initiative",
    email: "contact@agrifuture.org",
    focus: "Smart Agriculture, Precision Robotics, Climate-Resilient Cultivation",
    bio: "Empowering rural farmers through digital soil diagnostics, autonomous field management, and high-yield data.",
    evaluationCriteria: "1. Feasibility (25%), 2. Innovation (25%), 3. Scalability (25%), 4. Working Prototype (25%)",
    openChallengesCount: 1
    },
    {
    id: "org-2",
    name: "OceanGuard Ecological Foundation",
    email: "grants@oceanguard.org",
    focus: "Marine Preservation, Plastic Waste Reclamation, Fishery Tracking",
    bio: "Protecting coastlines and marine ecosystems through digital tracking ledgers and ocean debris retrieval solutions.",
    evaluationCriteria: "1. Environmental Impact (25%), 2. Novelty (25%), 3. Tech Viability (25%), 4. Community Adoption (25%)",
    openChallengesCount: 1
    },
    {
    id: "org-3",
    name: "Apex CyberSystems Corp",
    email: "ventures@apexsystems.io",
    focus: "Decentralized Ledger, Edge Computing, Privacy-Preserving AI",
    bio: "Backing next-generation infrastructure architectures with grants and venture acceleration.",
    evaluationCriteria: "1. Architectural Rigor (25%), 2. Algorithmic Novelty (25%), 3. Security (25%), 4. Benchmark Speed (25%)",
    openChallengesCount: 1
    }
];

let challenges = [
    {
    id: "ch-101",
    orgId: "org-1",
    orgName: "AgriFuture Global Initiative",
    title: "Autonomous IoT Pest & Soil Health Diagnostic Hub",
    description: "Design an affordable IoT edge sensor array capable of real-time soil nutrient profiling and pest detection to reduce chemical fertilizer dependency.",
    prize: "$20,000 Grant",
    deadline: "2026-12-15",
    tags: ["AgriTech", "IoT", "Embedded"]
    },
    {
    id: "ch-102",
    orgId: "org-2",
    orgName: "OceanGuard Ecological Foundation",
    title: "Marine Plastic Logging & Digital Incentives Portal",
    description: "Build an end-to-end platform for artisanal fishers to log ocean plastic retrieval, verifying weights and issuing traceable incentive tokens.",
    prize: "$18,500 Award",
    deadline: "2026-11-30",
    tags: ["Marine", "Blockchain", "Web App"]
    },
    {
    id: "ch-103",
    orgId: "org-3",
    orgName: "Apex CyberSystems Corp",
    title: "Privacy-Preserving Edge Vision for Crowd Safety",
    description: "Implement an on-device computer vision engine that can identify emergency stampedes and perimeter breaches without recording or streaming identifiable faces.",
    prize: "$25,000 Equity-Free",
    deadline: "2027-01-10",
    tags: ["Edge AI", "Computer Vision", "Privacy"]
    }
];

let proposals = [
    {
    id: "prop-1",
    challengeId: "ch-101",
    challengeTitle: "Autonomous IoT Pest & Soil Health Diagnostic Hub",
    applicant: "Team BioHarvest",
    title: "AgriSense Low-Cost Multispectral Scanner",
    summary: "Built an ESP32 and camera-based soil spectro-scanner paired with a FastAPI microservice that computes soil nitrogen deficiency with 91% field accuracy.",
    media: {
        video: "https://www.youtube.com/watch?v=dQw4w9WgXcQ",
        website: "https://agrisense-demo.vercel.app",
        github: "https://github.com/team-bioharvest/agrisense-hub",
        docs: "https://docs.agrisense.io/whitepaper.pdf"
    },
    scores: { c1: 23, c2: 24, c3: 22, c4: 24 },
    totalScore: 93,
    status: "Winner", // Submitted | Reviewed | Finalist | Winner
    feedback: "Outstanding prototype integration and well-documented sensor testing."
    },
    {
    id: "prop-2",
    challengeId: "ch-102",
    challengeTitle: "Marine Plastic Logging & Digital Incentives Portal",
    applicant: "AquaLoop Developers",
    title: "AquaLoop OS: Coastal Waste Recovery Ledger",
    summary: "A mobile-first PWA allowing fishermen to record recovered ghost nets and plastic hauls at port scale with tamper-evident offline GPS timestamping.",
    media: {
        video: "https://loom.com/share/example-demo",
        website: "https://aqualoop-ledger.web.app",
        github: "https://github.com/aqualoop/recovery-core",
        docs: "https://drive.google.com/sample-spec"
    },
    scores: { c1: 22, c2: 21, c3: 23, c4: 21 },
    totalScore: 87,
    status: "Finalist",
    feedback: "High impact on coastal hubs; scale deployment strategy is strong."
    },
    {
    id: "prop-3",
    challengeId: "ch-103",
    challengeTitle: "Privacy-Preserving Edge Vision for Crowd Safety",
    applicant: "Mitra & Labs",
    title: "EdgeSentry Anonymized Density Sentinel",
    summary: "Raspberry Pi 5-targeted YOLOv8-nano neural pipeline that strips biometric frames and only exports density heatmaps and velocity anomalies.",
    media: {
        video: "https://youtube.com/watch?v=sample-sentry",
        website: "",
        github: "https://github.com/mitra-dimiri/edgesentry",
        docs: "https://edgesentry.tech/spec.pdf"
    },
    scores: { c1: 24, c2: 23, c3: 24, c4: 22 },
    totalScore: 93,
    status: "Winner",
    feedback: "Benchmark results on edge hardware exceed our throughput targets."
    }
];

let announcements = [
    {
    id: "an-1",
    title: "Top 3 Finalists Announced for Coastal Recovery Challenge",
    category: "Shortlist",
    date: "November 5, 2026",
    content: "The OceanGuard panel has reviewed all primary submissions. Proposals moving to the live demo presentation have been marked on the leaderboard."
    },
    {
    id: "an-2",
    title: "Evaluation Period Commences for AgriFuture Challenge",
    category: "Milestone",
    date: "October 28, 2026",
    content: "Jury teams are now scoring proposals using the 4-tier rubric. Innovators can monitor review updates live from the Idea Tracking Desk."
    }
];

// App Initialization
document.addEventListener('DOMContentLoaded', () => {
    setupNavigation();
    setupRoleSwitching();
    setupModals();
    setupForms();
    renderAllViews();
});

// Tab Navigation
function setupNavigation() {
    const navItems = document.querySelectorAll('.nav-links li');
    navItems.forEach(item => {
    item.addEventListener('click', () => {
        navItems.forEach(i => i.classList.remove('active'));
        item.classList.add('active');

        const targetTab = item.getAttribute('data-tab');
        document.querySelectorAll('.tab-panel').forEach(panel => {
        panel.classList.remove('active');
        if (panel.id === targetTab) {
            panel.classList.add('active');
        }
        });
    });
    });
}

// Role Switching Behavior
function setupRoleSwitching() {
    const roleSelect = document.getElementById('role-select');
    const badgeName = document.getElementById('badge-name');
    const badgeRole = document.getElementById('badge-role');
    const btnCreateChallenge = document.getElementById('btn-create-challenge');
    const btnCreateAnnouncement = document.getElementById('btn-create-announcement');
    const navItemSubmit = document.getElementById('nav-item-submit');
    const navItemEval = document.getElementById('nav-item-eval');

    roleSelect.addEventListener('change', (e) => {
    currentRole = e.target.value;

    if (currentRole === 'participant') {
        badgeName.textContent = "Mitra Dimiri (Innovator)";
        badgeRole.textContent = "Participant Mode";
        btnCreateChallenge.style.display = 'none';
        btnCreateAnnouncement.style.display = 'none';
        navItemSubmit.style.display = 'flex';
        navItemEval.style.display = 'none';
    } else if (currentRole === 'organization') {
        badgeName.textContent = "AgriFuture Global Panel";
        badgeRole.textContent = "Organisation Evaluator";
        btnCreateChallenge.style.display = 'inline-flex';
        btnCreateAnnouncement.style.display = 'inline-flex';
        navItemSubmit.style.display = 'none';
        navItemEval.style.display = 'flex';
    } else {
        badgeName.textContent = "Guest Visitor";
        badgeRole.textContent = "Public Observer";
        btnCreateChallenge.style.display = 'none';
        btnCreateAnnouncement.style.display = 'none';
        navItemSubmit.style.display = 'none';
        navItemEval.style.display = 'none';
    }

    renderEvaluationCards();
    });

  // Initial trigger
    roleSelect.dispatchEvent(new Event('change'));
}

// Modal Controllers
function setupModals() {
    const regModal = document.getElementById('register-modal');
    const challengeModal = document.getElementById('challenge-modal');
    const announcementModal = document.getElementById('announcement-modal');
    const evalModal = document.getElementById('eval-scoring-modal');

  // Open modal buttons
    document.getElementById('open-register-modal-btn').onclick = () => regModal.classList.add('open');
    document.getElementById('btn-create-challenge').onclick = () => challengeModal.classList.add('open');
    document.getElementById('btn-create-announcement').onclick = () => announcementModal.classList.add('open');

  // Close modal buttons
    document.getElementById('close-reg-modal').onclick = () => regModal.classList.remove('open');
    document.getElementById('close-challenge-modal').onclick = () => challengeModal.classList.remove('open');
    document.getElementById('close-announcement-modal').onclick = () => announcementModal.classList.remove('open');
    document.getElementById('close-eval-modal').onclick = () => evalModal.classList.remove('open');

  // Tab switch in registration
    const tabPart = document.getElementById('tab-reg-participant');
    const tabOrg = document.getElementById('tab-reg-org');
    const formPart = document.getElementById('participant-reg-form');
    const formOrg = document.getElementById('org-reg-form');

    tabPart.onclick = () => {
    tabPart.classList.add('active');
    tabOrg.classList.remove('active');
    formPart.style.display = 'block';
    formOrg.style.display = 'none';
    };

    tabOrg.onclick = () => {
    tabOrg.classList.add('active');
    tabPart.classList.remove('active');
    formPart.style.display = 'none';
    formOrg.style.display = 'block';
    };
}

// Form Handlers
function setupForms() {
  // Proposal Submission
    document.getElementById('proposal-submission-form').addEventListener('submit', (e) => {
    e.preventDefault();
    const chId = document.getElementById('sub-challenge').value;
    const targetChallenge = challenges.find(c => c.id === chId);

    const newProposal = {
        id: "prop-" + (proposals.length + 1),
        challengeId: chId,
        challengeTitle: targetChallenge.title,
        applicant: document.getElementById('sub-applicant').value,
        title: document.getElementById('sub-title').value,
        summary: document.getElementById('sub-summary').value,
        media: {
        video: document.getElementById('sub-video').value,
        website: document.getElementById('sub-website').value,
        github: document.getElementById('sub-github').value,
        docs: document.getElementById('sub-docs').value
        },
        scores: { c1: 0, c2: 0, c3: 0, c4: 0 },
        totalScore: 0,
        status: "Submitted",
        feedback: "Pending jury assignment."
    };

    proposals.unshift(newProposal);
    alert("Innovation Proposal successfully submitted to challenge jury!");
    e.target.reset();
    renderAllViews();

    // Switch to tracker tab
    document.querySelector('[data-tab="my-ideas"]').click();
    });

  // Participant Registration
    document.getElementById('participant-reg-form').addEventListener('submit', (e) => {
    e.preventDefault();
    const name = document.getElementById('reg-part-name').value;
    alert(`Welcome, ${name}! Your participant profile is registered.`);
    document.getElementById('badge-name').textContent = name;
    document.getElementById('register-modal').classList.remove('open');
    e.target.reset();
    });

  // Organisation Registration
    document.getElementById('org-reg-form').addEventListener('submit', (e) => {
    e.preventDefault();
    const newOrg = {
        id: "org-" + (organizations.length + 1),
        name: document.getElementById('reg-org-name').value,
        email: document.getElementById('reg-org-email').value,
        focus: "Emerging Innovation Sector",
        bio: document.getElementById('reg-org-bio').value,
        evaluationCriteria: document.getElementById('reg-org-criteria').value,
        openChallengesCount: 0
    };

    organizations.push(newOrg);
    alert(`Organisation ${newOrg.name} successfully onboarded.`);
    document.getElementById('register-modal').classList.remove('open');
    e.target.reset();
    renderOrganizations();
    });

  // Challenge Creation
    document.getElementById('challenge-create-form').addEventListener('submit', (e) => {
    e.preventDefault();
    const newCh = {
        id: "ch-" + (challenges.length + 101),
        orgId: "org-1",
        orgName: document.getElementById('ch-org-name').value,
        title: document.getElementById('ch-title').value,
        description: document.getElementById('ch-desc').value,
        prize: document.getElementById('ch-prize').value,
        deadline: document.getElementById('ch-deadline').value,
        tags: ["Open Track", "Innovation"]
    };

    challenges.unshift(newCh);
    alert("New challenge published!");
    document.getElementById('challenge-modal').classList.remove('open');
    e.target.reset();
    renderChallenges();
    populateChallengeDropdowns();
    });

  // Announcement Creation
    document.getElementById('announcement-create-form').addEventListener('submit', (e) => {
    e.preventDefault();
    const newAnn = {
        id: "an-" + (announcements.length + 1),
        title: document.getElementById('an-title').value,
        category: document.getElementById('an-category').value,
        date: new Date().toLocaleDateString('en-US', { month: 'long', day: 'numeric', year: 'numeric' }),
        content: document.getElementById('an-content').value
    };

    announcements.unshift(newAnn);
    alert("Announcement published!");
    document.getElementById('announcement-modal').classList.remove('open');
    e.target.reset();
    renderAnnouncements();
    });

  // Evaluation Sliders Live Calculation
    const sliders = ['score1', 'score2', 'score3', 'score4'];
    sliders.forEach(id => {
    const el = document.getElementById(id);
    el.addEventListener('input', () => {
        document.getElementById(id + '-val').textContent = el.value;
        calculateModalTotal();
    });
    });

  // Scoring Submission Form
    document.getElementById('scoring-form').addEventListener('submit', (e) => {
    e.preventDefault();
    const propId = document.getElementById('eval-proposal-id').value;
    const prop = proposals.find(p => p.id === propId);

    if (prop) {
        const c1 = parseInt(document.getElementById('score1').value, 10);
        const c2 = parseInt(document.getElementById('score2').value, 10);
        const c3 = parseInt(document.getElementById('score3').value, 10);
        const c4 = parseInt(document.getElementById('score4').value, 10);

        prop.scores = { c1, c2, c3, c4 };
        prop.totalScore = c1 + c2 + c3 + c4;
        prop.feedback = document.getElementById('eval-feedback').value || "Scored against published criteria.";
        prop.status = document.getElementById('eval-status-select').value;

        alert(`Scoring updated for "${prop.title}". Results published to public leaderboard.`);
        document.getElementById('eval-scoring-modal').classList.remove('open');
        renderTrackerTable();
        renderLeaderboard();
        renderEvaluationCards();
    }
    });

  // Leaderboard Category Filter
    document.getElementById('leaderboard-filter').addEventListener('change', (e) => {
    renderLeaderboard(e.target.value);
    });
}

function calculateModalTotal() {
    const c1 = parseInt(document.getElementById('score1').value, 10) || 0;
    const c2 = parseInt(document.getElementById('score2').value, 10) || 0;
    const c3 = parseInt(document.getElementById('score3').value, 10) || 0;
    const c4 = parseInt(document.getElementById('score4').value, 10) || 0;
    document.getElementById('total-score-display').textContent = `${c1 + c2 + c3 + c4} / 100`;
}

// Render Functions
function renderAllViews() {
    renderChallenges();
    renderOrganizations();
    populateChallengeDropdowns();
    renderTrackerTable();
    renderEvaluationCards();
    renderLeaderboard();
    renderAnnouncements();
}

function renderChallenges() {
    const container = document.getElementById('challenge-list-container');
    container.innerHTML = challenges.map(ch => `
    <div class="card challenge-card">
        <div>
        <div class="card-top">
            <span class="org-tag"><i class="fa-regular fa-building"></i> ${ch.orgName}</span>
            <span class="prize-tag"><i class="fa-solid fa-award"></i> ${ch.prize}</span>
        </div>
        <h3>${ch.title}</h3>
        <p>${ch.description}</p>
        </div>
        <div class="challenge-footer">
        <small style="color:var(--text-muted);"><i class="fa-regular fa-calendar-xmark"></i> Deadline: ${ch.deadline}</small>
        <button class="btn btn-sm btn-primary" onclick="quickApply('${ch.id}')">Submit Solution</button>
        </div>
    </div>
    `).join('');
}

function quickApply(challengeId) {
    document.querySelector('[data-tab="submit-proposal"]').click();
    document.getElementById('sub-challenge').value = challengeId;
}

function renderOrganizations() {
    const container = document.getElementById('org-list-container');
    container.innerHTML = organizations.map(org => {
    const orgChallenges = challenges.filter(c => c.orgName === org.name);
    return `
        <div class="card">
        <div style="display:flex; justify-content:space-between; align-items:flex-start; margin-bottom:0.75rem;">
            <h3 style="font-size:1.15rem; color:var(--primary);"><i class="fa-solid fa-landmark"></i> ${org.name}</h3>
        </div>
        <p style="font-size:0.875rem; color:var(--text-muted); margin-bottom:0.75rem;"><strong>Focus:</strong> ${org.focus}</p>
        <p style="font-size:0.875rem; margin-bottom:1rem; line-height:1.4;">${org.bio}</p>

        <div style="background:var(--bg-main); padding:0.75rem; border-radius:8px; border:1px solid var(--border); margin-bottom:1rem;">
            <strong style="font-size:0.75rem; color:var(--primary); text-transform:uppercase; display:block; margin-bottom:0.25rem;">
            <i class="fa-solid fa-sliders"></i> Bio Evaluation Rubrics:
            </strong>
            <span style="font-size:0.8rem; color:var(--text-main);">${org.evaluationCriteria}</span>
        </div>

        <div>
            <strong style="font-size:0.8rem; color:var(--text-muted); display:block; margin-bottom:0.35rem;">Associated Problem Statements (${orgChallenges.length}):</strong>
            <ul style="padding-left:1.2rem; font-size:0.8rem; color:var(--text-muted);">
            ${orgChallenges.map(c => `<li>${c.title}</li>`).join('') || '<li>No active challenges currently.</li>'}
            </ul>
        </div>
        </div>
    `;
    }).join('');
}

function populateChallengeDropdowns() {
    const select = document.getElementById('sub-challenge');
    const filter = document.getElementById('leaderboard-filter');

    select.innerHTML = challenges.map(c => `<option value="${c.id}">${c.title} (${c.orgName})</option>`).join('');
    filter.innerHTML = '<option value="all">All Challenge Categories</option>' + 
    challenges.map(c => `<option value="${c.id}">${c.title}</option>`).join('');
}

function renderTrackerTable() {
    const tbody = document.getElementById('tracker-table-body');
    tbody.innerHTML = proposals.map(p => {
    let badgeClass = 'badge-submitted';
    if (p.status === 'Reviewed') badgeClass = 'badge-reviewed';
    if (p.status === 'Finalist') badgeClass = 'badge-finalist';
    if (p.status === 'Winner') badgeClass = 'badge-winner';

    return `
        <tr>
        <td><strong>${p.title}</strong></td>
        <td style="color:var(--text-muted);">${p.challengeTitle}</td>
        <td>${p.applicant}</td>
        <td>
            <div class="media-links">
            ${p.media.video ? `<a href="${p.media.video}" target="_blank" title="Pitch Video"><i class="fa-solid fa-video"></i></a>` : ''}
            ${p.media.website ? `<a href="${p.media.website}" target="_blank" title="Live Web Demo"><i class="fa-solid fa-globe"></i></a>` : ''}
            ${p.media.github ? `<a href="${p.media.github}" target="_blank" title="Source Code"><i class="fa-brands fa-github"></i></a>` : ''}
            ${p.media.docs ? `<a href="${p.media.docs}" target="_blank" title="Technical Whitepaper"><i class="fa-solid fa-file-pdf"></i></a>` : ''}
            </div>
        </td>
        <td><span class="badge ${badgeClass}">${p.status}</span></td>
        <td><strong>${p.totalScore > 0 ? p.totalScore + ' / 100' : 'Pending'}</strong></td>
        <td style="color:var(--text-muted); font-size:0.8rem; max-width:200px;">${p.feedback}</td>
        </tr>
    `;
    }).join('');
}

function renderEvaluationCards() {
    const container = document.getElementById('evaluation-cards-container');
    container.innerHTML = proposals.map(p => `
    <div class="card">
        <div style="display:flex; justify-content:space-between; align-items:center; margin-bottom:0.5rem;">
        <span class="org-tag">${p.challengeTitle}</span>
        <span class="badge ${p.status === 'Winner' ? 'badge-winner' : (p.status === 'Finalist' ? 'badge-finalist' : 'badge-reviewed')}">${p.status}</span>
        </div>
        <h3 style="font-size:1.15rem; margin-bottom:0.25rem;">${p.title}</h3>
        <p style="font-size:0.8rem; color:var(--text-muted); margin-bottom:0.75rem;">By: <strong>${p.applicant}</strong></p>
        <p style="font-size:0.85rem; line-height:1.4; margin-bottom:1rem;">${p.summary}</p>

        <div class="media-links" style="margin-bottom:1rem;">
        ${p.media.video ? `<a href="${p.media.video}" target="_blank" class="btn btn-sm btn-secondary"><i class="fa-solid fa-video"></i> Video</a>` : ''}
        ${p.media.website ? `<a href="${p.media.website}" target="_blank" class="btn btn-sm btn-secondary"><i class="fa-solid fa-globe"></i> Demo</a>` : ''}
        ${p.media.github ? `<a href="${p.media.github}" target="_blank" class="btn btn-sm btn-secondary"><i class="fa-brands fa-github"></i> Code</a>` : ''}
        ${p.media.docs ? `<a href="${p.media.docs}" target="_blank" class="btn btn-sm btn-secondary"><i class="fa-solid fa-file-pdf"></i> Docs</a>` : ''}
        </div>

        <div style="border-top:1px solid var(--border); padding-top:0.85rem; display:flex; justify-content:space-between; align-items:center;">
        <div>
            <span style="font-size:0.75rem; color:var(--text-muted);">Current Score:</span>
            <strong style="color:var(--primary); font-size:1rem; display:block;">${p.totalScore}/100</strong>
        </div>
        <button class="btn btn-sm btn-primary" onclick="openEvaluationModal('${p.id}')">
            <i class="fa-solid fa-check"></i> Evaluate / Update
        </button>
        </div>
    </div>
    `).join('');
}

function openEvaluationModal(proposalId) {
    const prop = proposals.find(p => p.id === proposalId);
    if (!prop) return;

    document.getElementById('eval-proposal-id').value = prop.id;
    document.getElementById('eval-modal-subheading').textContent = `Evaluating "${prop.title}" by ${prop.applicant}`;

  // Set rubric slider values
    document.getElementById('score1').value = prop.scores.c1 || 20;
    document.getElementById('score1-val').textContent = prop.scores.c1 || 20;
    document.getElementById('score2').value = prop.scores.c2 || 20;
    document.getElementById('score2-val').textContent = prop.scores.c2 || 20;
    document.getElementById('score3').value = prop.scores.c3 || 20;
    document.getElementById('score3-val').textContent = prop.scores.c3 || 20;
    document.getElementById('score4').value = prop.scores.c4 || 20;
    document.getElementById('score4-val').textContent = prop.scores.c4 || 20;

    document.getElementById('eval-feedback').value = prop.feedback === "Pending jury assignment." ? "" : prop.feedback;
    document.getElementById('eval-status-select').value = prop.status === "Submitted" ? "Reviewed" : prop.status;

    calculateModalTotal();
    document.getElementById('eval-scoring-modal').classList.add('open');
}

function renderLeaderboard(filterChallengeId = 'all') {
    let list = [...proposals];
    if (filterChallengeId !== 'all') {
    list = list.filter(p => p.challengeId === filterChallengeId);
    }

  // Sort descending by totalScore
    list.sort((a, b) => b.totalScore - a.totalScore);

  // Podium
    const podium = document.getElementById('podium-display');
    const top1 = list[0];
    const top2 = list[1];
    const top3 = list[2];

    podium.innerHTML = `
    <div class="podium-card second">
        <div class="podium-rank">🥈</div>
        <h3>${top2 ? top2.title : 'Pending'}</h3>
        <p style="font-size:0.8rem; color:var(--text-muted);">${top2 ? top2.applicant : '-'}</p>
        <div class="pill" style="margin-top:0.5rem; display:inline-block;">${top2 ? top2.totalScore + ' pts' : '-'}</div>
    </div>
    <div class="podium-card first">
        <div class="podium-rank">🥇</div>
        <h3>${top1 ? top1.title : 'Pending'}</h3>
        <p style="font-size:0.8rem; color:var(--text-muted);">${top1 ? top1.applicant : '-'}</p>
        <div class="pill" style="margin-top:0.5rem; display:inline-block; background:var(--warning-light); color:#b45309;">
        ${top1 ? top1.totalScore + ' pts' : '-'}
        </div>
    </div>
    <div class="podium-card third">
        <div class="podium-rank">🥉</div>
        <h3>${top3 ? top3.title : 'Pending'}</h3>
        <p style="font-size:0.8rem; color:var(--text-muted);">${top3 ? top3.applicant : '-'}</p>
        <div class="pill" style="margin-top:0.5rem; display:inline-block;">${top3 ? top3.totalScore + ' pts' : '-'}</div>
    </div>
    `;

  // Rankings Table
    const tbody = document.getElementById('leaderboard-table-body');
    tbody.innerHTML = list.map((item, index) => `
    <tr>
        <td><strong>#${index + 1}</strong></td>
        <td><strong>${item.title}</strong></td>
        <td>${item.applicant}</td>
        <td style="color:var(--text-muted);">${item.challengeTitle}</td>
        <td><span class="pill">${item.totalScore} / 100</span></td>
        <td>
        <span class="badge ${item.status === 'Winner' ? 'badge-winner' : (item.status === 'Finalist' ? 'badge-finalist' : 'badge-reviewed')}">
            ${item.status}
        </span>
        </td>
        <td>
        ${item.media.website ? `<a href="${item.media.website}" target="_blank" class="btn btn-sm btn-secondary"><i class="fa-solid fa-arrow-up-right-from-square"></i> Demo</a>` : (item.media.github ? `<a href="${item.media.github}" target="_blank" class="btn btn-sm btn-secondary"><i class="fa-brands fa-github"></i> Repo</a>` : '<span style="color:var(--text-muted);">-</span>')}
        </td>
    </tr>
    `).join('');
}

function renderAnnouncements() {
    const container = document.getElementById('announcements-container');
    container.innerHTML = announcements.map(a => `
    <div class="announcement-entry">
        <div style="display:flex; justify-content:space-between; align-items:center;">
        <h3 style="font-size:1.1rem; color:var(--text-main);">${a.title}</h3>
        <span class="badge badge-reviewed">${a.category}</span>
        </div>
        <p style="margin-top:0.5rem; font-size:0.875rem; line-height:1.45; color:var(--text-muted);">${a.content}</p>
        <div class="an-meta">
        <span><i class="fa-regular fa-clock"></i> ${a.date}</span>
        <span><i class="fa-solid fa-bullhorn"></i> Official Organizing Committee</span>
        </div>
    </div>
    `).join('');
}

// Global scope bindings for inline event triggers
window.quickApply = quickApply;
window.openEvaluationModal = openEvaluationModal;