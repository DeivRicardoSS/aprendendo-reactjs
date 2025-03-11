import styles from "./styles.module.css";
import { CardHabilidade } from "../../components/CardHabilidade";

export function Habilidades() {
    return (
        <section id="habilidades" className={styles.container}>
            <h2>Habilidades</h2>
            <div>
                <CardHabilidade 
                    tec="HTML5"
                    nivel="Avançado"
                    porc= {100}
                    img="https://imgs.search.brave.com/dczcbl0z1RY1YJ1pZMbHmBHRPjWM3xn7U1g9-X1RYOc/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly93YWxs/cGFwZXJjYXZlLmNv/bS93cC93cDExNzI1/NzMxLnBuZw"
                />

                <CardHabilidade 
                    tec="CSS3"
                    nivel="Avançado"
                    porc= {90}
                    img="https://imgs.search.brave.com/mglfu_675N11DBczte8uXHVrAVagq0a0CAXTFbHbdwA/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9tZWRp/YTIuZGV2LnRvL2R5/bmFtaWMvaW1hZ2Uv/d2lkdGg9ODAwLGhl/aWdodD0sZml0PXNj/YWxlLWRvd24sZ3Jh/dml0eT1hdXRvLGZv/cm1hdD1hdXRvL2h0/dHBzOi8vZGV2LXRv/LXVwbG9hZHMuczMu/YW1hem9uYXdzLmNv/bS91cGxvYWRzL2Fy/dGljbGVzLzdqMzUz/djh4ZTFoODYxdWM1/aTUzLnBuZw"
                />

                <CardHabilidade 
                    tec="JavaScript"
                    nivel="Intermediário"
                    porc= {55}
                    img="https://imgs.search.brave.com/hqktnWGFQe0IJ1dPR3ce_4aspZmR855xmgbwDIj0emY/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9naXRo/dWIuY29tL3Zvb2Rv/b3Rpa2lnb2QvbG9n/by5qcy9yYXcvbWFz/dGVyL2pzLnBuZw"
                />

                <CardHabilidade 
                    tec="TypeScript"
                    nivel="Intermediário"
                    porc= {45}
                    img="https://imgs.search.brave.com/pc2qzNG5XWzqfv0jt7F_zG4nES_l_fhA6bYYrGxzVtk/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9naXRo/dWIuY29tL3JlbW9q/YW5zZW4vbG9nby50/cy9yYXcvbWFzdGVy/L3N0aWNrZXJzL2R1/Ymxpbl90eXBlc2Ny/aXB0LnBuZw"
                />

                <CardHabilidade 
                    tec="C#"
                    nivel="Básico"
                    porc= {40}
                    img="https://imgs.search.brave.com/I_i66vdON1X4A3dmdmYi1BRKNQ86bOBXy_y1yrPJ6mU/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly91cGxv/YWQud2lraW1lZGlh/Lm9yZy93aWtpcGVk/aWEvY29tbW9ucy9i/L2JkL0xvZ29fQ19z/aGFycC5zdmc"
                />

                <CardHabilidade 
                    tec="Python"
                    nivel="Básico"
                    porc= {35}
                    img="https://imgs.search.brave.com/Gc4o0TZByHDXOrUog0t60tOvt-BmVp3pOLjo8FdPnCM/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9hc3Nl/dHMuc3RpY2twbmcu/Y29tL2ltYWdlcy81/ODQ4MTUyZmNlZjEw/MTRjMGI1ZTQ5Njcu/cG5n"
                />

                <CardHabilidade 
                    tec="Java"
                    nivel="Básico"
                    porc= {20}
                    img="https://imgs.search.brave.com/kJx_kcaW8X66pSQjItdOrUYsr2vtBq1VuNCa124OqlU/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9pLnBp/bmltZy5jb20vb3Jp/Z2luYWxzL2ZkLzQ4/LzU4L2ZkNDg1ODNl/YzMxMTI3ZTk5MTU0/NjQ3NWVjZWNlNTUw/LmpwZw"
                />

                <CardHabilidade 
                    tec="MySQL"
                    nivel="Básico"
                    porc= {20}
                    img="https://imgs.search.brave.com/RAvPAR0s7hJmvMuXvnSHlELWTPgQDpKqvEEHW3o5WEw/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9hc3Nl/dHMuc3RpY2twbmcu/Y29tL2ltYWdlcy82/MmRlYmM0ZmZmM2M2/ZTRiOGI1ZGU4ZDMu/cG5n"
                />

                <CardHabilidade 
                    tec="MongoDB"
                    nivel="Básico"
                    porc= {20}
                    img="https://imgs.search.brave.com/NSSgp4dvEWMCQPZ289ugsE8tUZdMCXbBBsHziyopRlM/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9yYXcu/Z2l0aHVidXNlcmNv/bnRlbnQuY29tL2Rl/dmljb25zL2Rldmlj/b24vbWFzdGVyL2lj/b25zL21vbmdvZGIv/bW9uZ29kYi1vcmln/aW5hbC5zdmc"
                />

                <CardHabilidade 
                    tec="Git / Github"
                    nivel="Intermediário"
                    porc= {50}
                    img="https://imgs.search.brave.com/ldAx6cRyEOwSKdXGfIXQAaZBuTwqCaufrMRCNOkEnHg/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9jZG4t/aWNvbnMtcG5nLmZs/YXRpY29uLmNvbS81/MTIvNTM2LzUzNjQ1/Mi5wbmc"
                />

                <CardHabilidade 
                    tec="NodeJs"
                    nivel="Intermediário"
                    porc= {50}
                    img="https://imgs.search.brave.com/ENyJUaiPgWbPpEMIIuqMalB-y7UKOcZtrXboR_9lD3k/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9zZWVr/bG9nby5jb20vaW1h/Z2VzL04vbm9kZWpz/LWxvZ28tNTJGNUMw/MjA0RS1zZWVrbG9n/by5jb20ucG5n"
                />

                <CardHabilidade 
                    tec="ReactJs"
                    nivel="Básico"
                    porc= {40}
                    img="https://imgs.search.brave.com/-wRYfmc8MFTE9dYoFBioZSxfu45QaJyuKfJ3h68gZGM/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9jZG40/Lmljb25maW5kZXIu/Y29tL2RhdGEvaWNv/bnMvbG9nb3MtMy82/MDAvUmVhY3QuanNf/bG9nby01MTIucG5n"
                />

                

            </div>
        </section>
    );
}