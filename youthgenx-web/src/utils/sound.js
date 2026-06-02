let ambientStarted = false;

// Generates a lush, continuous cinematic ambient pad
export const startBackgroundMusic = () => {
  if (ambientStarted) return;
  ambientStarted = true;
  
  try {
    const ctx = new (window.AudioContext || window.webkitAudioContext)();
    
    // A majestic open chord (A2, E3, A3, C#4)
    const frequencies = [110.00, 164.81, 220.00, 277.18]; 
    
    frequencies.forEach((freq, i) => {
      const osc = ctx.createOscillator();
      const gain = ctx.createGain();
      const filter = ctx.createBiquadFilter();
      
      const lfo = ctx.createOscillator();
      const lfoGain = ctx.createGain();
      
      // Mix of sine and triangle for a soft but rich pad
      osc.type = i % 2 === 0 ? 'sine' : 'triangle';
      osc.frequency.value = freq + (Math.random() * 0.5 - 0.25); // Slight analog detune
      
      // Lowpass filter to keep it warm and muffled
      filter.type = 'lowpass';
      filter.frequency.value = 800;
      
      // Slow LFO for volume swells (makes it "breathe")
      lfo.type = 'sine';
      lfo.frequency.value = 0.05 + (i * 0.015); 
      
      // Set very low volume
      gain.gain.value = 0.01; 
      lfoGain.gain.value = 0.015; 
      
      lfo.connect(lfoGain.gain);
      lfoGain.connect(gain);
      
      osc.connect(filter);
      filter.connect(gain);
      gain.connect(ctx.destination);
      
      osc.start();
      lfo.start();
    });
  } catch(e) {
    console.error("Audio generation blocked", e);
  }
};
