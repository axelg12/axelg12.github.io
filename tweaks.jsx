/* tweaks.jsx — tweaks panel mounted on every page */

const TWEAK_DEFAULTS = /*EDITMODE-BEGIN*/{
  "aesthetic": "constructivist",
  "accent": "#c1502e",
  "paper": "#f5efe4",
  "density": "regular",
  "reveal": true
}/*EDITMODE-END*/;

function TweaksApp() {
  const [t, setTweak] = useTweaks(TWEAK_DEFAULTS);

  // Apply on mount and whenever t changes
  React.useEffect(() => {
    if (window.__axelApplyTweaks) window.__axelApplyTweaks(t);
    try { localStorage.setItem('axel-tweaks', JSON.stringify(t)); } catch (e) {}
    // toggle reveal: if disabled, force everything visible
    document.querySelectorAll('.reveal').forEach(el => {
      if (!t.reveal) el.classList.add('in');
    });
  }, [t.aesthetic, t.accent, t.paper, t.density, t.reveal]);

  return (
    <TweaksPanel title="Tweaks">
      <TweakSection label="Aesthetic" />
      <TweakSelect
        label="Style"
        value={t.aesthetic}
        options={[
          { value: 'editorial',     label: 'Editorial (warm minimal)' },
          { value: 'constructivist', label: 'Berlin × Constructivist' },
        ]}
        onChange={(v) => setTweak('aesthetic', v)}
      />
      <TweakRadio
        label="Density"
        value={t.density}
        options={[
          { value: 'regular', label: 'Regular' },
          { value: 'compact', label: 'Compact' },
        ]}
        onChange={(v) => setTweak('density', v)}
      />

      <TweakSection label="Color" />
      <TweakColor
        label="Accent"
        value={t.accent}
        options={['#c1502e', '#8a3a20', '#3f6b4a', '#2a4a6b', '#6b4a2a', '#1d1a14']}
        onChange={(v) => setTweak('accent', v)}
      />
      <TweakColor
        label="Paper"
        value={t.paper}
        options={['#f5efe4', '#ece4d4', '#f7f3ed', '#1d1a14', '#f0e6d2']}
        onChange={(v) => setTweak('paper', v)}
      />

      <TweakSection label="Motion" />
      <TweakToggle
        label="Reveal animation"
        value={t.reveal}
        onChange={(v) => setTweak('reveal', v)}
      />
    </TweaksPanel>
  );
}

ReactDOM.createRoot(document.getElementById('tweaks-root')).render(<TweaksApp />);
