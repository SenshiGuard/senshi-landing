// SenshiGuard Landing Page Interactions
document.addEventListener('DOMContentLoaded', () => {
  // 1. Console Tabs Interaction
  const tabBtns = document.querySelectorAll('.console-tab-btn');
  const tabPanes = document.querySelectorAll('.tab-pane');

  tabBtns.forEach(btn => {
    btn.addEventListener('click', () => {
      const targetTab = btn.getAttribute('data-tab');
      
      tabBtns.forEach(b => b.classList.remove('active'));
      tabPanes.forEach(p => p.classList.remove('active'));

      btn.classList.add('active');
      const activePane = document.getElementById(targetTab);
      if (activePane) {
        activePane.classList.add('active');
      }
    });
  });

  // 2. Pricing Toggle (Monthly vs Annual with 20% discount)
  const billingToggle = document.getElementById('billing-toggle');
  const priceFreelancer = document.getElementById('price-freelancer');
  const priceAgency = document.getElementById('price-agency');
  const priceEnterprise = document.getElementById('price-enterprise');
  const periodLabels = document.querySelectorAll('.price-period');

  if (billingToggle) {
    billingToggle.addEventListener('change', () => {
      const isAnnual = billingToggle.checked;
      
      if (isAnnual) {
        priceFreelancer.textContent = '11';
        priceAgency.textContent = '47';
        priceEnterprise.textContent = '159';
        periodLabels.forEach(p => p.textContent = '/site/mo (billed annually)');
      } else {
        priceFreelancer.textContent = '14';
        priceAgency.textContent = '59';
        priceEnterprise.textContent = '199';
        periodLabels.forEach(p => p.textContent = '/site/mo');
      }
    });
  }

  // 3. FAQ Accordion
  const faqItems = document.querySelectorAll('.faq-item');
  faqItems.forEach(item => {
    const questionBtn = item.querySelector('.faq-question');
    questionBtn.addEventListener('click', () => {
      const isActive = item.classList.contains('active');
      faqItems.forEach(i => i.classList.remove('active'));
      if (!isActive) {
        item.classList.add('active');
      }
    });
  });

  // 4. Live Terminal Scanner Simulation
  const terminalLog = document.getElementById('terminal-log-content');
  const scanProgressFill = document.querySelector('.scan-bar-fill');
  const filesScannedEl = document.getElementById('files-scanned-count');

  if (terminalLog && scanProgressFill) {
    const mockFiles = [
      { type: 'ok', msg: '[SHA-256 MATCH] /wp-includes/version.php (WP Core 6.7.1) - Clean' },
      { type: 'ok', msg: '[SHA-256 MATCH] /wp-admin/includes/file.php - Clean' },
      { type: 'threat', msg: '[CRITICAL THREAT] /wp-content/uploads/2026/02/cache_bak.php (Obfuscated Webshell AST Pattern detected)' },
      { type: 'info', msg: '[AST DE-OBFUSCATOR] Found base64_decode(str_rot13($_POST["senshi_eval"])) on line 14' },
      { type: 'ok', msg: '[VIRTUAL PATCH] Active rule applied for CVE-2026-4412 (WooCommerce SQLi)' },
      { type: 'threat', msg: '[CLEAN RECIPE GENERATED] Safe surgical diff prepared for cache_bak.php' },
      { type: 'ok', msg: '[CHECKSUM PASS] /wp-content/plugins/elementor/elementor.php - Validated' },
      { type: 'ok', msg: '[COMPLETED] 14,820 files scanned in 1.42s • 0.00% CPU impact on origin' }
    ];

    let fileCount = 11420;
    let logIndex = 0;

    setInterval(() => {
      if (logIndex < mockFiles.length) {
        const item = mockFiles[logIndex];
        const logLine = document.createElement('div');
        logLine.className = 'log-line';
        
        const now = new Date();
        const timeStr = now.toTimeString().split(' ')[0] + '.' + String(now.getMilliseconds()).padStart(3, '0');
        
        let tagClass = 'log-info';
        if (item.type === 'threat') tagClass = 'log-threat';
        if (item.type === 'ok') tagClass = 'log-ok';
        
        logLine.innerHTML = `<span class="log-time">${timeStr}</span> <span class="${tagClass}">${item.msg}</span>`;
        terminalLog.appendChild(logLine);
        terminalLog.scrollTop = terminalLog.scrollHeight;
        
        fileCount += 425;
        if (filesScannedEl) filesScannedEl.textContent = fileCount.toLocaleString();
        
        logIndex++;
      } else {
        logIndex = 0;
        terminalLog.innerHTML = '<div class="log-line"><span class="log-time">00:00:01</span> <span class="log-info">[DISPATCH] Cloud worker stream initiated via Redis BullMQ...</span></div>';
        fileCount = 10000;
      }
    }, 2200);
  }

  // 5. Interactive 1-Click Clean Demo Button
  const cleanBtn = document.getElementById('demo-clean-btn');
  const cleanStatus = document.getElementById('demo-clean-status');
  if (cleanBtn && cleanStatus) {
    cleanBtn.addEventListener('click', () => {
      cleanBtn.disabled = true;
      cleanBtn.innerHTML = '⚡ Applying Surgical Diff...';
      setTimeout(() => {
        cleanBtn.innerHTML = '✓ Threat Neutralized & File Restored';
        cleanBtn.style.background = 'linear-gradient(135deg, #10B981, #059669)';
        cleanStatus.innerHTML = '<span style="color: #10B981; font-weight: bold;">Status: 100% Clean • Origin Hash Intact • 0 Downtime</span>';
      }, 900);
    });
  }
});
