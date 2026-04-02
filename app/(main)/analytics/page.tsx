import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Analytics',
};

export default function AnalyticsPage() {
  return (
      <>

    <div className="page-header">
      <div className="label">Admin</div>
      <h1>Site Analytics</h1>
      <p>Session data only — no external tracking, no cookies. Replace with Plausible or Umami in production.</p>
    </div>
    <div className="analytics-grid">
      <div className="analytics-card"><div className="a-label">Total Page Views</div><div className="a-value" id="a-pv">—</div><div className="a-sub">This session</div></div>
      <div className="analytics-card"><div className="a-label">Pages Visited</div><div className="a-value" id="a-pages">—</div><div className="a-sub">Unique sections</div></div>
      <div className="analytics-card"><div className="a-label">Quizzes Completed</div><div className="a-value" id="a-quiz">—</div><div className="a-sub">Total attempts</div></div>
    </div>
    <h4 style={{ color: 'var(--navy)', marginBottom: '12px', marginTop: '8px' }}>Most Visited Pages</h4>
    <div id="a-pages-list"><p style={{ color: 'var(--text-muted)', fontSize: '0.87rem' }}>No data yet — browse the site first.</p></div>
    <div id="a-quiz-detail"></div>
    <div className="info-box" style={{ marginTop: '24px' }}>
      <p>📊 <strong>Production analytics:</strong> Add <a href="https://plausible.io" target="_blank" rel="noopener">Plausible.io</a> or self-host <a href="https://umami.is" target="_blank" rel="noopener">Umami</a> by replacing the comment in BaseLayout.astro with your script tag.</p>
    </div>
    <script>{`
      document.addEventListener('DOMContentLoaded', function() {
        try {
          var d = JSON.parse(localStorage.getItem('npa') || '{"pv":0,"pages":{},"quiz":{}}');
          var pvEl = document.getElementById('a-pv');
          var pagesEl = document.getElementById('a-pages');
          var quizEl = document.getElementById('a-quiz');
          if (pvEl) pvEl.textContent = String(d.pv || 0);
          var pages = d.pages || {};
          if (pagesEl) pagesEl.textContent = String(Object.keys(pages).length);
          var quizData = d.quiz || {};
          var totalQuiz = Object.values(quizData).reduce(function(a,v){return a+(Array.isArray(v)?v.length:0);},0);
          if (quizEl) quizEl.textContent = String(totalQuiz);
          var labels = {home:'Home',scope:'Scope',assessment:'Assessment',eyes:'Eyes',ent:'ENT',support:'Support',analytics:'Analytics',about:'About'};
          var topPages = Object.entries(pages).sort(function(a,b){return b[1]-a[1];}).slice(0,6);
          var listEl = document.getElementById('a-pages-list');
          if (listEl && topPages.length > 0) {
            listEl.innerHTML = topPages.map(function(e){return '<div style="background:var(--white);border:1px solid var(--border);border-radius:var(--radius-sm);padding:12px 16px;margin-bottom:8px;display:flex;justify-content:space-between"><span>'+(labels[e[0]]||e[0])+'</span><span style="font-weight:600;color:var(--gold)">'+e[1]+' views</span></div>';}).join('');
          }
        } catch(e) {}
      });
    `}</script>
      </>
    
  );
}
