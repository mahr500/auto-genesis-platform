// --- 6. نظام إدارة الوكلاء (LocalStorage) مع معالجة الأخطاء ---
function saveAgent(agentData) {
    try {
        const agents = JSON.parse(localStorage.getItem('autogenesis_agents')) || [];
        agents.push(agentData);
        localStorage.setItem('autogenesis_agents', JSON.stringify(agents));
        console.log("Agent saved successfully:", agentData.name); // Debug log
    } catch (e) {
        console.error("Failed to save agent data:", e);
        alert(lang === 'ar' ? 'خطأ في حفظ بياناتك. الرجاء المحاولة لاحقًا.' : 'Error saving your data. Please try again later.');
    }
}

function logActivity(message) {
    try {
        const activities = JSON.parse(localStorage.getItem('autogenesis_activities')) || [];
        activities.unshift({
            timestamp: new Date().toISOString(),
            message: message
        });
        if (activities.length > 20) activities.pop();
        localStorage.setItem('autogenesis_activities', JSON.stringify(activities));
        updateActivityFeed(); // Update UI after successful save
        console.log("Activity logged:", message); // Debug log
    } catch (e) {
        console.error("Failed to log activity:", e);
        alert(lang === 'ar' ? 'خطأ في تسجيل النشاط.' : 'Error logging activity.');
    }
}

// --- 8. دوال تحديث واجهة المستخدم (مع معالجة الأخطاء) ---
function updateAgentDisplay() {
    try {
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
    } catch (e) {
        console.error("Failed to update agent display:", e);
        // Optional: Show a subtle error in the UI
        document.getElementById('agent-id-display').textContent = texts[lang].agentIdDisplay;
        document.getElementById('agent-level').textContent = 'Err';
        document.getElementById('agent-points').textContent = 'Err';
        document.getElementById('agent-role').textContent = 'Err';
    }
}

function updateActivityFeed() {
    try {
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
    } catch (e) {
        console.error("Failed to update activity feed:", e);
        document.getElementById('activity-feed').textContent = lang === 'ar' ? 'خطأ في تحميل الأنشطة.' : 'Error loading activities.';
    }
}

function updateRegisteredAgentsList() {
    try {
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
    } catch (e) {
        console.error("Failed to update registered agents list:", e);
        document.getElementById('registered-agents-list').textContent = lang === 'ar' ? 'خطأ في تحميل قائمة الوكلاء.' : 'Error loading agent list.';
    }
}

// --- 9. تهيئة البيانات عند تحميل الصفحة (مع معالجة الأخطاء) ---
document.addEventListener('DOMContentLoaded', function() {
    try {
        updateTexts(); // تهيئة النصوص عند التحميل
        updateAgentDisplay();
        updateActivityFeed();
        updateRegisteredAgentsList();
        console.log("Autogenesis Platform initialized successfully.");
    } catch (e) {
        console.error("Critical failure during initialization:", e);
        alert(lang === 'ar' ? 'حدث خطأ في تهيئة المنصة.' : 'A critical error occurred initializing the platform.');
    }
});
