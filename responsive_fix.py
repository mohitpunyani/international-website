import os, re

base = '/Users/mohitpunyani/International-website'

# Universal responsive additions for inner pages
RESPONSIVE_CSS = """
    /* ============================================
       RESPONSIVE OVERRIDES - ALL DEVICES
       ============================================ */
    
    /* Tablet Landscape (768px - 1023px) */
    @media (max-width: 1023px) {
      .two-col-grid { grid-template-columns: 1fr !important; }
      .three-col-grid { grid-template-columns: 1fr 1fr !important; }
      .four-col-grid { grid-template-columns: 1fr 1fr !important; }
    }

    /* Tablet Portrait (600px - 767px) */
    @media (max-width: 767px) {
      .three-col-grid { grid-template-columns: 1fr !important; }
      .four-col-grid { grid-template-columns: 1fr 1fr !important; }
      .apply-grid { grid-template-columns: 1fr !important; }
      .apply-grid .full-width { grid-column: span 1 !important; }
      .contact-layout { grid-template-columns: 1fr !important; }
      .contact-info-card { position: static !important; }
      .contact-form-card { padding: 24px 18px !important; }
      .contact-form-grid { grid-template-columns: 1fr !important; }
      .contact-form-grid .full { grid-column: span 1 !important; }
      .leadership-grid { grid-template-columns: 1fr 1fr !important; }
      .values-grid { grid-template-columns: 1fr 1fr !important; }
      .awards-grid { grid-template-columns: 1fr !important; }
      .admission-steps { grid-template-columns: 1fr 1fr !important; }
      .eligibility-grid { grid-template-columns: 1fr !important; }
      .scholarship-grid { grid-template-columns: 1fr !important; }
      .fee-table { font-size: 12px; }
      .fee-table th, .fee-table td { padding: 12px 14px; }
      .faculty-header-card { grid-template-columns: 1fr !important; text-align: center; }
      .courses-grid { grid-template-columns: 1fr 1fr !important; }
      .research-grid { grid-template-columns: 1fr !important; }
      .clubs-grid { grid-template-columns: 1fr 1fr !important; }
      .sports-grid { grid-template-columns: repeat(4, 1fr) !important; }
      .international-support-grid { grid-template-columns: 1fr !important; }
      .hostel-grid { grid-template-columns: 1fr !important; }
      .facilities-list-grid { grid-template-columns: 1fr 1fr !important; }
      .facility-hero-grid { grid-template-columns: 1fr !important; }
      .facility-card.large { grid-column: span 1 !important; height: 260px !important; }
      .timeline::before { left: 20px !important; }
      .timeline-item { grid-template-columns: 48px 1fr !important; }
      .timeline-content { padding: 20px !important; }
      .why-acc-badge { display: none; }
      .events-timeline { padding-left: 28px !important; }
      .life-hero-mosaic { grid-template-columns: 1fr 1fr !important; grid-template-rows: auto !important; }
      .mosaic-item.span-2-rows { grid-row: span 1 !important; height: 200px; }
      .mosaic-item { height: 180px; }
    }

    /* Mobile (up to 599px) */
    @media (max-width: 599px) {
      .leadership-grid { grid-template-columns: 1fr !important; }
      .values-grid { grid-template-columns: 1fr !important; }
      .admission-steps { grid-template-columns: 1fr !important; gap: 40px !important; }
      .scholarship-grid { grid-template-columns: 1fr !important; }
      .courses-grid { grid-template-columns: 1fr !important; }
      .clubs-grid { grid-template-columns: 1fr 1fr !important; }
      .sports-grid { grid-template-columns: repeat(3, 1fr) !important; }
      .facilities-list-grid { grid-template-columns: 1fr 1fr !important; }
      .apply-form { padding: 24px 16px !important; }
      .eligibility-card { padding: 24px 20px !important; }
      .faculty-tabs { gap: 8px !important; }
      .faculty-tab { font-size: 12px !important; padding: 8px 14px !important; }
      .section-header[style*="justify-content:space-between"] { flex-direction: column !important; }
    }
"""

pages = ['about.html','academics.html','admissions.html','campus.html','student-life.html','contact.html']

for page in pages:
    path = os.path.join(base, page)
    with open(path, 'r') as f:
        content = f.read()
    
    # Add responsive CSS before closing </style> tag (first occurrence)
    if RESPONSIVE_CSS.strip() not in content:
        content = content.replace('  </style>', RESPONSIVE_CSS + '\n  </style>', 1)
    
    with open(path, 'w') as f:
        f.write(content)
    print(f'Responsive fix applied to {page}')

print('Done!')
