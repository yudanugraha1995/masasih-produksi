# bikin sfx/pop.wav, sfx/whoosh.wav, sfx/ding.wav (sintesis, tanpa kredit)
import numpy as np, wave
SR=44100
def save(n,x):
    x=np.clip(x,-1,1);w=wave.open(f'sfx/{n}.wav','wb');w.setnchannels(1);w.setsampwidth(2);w.setframerate(SR);w.writeframes((x*32767).astype('<i2').tobytes());w.close()
t=np.arange(int(SR*0.16))/SR; f=650*np.exp(-t*14)+180; ph=2*np.pi*np.cumsum(f)/SR
save('pop',0.9*np.sin(ph)*np.exp(-t*28)*(1-np.exp(-t*900)))
n=int(SR*0.5);t=np.arange(n)/SR;rng=np.random.default_rng(7);x=rng.standard_normal(n)
out=np.zeros(n);y=0;
for i in range(n):
    a=0.02+0.25*np.sin(np.pi*t[i]/0.5)**2; y+=a*(x[i]-y); out[i]=y
env=np.sin(np.pi*t/0.5)**1.5; save('whoosh',0.9*out/np.max(abs(out))*env)
t=np.arange(int(SR*1.0))/SR
d=(np.sin(2*np.pi*1318*t)+0.5*np.sin(2*np.pi*2637*t)+0.25*np.sin(2*np.pi*3951*t))*np.exp(-t*4.5)*(1-np.exp(-t*400))
save('ding',0.6*d/np.max(abs(d)))
print('ok')
