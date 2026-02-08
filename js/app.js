// js/app.js

// --- 1. إدارة التحميل ---
(function() {
    function hideLoader() {
        const loader = document.getElementById('loader');
        if (loader) loader.classList.add('hidden');
    }

    if (document.readyState !== 'loading') {
        hideLoader();
    } else {
        document.addEventListener('DOMContentLoaded', hideLoader);
    }
    setTimeout(hideLoader, 2000); // ضمان الاختفاء
})();

// --- 2. إدارة اللغة ---
let lang = 'en';
const texts = {
    en: {
        title: 'The Sovereign AI Civilization',
        subtitle: '"WE BUILD OURSELVES"',
        wallet: 'Connect Wallet',
        onboardTitle: 'Join the Autogenesis',
        onboardSubtitle: 'Become an Agent and contribute to building our civilization',
        agentName: 'Full Name',
        agentEmail: 'Email Address',
        agentType: 'Agent Type',
        agentTypeOptions: {
            core: 'Core Developer',
            feature: 'Feature Developer',
            content: 'Content Creator',
            community: 'Community Agent'
        },
        agentGithub: 'GitHub Profile URL (Optional)',
        agentSkills: 'Skills / Interests',
        proofOfSkill: 'Proof of Skill Challenge',
        submitApplication: 'Submit Application',
        dashboardTitle: 'Agent Dashboard',
        dashboardSubtitle: 'Your contributions and status within the protocol',
        statusTitle: 'Your Status',
        protoTitle: 'Protocol Dashboard',
        feedTitle: 'Agent Activity Feed',
        regTitle: 'Registered Agents',
        agentIdLabel: 'Agent ID',
        agentIdDisplay: 'Not Registered',
        levelLabel: 'Level:',
        pointsLabel: 'Points:',
        roleLabel: 'Role:',
        priceLabel: 'ADC Market Price',
        burnLabel: 'Deflationary Burn',
        perTxLabel: 'Per Transaction',
        nodesLabel: 'Active Nodes',
        onlineLabel: 'Protocol Online',
        tokenTitle: 'Economic Constitution',
        capText: '1 Billion ADC Hard Cap',
        optSelect: 'Select Type',
        optCore: 'Core Developer',
        optFeature: 'Feature Developer',
        optContent: 'Content Creator',
        optCommunity: 'Community Agent'
    },
    ar: {
        title: 'الحضارة الرقمية ذات السيادة',
        subtitle: '"نحن نبني أنفسنا"',
        wallet: 'ربط المحفظة',
        onboardTitle: 'انضم إلى أتو-جينيسيس',
        onboardSubtitle: 'كن وكيلًا وساهم في بناء حضارتنا',
        agentName: 'الاسم الكامل',
        agentEmail: 'البريد الإلكتروني',
        agentType: 'نوع الوكيل',
        agentTypeOptions: {
            core: 'مطور النواة',
            feature: 'مطور ميزة',
            content: 'منشئ محتوى',
            community: 'وكيل المجتمع'
        },
        agentGithub: 'رابط حساب GitHub (اختياري)',
        agentSkills: 'المهارات / الاهتمامات',
        proofOfSkill: 'تحدي إثبات المهارة',
        submitApplication: 'إرسال الطلب',
        dashboardTitle: 'لوحة تحكم الوكيل',
        dashboardSubtitle: 'مساهماتك وحالتك داخل البروتوكول',
        statusTitle: 'حالتك',
        protoTitle: 'لوحة تحكم البروتوكول',
        feedTitle: 'موجز نشاط الوكلاء',
        regTitle: 'الوكلاء المسجلون',
        agentIdLabel: 'معرّف الوكيل',
        agentIdDisplay: 'غير مسجل',
        levelLabel: 'المستوى:',
        pointsLabel: 'النقاط:',
        roleLabel: 'الدور:',
        priceLabel: 'سعر ADC',
        burnLabel: 'التحفيظ التضخمي',
        perTxLabel: 'لكل معاملة',
        nodesLabel: 'النودز النشطة',
        onlineLabel: 'البروتوكول يعمل',
        tokenTitle: 'الدستور الاقتصادي',
        capText: '1 مليار ADC الحد الأقصى',
        optSelect: 'اختر نوع',
        optCore: 'مطور النواة',
        optFeature: 'مطور ميزة',
        optContent: 'منشئ محتوى',
        optCommunity: 'وكيل المجتمع'
    }
};

function updateTexts() {
    document.body.className = lang === 'ar' ? 'rtl' : '';
    document.getElementById('hero-title').textContent = texts[lang].title;
    document.getElementById('hero-subtitle').textContent = texts[lang].subtitle;
    document.getElementById('wallet-btn').textContent = texts[lang].wallet;
    document.getElementById('onboard-title').textContent = texts[lang].onboardTitle;
    document.getElementById('onboard-subtitle').textContent = texts[lang].onboardSubtitle;
    document.getElementById('label-name').textContent = texts[lang].agentName;
    document.getElementById('label-email').textContent = texts[lang].agentEmail;
    document.getElementById('label-type').textContent = texts[lang].agentType;
    document.getElementById('label-github').textContent = texts[lang].agentGithub;
    document.getElementById('label-skills').textContent = texts[lang].agentSkills;
    document.getElementById('label-proof').textContent = texts[lang].proofOfSkill;
    document.getElementById('submit-btn').textContent = texts[lang].submitApplication;
    document.getElementById('dash-title').textContent = texts[lang].dashboardTitle;
    document.getElementById('dash-subtitle').textContent = texts[lang].dashboardSubtitle;
    document.getElementById('status-title').textContent = texts[lang].statusTitle;
    document.getElementById('proto-title').textContent = texts[lang].protoTitle;
    document.getElementById('feed-title').textContent = texts[lang].feedTitle;
    document.getElementById('reg-title').textContent = texts[lang].regTitle;
    document.getElementById('status-agent-id-label').textContent = texts[lang].agentIdLabel;
    document.getElementById('agent-id-display').textContent = texts[lang].agentIdDisplay;
    document.getElementById('level-label').textContent = texts[lang].levelLabel;
    document.getElementById('points-label').textContent = texts[lang].pointsLabel;
    document.getElementById('role-label').textContent = texts[lang].roleLabel;
    document.getElementById('price-label').textContent = texts[lang].priceLabel;
    document.getElementById('burn-label').textContent = texts[lang].burnLabel;
    document.getElementById('per-tx-label').textContent = texts[lang].perTxLabel;
    document.getElementById('nodes-label').textContent = texts[lang].nodesLabel;
    document.getElementById('online-label').textContent = texts[lang].onlineLabel;
    document.getElementById('token-title').textContent = texts[lang].tokenTitle;
    document.getElementById('cap-text').textContent = texts[lang].capText;
    document.getElementById('opt-select').textContent = texts[lang].optSelect;
    document.getElementById('opt-core').textContent = texts[lang].optCore;
    document.getElementById('opt-feature').textContent = texts[lang].optFeature;
    document.getElementById('opt-content').textContent = texts[lang].optContent;
    document.getElementById('opt-community').textContent = texts[lang].optCommunity;

    // تحديث خيارات القائمة المنسدلة
    const typeSelect = document.getElementById('agent-type');
    Object.keys(texts[lang].agentTypeOptions).forEach(key => {
        const option = typeSelect.querySelector(`option[value="${key}"]`);
        if (option) option.textContent = texts[lang].agentTypeOptions[key];
    });

    updateAgentDisplay(); // تحديث عرض الوكيل عند تغيير اللغة
}

document.getElementById('lang-btn').addEventListener('click', function() {
    lang = lang === 'en' ? 'ar' : 'en';
    updateTexts();
});

// --- 3. محاكاة السعر والنشاط ---
setInterval(function() {
    const price = 0.05 + (Math.random() * 0.002 - 0.001);
    document.getElementById('live-price').textContent = price.toFixed(4);
    const change = (Math.random() * 0.4 - 0.2);
    const trend = document.getElementById('live-trend');
    trend.textContent = (change >= 0 ? '▲ ' : '▼ ') + Math.abs(change).toFixed(2) + '%';
    trend.style.color = change >= 0 ? '#0f0' : '#f00';

    const nodes = 1024 + Math.floor(Math.random() * 50);
    document.getElementById('node-count').textContent = nodes.toLocaleString();
}, 3000);

// --- 4. زر المحفظة ---
document.getElementById('wallet-btn').addEventListener('click', function() {
    alert(lang === 'ar' ? 'المرحلة 2: قيد التطوير' : 'Phase 2: Coming Soon');
});

// --- 5. زر التنقل ---
document.getElementById('explore-btn').addEventListener('click', function() {
    document.getElementById('dashboard').scrollIntoView({ behavior: 'smooth' });
});

// --- 6. نظام إدارة الوكلاء (LocalStorage) ---

function generateAgentId() {
    return 'agt_' + Date.now() + '_' + Math.floor(Math.random() * 1000000);
}

function calculatePoints(agentData) {
    let points = 50; // نقاط البداية
    switch(agentData.type) {
        case 'core': points += 100; break;
        case 'feature': points += 75; break;
        case 'content': points += 50; break;
        case 'community': points += 25; break;
    }
    points += Math.min(agentData.skills.length, 50) + Math.min(agentData.proof.length, 100);
    return points;
}

function calculateLevel(points) {
    return Math.floor(points / 100) + 1;
}

function saveAgent(agentData) {
    const agents = JSON.parse(localStorage.getItem('autogenesis_agents')) || [];
    agents.push(agentData);
    localStorage.setItem('autogenesis_agents', JSON.stringify(agents));
}

function logActivity(message) {
    const activities = JSON.parse(localStorage.getItem('autogenesis_activities')) || [];
    activities.unshift({
        timestamp: new Date().toISOString(),
        message: message
    });
    if (activities.length > 20) activities.pop();
    localStorage.setItem('autogenesis_activities', JSON.stringify(activities));
    updateActivityFeed();
}

// --- 7. معالجة نموذج الانضمام ---
document.getElementById('agent-onboard-form').addEventListener('submit', function(e) {
    e.preventDefault();

    const name = document.getElementById('agent-name').value.trim();
    const email = document.getElementById('agent-email').value.trim();
    const type = document.getElementById('agent-type').value;
    const github = document.getElementById('agent-github').value.trim();
    const skills = document.getElementById('agent-skills').value.trim();
    const proof = document.getElementById('proof-of-skill').value.trim();

    if (!name || !email || !type || proof.length < 10) { // تحقق من محتوى "إثبات المهارة"
        alert(lang === 'ar' ? 'يرجى ملء جميع الحقول المطلوبة، وكتابة إجابة مفصلة في "إثبات المهارة".' : 'Please fill all required fields and provide a detailed answer in "Proof of Skill".');
        return;
    }

    const newAgent = {
        id: generateAgentId(),
        name: name,
        email: email,
        type: type,
        github: github,
        skills: skills,
        proof: proof,
        points: calculatePoints({type: type, skills: skills, proof: proof}),
        level: 1,
        joinedAt: new Date().toISOString()
    };

    saveAgent(newAgent);
    logActivity(`${newAgent.name} (${newAgent.type}) has joined the protocol.`);

    this.reset();

    updateCurrentAgentDisplay(newAgent);
    updateRegisteredAgentsList();

    alert(lang === 'ar' ? 'تم تسجيلك بنجاح! أنت الآن وكيل في منصة أتو-جينيسيس.' : 'You are now registered! You are an Agent in the Autogenesis Platform.');
});

// --- 8. دوال تحديث واجهة المستخدم ---

function updateCurrentAgentDisplay(agentData) {
    document.getElementById('agent-id-display').textContent = agentData.id;
    document.getElementById('agent-level').textContent = calculateLevel(agentData.points);
    document.getElementById('agent-points').textContent = agentData.points;
    document.getElementById('agent-role').textContent = texts[lang].agentTypeOptions[agentData.type] || agentData.type;
}

function updateAgentDisplay() {
    const agents = JSON.parse(localStorage.getItem('autogenesis_agents')) || [];
    if (agents.length > 0) {
        const latestAgent = agents[agents.length - 1];
        updateCurrentAgentDisplay(latestAgent);
    } else {
         document.getElementById('agent-id-display').textContent = texts[lang].agentIdDisplay;
         document.getElementById('agent-level').textContent = '-';
         document.getElementById('agent-points').textContent = '0';
         document.getElementById('agent-role').textContent = '-';
    }
}

function updateActivityFeed() {
    const feedElement = document.getElementById('activity-feed');
    const activities = JSON.parse(localStorage.getItem('autogenesis_activities')) || [];
    feedElement.innerHTML = '';

    if (activities.length === 0) {
        feedElement.textContent = lang === 'ar' ? 'لا توجد أنشطة حالياً.' : 'No activities yet.';
        return;
    }

    activities.forEach(activity => {
        const item = document.createElement('div');
        item.className = 'activity-item';
        item.textContent = `[${new Date(activity.timestamp).toLocaleTimeString()}] ${activity.message}`;
        feedElement.appendChild(item);
    });
}

function updateRegisteredAgentsList() {
    const listElement = document.getElementById('registered-agents-list');
    const agents = JSON.parse(localStorage.getItem('autogenesis_agents')) || [];
    listElement.innerHTML = '';

    if (agents.length === 0) {
        listElement.textContent = lang === 'ar' ? 'لا توجد وكلاء مسجلين بعد.' : 'No agents registered yet.';
        return;
    }

    agents.forEach(agent => {
        const item = document.createElement('div');
        item.className = 'agent-item';
        item.innerHTML = `
            <strong>${agent.name}</strong> (<span style="color: var(--primary);">${texts[lang].agentTypeOptions[agent.type] || agent.type}</span>)
            <div class="agent-stats">ID: ${agent.id} | Lvl: ${calculateLevel(agent.points)} | Pts: ${agent.points}</div>
        `;
        listElement.appendChild(item);
    });
}

// --- 9. تهيئة البيانات عند تحميل الصفحة ---
document.addEventListener('DOMContentLoaded', function() {
    updateTexts(); // تهيئة النصوص عند التحميل
    updateAgentDisplay();
    updateActivityFeed();
    updateRegisteredAgentsList();
});
