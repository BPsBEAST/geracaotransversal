# Geração Transversal — Website

Website institucional, em HTML5, CSS3 e JavaScript nativo, sem bibliotecas externas.

## Começar

Abra `index.html` no navegador. Como não são usados módulos JavaScript ES, o website também abre diretamente a partir de um ficheiro local.

Para um ambiente de desenvolvimento semelhante ao alojamento:

```bash
cd geracao-transversal
python -m http.server 8000
```

Aceda a `http://localhost:8000`.

## Organização

- `index.html` — Homepage
- `sobre.html`, `certificacoes.html`, `projetos.html`, `contactos.html` — páginas institucionais
- `formacoes.html` — catálogo pesquisável
- `formacoes/` — subpáginas de formação INEM, áreas DGERT, catálogo DGERT/UFCD e financiada
- `assets/css/main.css` — estilos globais, secções e animações
- `assets/css/components.css` — navegação, cabeçalho e rodapé
- `assets/css/responsive.css` — layout adaptado a diferentes ecrãs
- `assets/css/dgert-catalog.css` — estilos isolados da nova página de cursos DGERT
- `assets/js/data.js` — dados de cursos, contactos e empresa
- `assets/js/components.js` — cabeçalho e rodapé partilhados
- `assets/js/main.js` — menu, interatividade, pesquisa, animações e contacto
- `assets/js/dgert-catalog.js` — renderização, pesquisa e filtros da oferta DGERT
- `assets/images/` — imagens provenientes dos materiais entregues pela empresa, organizadas e convertidas para WebP

## Edições habituais

- **Cursos / duração / descrições**: `assets/js/data.js`.
- **Novas UFCD e curso completo**: editar os objetos em `GT.dgertCatalog`, também em `assets/js/data.js` (um único local).
- **Cores, fontes, espaçamentos**: variáveis no início de `assets/css/main.css`.
- **Menu e footer**: `assets/js/components.js`.
- **Conteúdo de cada página**: respetivo ficheiro `.html`.
- **Contacto**: `contactos.html`, `assets/js/data.js` e `assets/js/main.js`.

## Envio direto do formulário (V3)

- O formulário de `contactos.html` envia por `POST` para **FormSubmit**: `https://formsubmit.co/geracao.transversal@gmail.com`.
- A **primeira submissão** exige que a empresa **ative o endereço de destinatário**, seguindo a mensagem de ativação recebida no email. Sem esta ativação, **não há garantia de entrega**; teste com a empresa antes de publicar.
- Depois da ativação, faça um teste real e confirme receção. O retorno/recibo de envio é gerido pelo serviço de formulários, **não** pelo website. A confirmação de aceitação não equivale necessariamente à leitura da mensagem.
- O serviço é externo; rever condições contratuais e RGPD antes da publicação. O formulário inclui consentimento e campo armadilha anti-spam, mas a proteção contra spam não é infalível.
- Para substituir por um backend próprio, altere apenas o `action` de `<form id="contact-form">` e a política de privacidade.
- Em caso de indisponibilidade do prestador, mantenha como alternativa o telefone, WhatsApp e email diretamente na página.

## Novidades V3

1. WhatsApp flutuante em todas as páginas, com contacto em `assets/js/data.js`.
2. FAQ em Homepage e no catálogo, alterável em `GT.faq` sem duplicação.
3. Sistema de testemunhos integrado na Homepage; a V6 apresenta **sete cartões provisórios com cinco estrelas** num carrossel horizontal automático, que pára ao passar o rato por cima ou ao receber foco pelo teclado.
4. Formulário com submissão direta, consentimento e honeypot.
5. Ícones/favicon, imagem de partilha, Open Graph, estrutura `EducationalOrganization`, robots.txt, página de privacidade para revisão.

## Testemunhos da V7 — edição e publicação

Os 7 testemunhos são **inteiramente inventados** e têm 5 estrelas apenas para testar o aspeto. A secção mostra apenas o título e os cartões, sem avisos visuais; isto é adequado para a versão local de desenvolvimento. É obrigatório substituí-los antes de publicar online.

**Editar os testemunhos:** abra `assets/js/data.js`, procure `testimonials: [` e altere os campos `name` (nome), `role` (formação), `rating` (0 a 5) e `quote` (texto). Cada testemunho é uma linha, facilitando a substituição. Depois de substituir um exemplo por uma opinião verdadeira e autorizada, remova o campo `demo:true` desse registo. A marcação `demo` serve somente para controlo interno, sem qualquer efeito visual.

**Antes de publicar online**, substitua os exemplos por testemunhos reais com autorização dos respetivos autores, ou deixe `testimonials: []` para esconder a secção. Nunca apresente estes nomes e textos inventados como avaliações reais.

## SEO / configuração do domínio

- Os metadados Open Graph já existem, mas o `og:image` utiliza caminho relativo **apenas para testes locais**. Depois de contratar o domínio, substitua por URL HTTPS absoluto, incluindo a imagem de partilha.
- Acrescente `canonical` em todas as páginas com os URL definitivos. Não foram incluídos antes para evitar URLs falsos.
- Gere `sitemap.xml` com domínio real e acrescente referência em `robots.txt`.
- Reveja `privacidade.html`, incluindo prestadores, bases legais, prazos e direitos. É um **texto de revisão**, não uma validação jurídica.
- Nenhum Google Analytics, Meta Pixel, Google Fonts ou cookie não essencial foi incluído; não apresentar banner de consentimento sem motivo.

## Antes de publicar

1. Confirmar certificados/acreditações e autorizações de utilização dos logótipos oficiais.
2. Confirmar que formações, durações, preços e inscrições se mantêm atuais.
3. Confirmar relação entre os projetos Pessoas 2030 e PRR, e exigências de comunicação dos fundos.
4. Validar a morada operacional vs. a morada jurídica no certificado DGERT.
5. Rever política de privacidade/cookies consoante os serviços realmente utilizados.
6. Substituir miniaturas de fotografias extraídas das composições por ficheiros originais de alta resolução, quando disponíveis.
7. Configurar formulário de servidor, caso se pretenda envio sem abrir a aplicação de email.

## Diretrizes

Site mobile-first, navegação por teclado, respeito por `prefers-reduced-motion`, `loading="lazy"` para imagens fora do ecrã, sem dependências de terceiros e sem métricas inventadas. Os valores relativos a financiamento são metas/valores previstos, não resultados atingidos.

## Assinatura no rodapé

O rodapé partilhado apresenta o copyright de 2026 e a assinatura «Crafted by Bruno Pinto». Para atualizar a assinatura em todas as páginas, editar `assets/js/components.js`.

### Carrossel automático (V7)

- O carrossel percorre horizontalmente os sete cartões num ciclo contínuo, sem dependências externas.
- Para automaticamente ao passar o rato por cima, ao focar a secção com o teclado ou ao focar a área dos testemunhos pelo teclado.
- Em dispositivos com preferência por movimento reduzido, o movimento automático é desativado e os cartões podem ser percorridos na horizontal.
- Edite somente `assets/js/data.js` para substituir ou acrescentar testemunhos. **Antes de publicar**, use apenas avaliações reais com autorização e não mantenha exemplos inventados.


## Documentação institucional — V8

- **Certificações (`certificacoes.html`):** certificação DGERT (n.º 4365/2022, com validade desde 27/05/2022) e três certificados INEM fornecidos pela empresa para SBVDAE, TAT e TAS (13/03/2026 a 12/03/2031).
- **Projetos (`projetos.html`):** fotografia do cartaz Pessoas 2030. Trata-se de comunicação de financiamento, não de uma acreditação da entidade.
- **Homepage:** secção compacta de acreditações com ligação à página completa.
- **Visualizador:** ao clicar nos certificados abre-se um `<dialog>` acessível (suporte de Escape, botão de fecho e fotografia original). Com JS desativado, abre diretamente a fotografia original.
- **Ficheiros:** `assets/images/documentos/*.webp` contém recortes com correção de perspetiva, contraste e nitidez ligeiros para leitura; `assets/images/documentos/originais/*.jpg` guarda as fotografias originais sem modificações. O processamento não reconstitui nem altera texto, assinaturas ou selos.
- **Observação:** fotografias de documentos plastificados contêm reflexos que o processamento não consegue eliminar integralmente. Para uma versão ainda mais nítida, solicitar PDFs originais ou novas digitalizações sem reflexos.
- Os certificados INEM fornecidos demonstram especificamente as acreditações SBVDAE, TAT e TAS; não presumir que estes documentos comprovam outras formações.
- A morada constante dos documentos institucionais pode diferir da morada de contacto divulgada no site. Confirmar junto da empresa antes de publicar alterações legais.
- A verificação do âmbito atual das certificações deve ser feita junto das entidades oficiais, especialmente antes da publicação.


## Novidades V9 — Cursos DGERT e UFCD

A página **`formacoes/cursos-dgert.html`** apresenta a oferta comercial de
formação DGERT em duas categorias:

- **Curso completo**: Técnico Auxiliar de Saúde, com estágio incluído.
- **UFCD individuais**: 3550, 6575, 6574, 3549, 3564, 3538 e 6571.

A pesquisa permite procurar nomes e códigos de UFCD, inclusive sem acentos.
Os filtros **Todos / Curso completo / UFCD individuais** são acessíveis
também por teclado. Os oito cursos estão declarados num único array
`GT.dgertCatalog` em `assets/js/data.js`; os cartões são construídos
automaticamente por `assets/js/dgert-catalog.js`.

Os botões de contacto levam a `contactos.html` com o curso já selecionado
no formulário, incluindo a UFCD exata ou o Técnico Auxiliar de Saúde.
O catálogo aparece no menu **Formações**, tem ligação na Homepage, no
catálogo geral e na página das áreas certificadas DGERT.

**Por confirmar antes da publicação:** carga horária, programas específicos,
preços, modalidade, calendário, vagas e condições de inscrição do curso
completo e das UFCD. O estágio está indicado porque foi confirmado pela
empresa; a sua duração e funcionamento ainda não foram fornecidos.
Não assuma que todas as UFCD fazem parte do curso completo: aguarde o
plano curricular oficial antes de detalhar os módulos integrantes.

**Distinção importante:** a DGERT certifica a entidade formadora nas áreas
indicadas no certificado institucional; isto não significa que cada curso
individual tenha uma acreditação DGERT independente. A identidade visual
Moodle refere-se à plataforma de apoio e não a uma certificação.

O formulário continua a depender da ativação do serviço externo FormSubmit.


## Formações financiadas realizadas

O histórico de edições realizadas é gerido no array `financedHistory` em `assets/js/data.js` (código UFCD, nome, horas, início e fim no formato `AAAA-MM`). Cada entrada corresponde a uma edição. Quando o mês de conclusão é desconhecido, mantenha `end: null`. A página `formacoes/financiada.html` gera automaticamente os cartões por ano.
