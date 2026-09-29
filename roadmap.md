🚀 ROADMAP FRONT-END 2026 → 2030
A arquitetura da sua carreira
Eu dividiria sua evolução em 7 níveis:

Nível	Período aproximado	Objetivo
Nível 0	agora	Fundamentos
Nível 1	0–6 meses	Base profissional
Nível 2	6–12 meses	Junior forte
Nível 3	12–18 meses	Junior → Pleno
Nível 4	18–30 meses	Pleno forte
Nível 5	30–42 meses	Sênior
Nível 6	2029–2030+	Sênior forte / Especialista

Não trate essas datas como promoção automática.

Elas são checkpoints.

Você só avança quando conseguir demonstrar as competências.

🧭 A regra número 1 do seu roadmap
Existe uma hierarquia que eu quero que você mantenha durante toda a jornada:

WEB
 ↓
HTML
 ↓
CSS
 ↓
JavaScript
 ↓
TypeScript
 ↓
React
 ↓
Next.js
 ↓
Testes
 ↓
Performance
 ↓
Arquitetura
 ↓
Engenharia de Software
 ↓
Produto/Negócio
 ↓
Liderança
 ↓
Especialização

E não:

React
Next
Vue
Angular
Svelte
Astro
Nuxt
Remix
...

Você não precisa aprender todos os frameworks.

React continua sendo extremamente relevante no ecossistema atual: no State of JS 2025, React aparece com 83,6% de uso entre os respondentes da categoria de frameworks/bibliotecas front-end, enquanto Next.js aparece com 58,6%. 
E
Estado do JavaScript 2025

A própria documentação atual do Next.js recomenda o App Router para aproveitar recursos modernos do React, incluindo Server Components. 
N
Next.js
+1

Portanto, para seu caminho corporativo, eu escolheria:

HTML + CSS + JavaScript + TypeScript + React + Next.js

como seu eixo principal.

🟢 FASE 0 — Fundamentos absolutos
Objetivo
Você precisa conseguir construir uma interface sem React.

Se alguém remover React do seu computador amanhã, você ainda precisa saber desenvolver para a Web.

1. HTML
Dominar
HTML semântico

html

head

body

headings

paragraphs

links

images

lists

tables

forms

inputs

buttons

labels

select

textarea

fieldset

legend

article

section

nav

main

header

footer

aside

figure

figcaption

metadata

SEO básico

Open Graph

favicon

estrutura semântica

Você precisa conseguir responder:
Quando usar <button> e quando usar <a>?

Quando usar <section>?

Como criar um formulário acessível?

Por que div demais é ruim?

Como funciona o HTML semântico?

O que é progressive enhancement?

🎨 2. CSS
Aqui quero que você fique muito forte.

Fundamentos
cascade

specificity

inheritance

box model

display

position

overflow

stacking context

z-index

pseudo-classes

pseudo-elements

Layout
Flexbox

Grid

responsive design

mobile-first

media queries

container queries

Modern CSS
CSS variables

nesting

clamp()

min()

max()

calc()

logical properties

modern selectors

:has()

aspect-ratio

object-fit

content-visibility

transitions

animations

transforms

View Transitions

O ecossistema Web está evoluindo bastante nessa direção; o Baseline existe justamente para indicar quais APIs e recursos possuem suporte suficientemente amplo nos principais navegadores. 
W
web.dev
+1

Depois:
Tailwind CSS

CSS Modules

Design Tokens

CSS Architecture

Mas não comece pelo Tailwind.

Primeiro:

CSS puro
↓
CSS avançado
↓
arquitetura CSS
↓
Tailwind

🟡 3. JavaScript — MUITO IMPORTANTE
Aqui está uma das maiores diferenças entre:

"sei React"

e

"sou engenheiro Front-end".

O próprio TypeScript Handbook recomenda uma base sólida de JavaScript antes de usar TypeScript como substituto do conhecimento da linguagem. 
T
TypeScript

JavaScript básico
variables

types

operators

conditionals

loops

functions

arrays

objects

destructuring

spread/rest

template literals

JavaScript intermediário
scope

lexical scope

closures

hoisting

execution context

this

prototypes

classes

inheritance

modules

ES Modules

CommonJS

immutability

higher-order functions

callbacks

JavaScript avançado
Event Loop

Call Stack

Task Queue

Microtask Queue

Promise

async/await

generators

iterators

Web Workers

AbortController

streams

memory

garbage collection

browser APIs

Promises e async/await são fundamentais para o JavaScript moderno e para APIs assíncronas do navegador. 
M
MDN Web Docs
+1

🌐 4. Web Platform
Essa parte será um dos seus diferenciais.

Aprenda:

DOM

BOM

Browser Rendering

Web APIs

Fetch

Storage

Cookies

IndexedDB

History API

URL API

WebSocket

Web Workers

Service Workers

Web Push

Notifications

Clipboard API

Drag & Drop

File API

Media APIs

E principalmente:

Browser
 ↓
HTML
 ↓
CSS
 ↓
DOM
 ↓
JavaScript
 ↓
Rendering
 ↓
Network
 ↓
Server

Você precisa entender o que acontece quando o usuário entra em uma URL.

🔵 FASE 1 — Git + ambiente profissional
Antes de se considerar um desenvolvedor profissional forte:

Git
Dominar:

init

clone

add

commit

push

pull

fetch

branch

merge

rebase

cherry-pick

stash

reset

revert

reflog

tags

remote

pull request

E principalmente:
Git Flow

trunk-based development

Conventional Commits

Pull Requests

Code Review

resolução de conflitos

🖥️ Terminal / Linux
Aprenda:

bash

filesystem

permissions

processes

environment variables

pipes

grep

sed

awk

curl

ssh

package managers

shell scripting básico

Não precisa virar administrador Linux.

Mas um Sênior Front-end não deveria ter medo do terminal.

📦 NPM / Package Management
Dominar:

npm

pnpm

package.json

package-lock

semver

dependencies

devDependencies

peerDependencies

scripts

workspaces

monorepos

Depois:

Turborepo

Nx

🟣 FASE 2 — TypeScript
Agora entra TypeScript de verdade.

O TypeScript não é simplesmente "JavaScript com tipos"; ele funciona como um sistema de verificação estática que ajuda a controlar a complexidade de aplicações maiores. 
T
TypeScript

Básico
primitive types

arrays

tuples

objects

interfaces

type aliases

unions

intersections

enums

functions

optional properties

Intermediário
generics

narrowing

type guards

keyof

typeof

indexed access

utility types

discriminated unions

Avançado
primitive types

arrays

tuples

objects

interfaces

type aliases

unions

intersections

enums

functions

optional properties

conditional types

mapped types

template literal types

infer

generic constraints

declaration merging

module augmentation

type-level programming

A documentação oficial atualmente coloca generics, keyof, conditional types, mapped types e template literal types entre os recursos importantes do sistema de tipos. 
T
TypeScript

🟠 FASE 3 — React
Agora sim.

React fundamental
Dominar:

JSX

components

props

state

events

conditional rendering

lists

keys

forms

composition

Hooks
useState

useEffect

useContext

useReducer

useMemo

useCallback

useRef

custom hooks

Mas não quero que você apenas memorize hooks.

Quero que entenda:

Por que esse componente precisa de estado?

Por que esse estado deveria existir nesse nível da árvore?

Por que esse efeito existe?

Posso eliminar esse useEffect?

Isso é muito mais importante.

🧠 React avançado
rendering

reconciliation

component lifecycle

state architecture

controlled/uncontrolled

composition

Context

Server Components

Suspense

streaming

transitions

concurrent rendering

error boundaries

performance

A versão atual da documentação oficial do React é a 19.3, portanto seu estudo deve acompanhar a documentação oficial e não cursos antigos que tratam React 16/17 como referência principal. 
R
React

🟦 FASE 4 — Next.js
Seu framework principal.

Aprender
Por que esse efeito existe?

Posso eliminar esse useEffect?

Isso é muito mais importante.

🧠 React avançado
rendering

reconciliation

component lifecycle

state architecture

controlled/uncontrolled

composition

Context

Server Components

Suspense

streaming

transitions

concurrent rendering

error boundaries

performance

App Router

layouts

pages

nested routes

dynamic routes

route groups

loading

error

not-found

metadata

Server Components

Client Components

Server Functions

data fetching

caching

revalidation

streaming

middleware/proxy conforme a versão atual

authentication

authorization

API/BFF

image optimization

fonts

deployment

A documentação atual do Next.js trata o App Router como a abordagem moderna e inclui Server Components, Suspense e Server Functions no modelo atual. 
N
Next.js
+1

🧪 FASE 5 — Testes
Isso será obrigatório para chegar no Sênior.

Testes unitários
Aprender:

Vitest

Jest (entender o ecossistema)

mocking

spies

fixtures

test doubles

Component Testing
React Testing Library

E2E
Playwright

Você precisa saber testar:

função
 ↓
componente
 ↓
feature
 ↓
fluxo
 ↓
aplicação

Não quero que você vire um "colecionador de testes".

Quero que saiba:

O que realmente precisa ser testado?

📚 FASE 6 — Design System
Aqui começa uma transição importante de Junior para Pleno.

Aprenda:

Design Tokens

colors

spacing

typography

components

variants

states

accessibility

component composition

Storybook

documentation

versioning

Componentes:

Button
Input
Select
Checkbox
Radio
Modal
Dialog
Toast
Tooltip
Dropdown
Tabs
Table
Pagination
Card
Navigation

Depois:

Design System
↓
Component Library
↓
Storybook
↓
npm package

♿ FASE 7 — Acessibilidade
Isso será cada vez mais importante.

Dominar:

WCAG 2.2

semantic HTML

keyboard navigation

focus management

ARIA

screen readers

color contrast

forms

accessible dialogs

accessible navigation

WCAG 2.2 é a referência atual do W3C para acessibilidade de conteúdo Web. 
W
W3C

Você deve conseguir construir:

uma aplicação que alguém consiga usar sem mouse.

Isso diferencia muito um profissional superficial de um profissional realmente completo.

⚡ FASE 8 — Performance
Essa será uma das suas especializações.

Aprender:

uma aplicação que alguém consiga usar sem mouse.

Critical Rendering Path

browser rendering

reflow

repaint

compositing

JavaScript performance

bundle size

code splitting

lazy loading

tree shaking

caching

CDN

image optimization

font optimization

preloading

prefetching

compression

HTTP/2

HTTP/3

streaming

Core Web Vitals
Dominar:

LCP

INP

CLS

Atualmente, as metas recomendadas pelo Google são:

LCP ≤ 2,5s

INP ≤ 200ms

CLS ≤ 0,1

medidos no percentil 75. 
W
web.dev

Você deve aprender:

Lighthouse
Chrome DevTools
Performance Panel
Network Panel
Coverage
Memory
Profiler
Web Vitals
CrUX

🔐 FASE 9 — Segurança Front-end
Não precisa ser especialista em segurança inicialmente.

Mas precisa entender:

XSS

CSRF

CORS

CSP

cookies

SameSite

HttpOnly

Secure

authentication

authorization

JWT

OAuth

OpenID Connect

session-based auth

token storage

dependency vulnerabilities

supply-chain attacks

E principalmente:

Nunca confie no cliente.

🔌 FASE 10 — APIs
Você precisa saber conversar com backend.

REST
GET

POST

PUT

PATCH

DELETE

status codes

headers

pagination

filtering

sorting

caching

errors

Depois
GraphQL

WebSockets

SSE

RPC

tRPC

E aprender:

Frontend
   ↓
BFF
   ↓
API
   ↓
Database

🗄️ FASE 11 — Backend suficiente para um Front-end Sênior
Você não precisa virar backend developer.

Mas precisa entender:

Node.js
runtime

event loop

HTTP

streams

filesystem

process

environment

package management

Banco
Aprenda pelo menos:

PostgreSQL

SELECT

INSERT

UPDATE

DELETE

JOIN

indexes

constraints

transactions

normalization

relations

Depois:

Redis

caching

queues

☁️ FASE 12 — Cloud / DevOps
Você não precisa ser DevOps.

Mas um Sênior moderno deve entender o caminho:

Código
 ↓
Git
 ↓
Pull Request
 ↓
CI
 ↓
Testes
 ↓
Build
 ↓
Deploy
 ↓
Cloud
 ↓
Monitoring

Aprender:

GitHub Actions

Docker

CI/CD

environment variables

deployment

CDN

DNS

HTTPS

domains

logs

monitoring

Depois:

AWS

Vercel

Cloudflare

containers

basic Kubernetes concepts

Não tente aprender AWS inteira.

Aprenda:

S3

CloudFront

Lambda

IAM

Route 53

basic ECS/EKS concepts

O suficiente para conversar com infraestrutura.

🧱 FASE 13 — Arquitetura Front-end
Essa é uma das maiores diferenças entre Pleno e Sênior.

Aprenda:

separation of concerns

modularity

cohesion

coupling

SOLID

dependency inversion

design patterns

composition

abstraction

domain boundaries

Arquiteturas:

Feature-Sliced Design

layered architecture

modular architecture

hexagonal concepts

micro-frontends

monorepo

package-based architecture

Mas cuidado:

Arquitetura não é quantidade de pastas.

Você precisa aprender a decidir:

"Qual é a menor arquitetura que resolve esse problema sem criar complexidade desnecessária?"

🧩 FASE 14 — State Management
Não saia aprendendo Redux só porque alguém falou.

Aprenda primeiro:

Local State
↓
Lifted State
↓
Context
↓
Server State
↓
Global Client State

Depois:

Server State
TanStack Query

Client State
Escolha uma ferramenta principal:

Zustand

E tenha conhecimento de:

Redux Toolkit

Você não precisa dominar cinco bibliotecas de estado.

🏗️ FASE 15 — Monorepos
Quando chegar no Pleno/Sênior:

Aprenda:

pnpm workspaces

Turborepo

Nx

shared packages

design system packages

shared configs

dependency graph

CI em monorepos

Imagine:

/company
   /apps
      /web
      /admin
      /docs

   /packages
      /ui
      /config
      /eslint
      /typescript
      /utils

Você deverá entender por que uma empresa faria isso.

🤖 FASE 16 — IA
Aqui eu quero fazer uma distinção importante.

IA será ferramenta.

Não será sua fundação.

Você precisa aprender:

GitHub Copilot / ferramentas equivalentes

AI coding agents

prompt/context engineering

revisão de código gerado

debugging assistido

testes gerados

documentação

refactoring assistido

MCP e ferramentas de agentes conforme amadurecerem

uso de LLMs dentro do workflow

O próprio ecossistema atual do Next.js já possui documentação específica para AI Coding Agents, inclusive orientando agentes a utilizarem documentação atualizada. 
N
Next.js

A regra será:

IA escreve código. Você responde pelo código.

Se a IA produzir:

useEffect(() => {
   ...
}, []);

e você não sabe explicar exatamente por que aquele efeito existe, você não dominou o código.

🇺🇸 FASE 17 — Inglês
Isso não deve ficar para 2029.

Comece agora.

Você já está fazendo curso, então transforme inglês em uma segunda carreira paralela.

2026
Meta:

A2 → B1

Aprender:

leitura técnica

listening

vocabulário profissional

documentação

2027
Meta:

B1 → B2

Adicionar:

reuniões

entrevistas

conversação

explicação técnica

2028
Meta:

B2

Conseguir:

explicar arquitetura em inglês.

2029+
Meta:

B2/C1 profissional

Conseguir:

entrevista

daily

technical discussion

code review

apresentação

negociação

🌎 FASE 18 — Mercado internacional
Não espere estar "perfeito".

A preparação pode começar enquanto você evolui.

Você vai precisar de:

GitHub profissional

LinkedIn em inglês

CV em inglês

portfolio em inglês

projetos públicos

README em inglês

comunicação escrita

entrevistas técnicas

system design

behavioral interview

E depois:

contratação internacional

contractor

remote

empresas estrangeiras

📅 SEU PLANO ATÉ 2030
Agora chegamos à parte mais importante.

2026 — FUNDAMENTOS
Setembro → Dezembro
Foco:

HTML
CSS
JavaScript
Git
Terminal
Web

Projeto 1
Website profissional sem framework

Obrigatório:

HTML semântico

CSS avançado

responsivo

acessível

SEO

performance

Projeto 2
Dashboard Vanilla JS

API

Fetch

async/await

loading

error

pagination

filters

localStorage

Projeto 3
E-commerce Vanilla JS

produtos

carrinho

filtros

busca

checkout fictício

responsividade

2027 — JUNIOR FORTE
Janeiro → Junho
JavaScript avançado
TypeScript
React
Testing

Projeto:

SaaS Dashboard
React

TypeScript

forms

API

authentication

authorization

tests

responsive

accessibility

Julho → Dezembro
Adicionar:

Next.js
TanStack Query
Zustand
Storybook
Playwright
CI/CD

Projeto:

SaaS corporativo
Imagine:

Login
Dashboard
Users
Roles
Permissions
Reports
Tables
Filters
Search
Notifications
Settings

Esse projeto precisa parecer algo que uma empresa realmente poderia utilizar.

2028 — PLENO
Agora muda a pergunta.

No começo você pergunta:

"Como faço?"

Em 2028 você deve começar a perguntar:

"Qual é a melhor forma de fazer?"

Aprender:

architecture

design patterns

performance

security

advanced React

advanced Next.js

testing strategy

CI/CD

Docker

observability

PostgreSQL

API design

Projeto 2028
Plataforma SaaS completa
Next.js
TypeScript
React
PostgreSQL
Redis
Docker
CI/CD
Playwright
Vitest
Storybook
Cloud
Monitoring

Com:

authentication

RBAC

billing fictício

dashboard

audit logs

search

pagination

optimistic updates

caching

error handling

observability

Esse projeto deve ser tratado como produto, não tutorial.

2029 — SÊNIOR
Agora seu foco deixa de ser somente código.

Você precisa aprender:

Engenharia
architecture

scalability

reliability

performance

security

observability

Pessoas
code review

mentoring

technical communication

documentation

technical leadership

estimation

decision making

Produto
requirements

metrics

UX

conversion

business constraints

trade-offs

Um Sênior não recebe apenas:

"Faça um botão."

Ele recebe:

"Precisamos melhorar a experiência de checkout."

E consegue participar da solução.

2030 — SÊNIOR FORTE / ESPECIALISTA
Aqui você escolhe sua especialização principal.

Eu vejo algumas opções muito fortes:

Especialista em Front-end Architecture
React
Next
TypeScript
Architecture
Design Systems
Monorepos
Micro-frontends
Scalability

Especialista em Performance
Browser
Rendering
Networking
Core Web Vitals
JavaScript
React
Caching
CDN
Profiling

Especialista em Design Systems
React
TypeScript
Accessibility
Storybook
Design Tokens
UI Architecture
Component Libraries

Staff/Principal Front-end Engineer
Aqui você deixa de pensar:

"Como faço essa feature?"

e passa a pensar:

"Como fazemos a organização inteira entregar melhor?"

🧠 SUA MATRIZ DE TECNOLOGIAS
Agora vou separar por prioridade.

🔴 DOMINAR
Estas são suas tecnologias fundamentais:

HTML

CSS

JavaScript

TypeScript

Git

GitHub

React

Next.js

REST

HTTP

Browser DevTools

Testing

Accessibility

Performance

🟠 MUITO BOM
Node.js

npm/pnpm

Vite

Vitest

React Testing Library

Playwright

TanStack Query

Zustand

Storybook

Tailwind CSS

Docker

GitHub Actions

PostgreSQL

Linux

CI/CD

Web APIs

O Vite também aparece com uso bastante relevante no State of JS 2025, enquanto Vitest e Storybook aparecem entre as ferramentas de teste/componentes mais utilizadas pelos respondentes. 
E
Estado do JavaScript 2025

🟡 CONHECER BEM
Redux Toolkit

GraphQL

WebSockets

Redis

AWS

Cloudflare

Vercel

Turborepo

Nx

Sentry

OpenTelemetry

OAuth

Docker

Kubernetes

Astro

🟢 CONHECER
Não precisa dominar:

Vue

Angular

Svelte

Solid

Nuxt

Remix

React Native

Flutter

Você aprende o suficiente para compreender o ecossistema.

❌ NÃO FAÇA ISSO
Não tente fazer:

React
+
Vue
+
Angular
+
Svelte
+
Solid
+
Flutter
+
React Native
+
Rust
+
Go
+
Python

ao mesmo tempo.

Isso parece produtividade.

Na prática pode virar dispersão.

🏆 O QUE VAI TE TORNAR DIFERENTE
Se você realmente quer ser absurdamente bom, existe uma segunda camada.

Camada 1 — Código
Você sabe programar.

Camada 2 — Engenharia
Você sabe construir software sustentável.

Camada 3 — Web
Você entende navegador e plataforma.

Camada 4 — Produto
Você entende por que aquilo está sendo construído.

Camada 5 — Negócio
Você entende impacto.

Camada 6 — Comunicação
Você consegue explicar decisões.

Camada 7 — Liderança
Você faz outras pessoas produzirem melhor.

📊 Seu sistema de evolução
Eu sugiro que seu site tenha um sistema parecido com RPG.

Cada tecnologia terá:

0 — Nunca vi
1 — Conheço
2 — Consigo seguir tutorial
3 — Consigo construir sozinho
4 — Consigo resolver problemas
5 — Consigo ensinar
6 — Consigo tomar decisões arquiteturais

Por exemplo:

React
React
████████████████████ 5/6

CSS
CSS
██████████████████░░ 5/6

AWS
AWS
██████░░░░░░░░░░░░░░ 2/6

Isso é muito melhor do que:

"Curso de React concluído."

🏗️ O SITE QUE VOCÊ PODE CRIAR
E aqui eu acho que você teve uma excelente ideia.

Faça seu próprio Career OS.

Eu faria:

                    FRONT-END CAREER OS
                            │
             ┌──────────────┼──────────────┐
             │              │              │
          ROADMAP        SKILLS         PROJECTS
             │              │              │
          2030          React 4/6       SaaS
          2027          CSS 5/6         E-commerce
          2028          TS 3/6          Dashboard
          2029          Git 4/6
          2030          Testing 2/6

📈 Dashboard
Mostrar:

Carreira

JR → PLENO → SÊNIOR

██████████████░░░░░░ 70%

2026
████████████████

2027
██████████░░░░░░

2028
████░░░░░░░░░░

2029
░░░░░░░░░░░░░░

2030
░░░░░░░░░░░░░░

🎯 Metas
Cada semestre:

H2 2026
 HTML

 CSS

 JS

 Git

 3 projetos

 Inglês A2/B1

H1 2027
React

TypeScript

forms

API

authentication

authorization

tests

responsive

accessibility

Julho → Dezembro
Next.js
TanStack Query
Zustand
Storybook
Playwright
CI/CD

Projeto:

Login
Dashboard
Users
Roles
Permissions
Reports
Tables
Filters
Search
Notifications
Settings

2028 — PLENO
Agora muda a pergunta.

No começo você pergunta:

"Como faço?"

Em 2028 você deve começar a perguntar:

"Qual é a melhor forma de fazer?"

Aprender:

architecture

design patterns

performance

security

advanced React

advanced Next.js

testing strategy

CI/CD

Docker

observability

PostgreSQL

API design

Projeto 2028
Next.js
TypeScript
React
PostgreSQL
Redis
Docker
CI/CD
Playwright
Vitest
Storybook
Cloud
Monitoring

Com:

authentication

RBAC

billing fictício

dashboard

audit logs

search

pagination

optimistic updates

caching

error handling

observability

Esse projeto deve ser tratado como produto, não tutorial.

2029 — SÊNIOR
Agora seu foco deixa de ser somente código.

Você precisa aprender:

Engenharia
architecture

scalability

reliability

performance

security

observability

Pessoas
code review

mentoring

technical communication

documentation

technical leadership

estimation

decision making

Produto
requirements

metrics

UX

conversion

business constraints

trade-offs

Um Sênior não recebe apenas:

"Faça um botão."

Ele recebe:

"Precisamos melhorar a experiência de checkout."

E consegue participar da solução.

2030 — SÊNIOR FORTE / ESPECIALISTA
Aqui você escolhe sua especialização principal.

Especialista em Front-end Architecture
React
Next
TypeScript
Architecture
Design Systems
Monorepos
Micro-frontends
Scalability

Especialista em Performance
Browser
Rendering
Networking
Core Web Vitals
JavaScript
React
Caching
CDN
Profiling

Especialista em Design Systems
React
TypeScript
Accessibility
Storybook
Design Tokens
UI Architecture
Component Libraries

Staff/Principal Front-end Engineer
Aqui você deixa de pensar:

"Como faço essa feature?"

e passa a pensar:

"Como fazemos a organização inteira entregar melhor?"

🧠 SUA MATRIZ DE TECNOLOGIAS
Agora vou separar por prioridade.

🔴 DOMINAR
Estas são suas tecnologias fundamentais:

HTML

CSS

JavaScript

TypeScript

Git

GitHub

React

Next.js

REST

HTTP

Browser DevTools

Testing

Accessibility

Performance

Node.js

npm/pnpm

Vite

Vitest

React Testing Library

Playwright

TanStack Query

Zustand

Storybook

Tailwind CSS

Docker

GitHub Actions

PostgreSQL

Linux

CI/CD

Web APIs

O Vite também aparece com uso bastante relevante no State of JS 2025, enquanto Vitest e Storybook aparecem entre as ferramentas de teste/componentes mais utilizadas pelos respondentes.

🟡 CONHECER BEM
Redux Toolkit

GraphQL

WebSockets

Redis

AWS

Cloudflare

Vercel

Turborepo

Nx

Sentry

OpenTelemetry

OAuth

Docker

Kubernetes

Astro

🟢 CONHECER
Não precisa dominar:

 TypeScript

 React

 Testing

 projeto SaaS

H2 2027
 Next.js

 Storybook

 Playwright

 CI/CD

etc.

📚 Registro de conhecimento
Você pode ter:

Knowledge
├── JavaScript
│   ├── Closures
│   ├── Event Loop
│   ├── Promises
│   └── Modules
│
├── React
│   ├── Rendering
│   ├── Hooks
│   ├── Server Components
│   └── Suspense
│
└── Architecture
    ├── SOLID
    ├── Patterns
    └── Monorepo

🧪 Laboratório
Crie uma área:

LAB

[ ] Implementar Promise do zero
[ ] Implementar debounce
[ ] Implementar throttle
[ ] Implementar router simples
[ ] Implementar state manager
[ ] Implementar virtualized list
[ ] Implementar modal acessível
[ ] Implementar cache
[ ] Implementar infinite scroll
[ ] Implementar drag and drop

Isso é excelente para conhecimento profundo.

💼 Portfólio
Tenha poucos projetos.

Mas projetos bons.

Eu prefiro:

5 projetos excelentes

a:

37 CRUDs de tutorial

🥇 Seus 5 projetos principais
Projeto 1
Portfolio profissional

HTML/CSS/JS.

Projeto 2
Dashboard

React + TypeScript.

Projeto 3
SaaS

Next.js + PostgreSQL.

Projeto 4
Design System

React + TypeScript + Storybook.

Projeto 5
Projeto de nível Sênior

Uma aplicação realmente complexa.

Com:

Architecture
Performance
Security
Testing
Accessibility
CI/CD
Monitoring
Documentation

📖 COMO ESTUDAR
Como você disse que tem bastante tempo, eu faria algo próximo de:

Segunda a sexta
2h — teoria
Documentação/livro/curso.

3h — código
Implementação.

1h — projeto
Construção real.

1h — inglês
Total:

7h/dia

Se tiver mais tempo, não necessariamente aumente para 12h de programação.

Use o restante para:

exercício

leitura

descanso

inglês

projetos

revisão

Consistência por anos é mais importante que uma explosão de estudo durante três meses.

🔄 REGRA DOS 6 MESES
Você mencionou uma coisa que considero excelente:

"A cada 6 meses vou pesquisar e ajustar."

Mantenha isso.

Mas não mude o roadmap inteiro.

A cada:

Janeiro
Julho

faça uma revisão.

Pergunte:

Mercado
Quais tecnologias estão sendo requisitadas?

React continua relevante?

TypeScript?

Next?

Qual arquitetura está aparecendo?

O que as vagas internacionais estão pedindo?

Tecnologia
Alguma ferramenta substituiu outra?

Algum padrão mudou?

Alguma API Web amadureceu?

Carreira
Estou crescendo profissionalmente?

Estou recebendo tarefas mais complexas?

Estou fazendo code review?

Estou tomando decisões?

Inglês
Consigo conversar?

Consigo explicar código?

Consigo participar de reunião?

Portfólio
Tenho algo que demonstra meu nível atual?

⚠️ MAS EXISTE UMA REGRA
Não mude de tecnologia porque apareceu um tweet:

"FRAMEWORK X VAI MATAR REACT."

Não.

Você vai observar:

Adoção
+
Mercado
+
Maturidade
+
Comunidade
+
Documentação
+
Empregabilidade
+
Problema que resolve

A Web Platform Baseline é um bom exemplo de mecanismo para acompanhar evolução da plataforma sem simplesmente perseguir toda novidade: ela classifica recursos conforme sua disponibilidade nos principais navegadores. 
W
web.dev
+1

💰 META FINANCEIRA
Eu colocaria assim:

2026
Objetivo: consolidar experiência real.

Não perseguir salário ainda.

2027
Objetivo: Junior forte / início de Pleno.

Começar a buscar remuneração compatível com aumento de responsabilidade.

2028
Objetivo: Pleno.

Aqui começa uma mudança importante:

Você não vende "horas programando".

Você vende:

capacidade de resolver problemas.

2029
Objetivo: Sênior.

Sua referência:

R$10k+ como meta pessoal, sabendo que o mercado pode variar.

2030+
Possibilidades:

Sênior
↓
Sênior especialista
↓
Tech Lead
↓
Staff Engineer
↓
Principal Engineer

ou:

Sênior BR
↓
Empresa internacional
↓
Contrato internacional
↓
Especialista

Seu objetivo de R$15k+ passa a ser uma possibilidade de trajetória, não necessariamente o teto.

🌎 E O INGLÊS PODE MUDAR ESSA EQUAÇÃO
Eu colocaria o inglês no mesmo nível de prioridade de TypeScript.

Porque:

Front-end excelente
+
Inglês excelente
+
Experiência real
+
Comunicação

abre um mercado muito maior.

O objetivo não deve ser:

"aprender inglês."

Deve ser:

"conseguir trabalhar como engenheiro Front-end em inglês."

Essa é uma meta mensurável.

🧠 O PERFIL QUE QUERO QUE VOCÊ TENHA EM 2030
Se seguirmos esse plano corretamente, quero que você consiga receber uma aplicação assim:

Next.js
React
TypeScript
PostgreSQL
REST APIs
Docker
CI/CD
AWS
Design System

e não pensar:

"Meu Deus, não conheço isso."

Mas:

"Conheço a maior parte. O que não conheço, consigo investigar rapidamente."

Essa é uma das características mais importantes de um profissional experiente.

🏁 SUA STACK PRINCIPAL
Se eu tivesse que colocar uma única lista oficial no seu site hoje, seria esta:

FUNDAMENTOS
HTML

CSS

JavaScript

Web APIs

HTTP

Browser

Accessibility

SEO

LINGUAGEM
TypeScript

FRONT-END
React

Next.js

CSS/UI
Tailwind CSS

CSS Modules

Design Tokens

Storybook

STATE
0 — Nunca vi
1 — Conheço
2 — Consigo seguir tutorial
3 — Consigo construir sozinho
4 — Consigo resolver problemas
5 — Consigo ensinar
6 — Consigo tomar decisões arquiteturais

React
React
████████████████████ 5/6

CSS
CSS
██████████████████░░ 5/6

AWS
AWS
██████░░░░░░░░░░░░░░ 2/6

Isso é muito melhor do que:

"Curso de React concluído."

🏗️ O SITE QUE VOCÊ PODE CRIAR
Faça seu próprio Career OS.

Eu faria:

                    FRONT-END CAREER OS
                            │
             ┌──────────────┼──────────────┐
             │              │              │
          ROADMAP        SKILLS         PROJECTS
             │              │              │
          2030          React 4/6       SaaS
          2027          CSS 5/6         E-commerce
          2028          TS 3/6          Dashboard
          2029          Git 4/6
          2030          Testing 2/6

📈 Dashboard
Carreira

JR → PLENO → SÊNIOR

██████████████░░░░░░ 70%

2026
████████████████

2027
██████████░░░░░░

2028
████░░░░░░░░░░

2029
░░░░░░░░░░░░░░

2030
░░░░░░░░░░░░░░

🎯 Metas
Cada semestre:

H2 2026
 HTML

 CSS

 JS

 Git

 3 projetos

 Inglês A2/B1

H1 2027
 TypeScript

 React

 Testing

 projeto SaaS

H2 2027
 Next.js

 Storybook

 Playwright

 CI/CD

Knowledge
├── JavaScript
│   ├── Closures
│   ├── Event Loop
│   ├── Promises
│   └── Modules
│
├── React
│   ├── Rendering
│   ├── Hooks
│   ├── Server Components
│   └── Suspense
│
└── Architecture
    ├── SOLID
    ├── Patterns
    └── Monorepo

🧪 Laboratório
LAB

[ ] Implementar Promise do zero
[ ] Implementar debounce
[ ] Implementar throttle
[ ] Implementar router simples
[ ] Implementar state manager
[ ] Implementar virtualized list
[ ] Implementar modal acessível
[ ] Implementar cache
[ ] Implementar infinite scroll
[ ] Implementar drag and drop

Isso é excelente para conhecimento profundo.

💼 Portfólio
Tenha poucos projetos.

Mas projetos bons.

Eu prefiro:

5 projetos excelentes

a:

37 CRUDs de tutorial

🥇 Seus 5 projetos principais
Projeto 1
Portfolio profissional

HTML/CSS/JS.

Projeto 2
Dashboard

React + TypeScript.

Projeto 3
SaaS

Next.js + PostgreSQL.

Projeto 4
Design System

React + TypeScript + Storybook.

Projeto 5
Projeto de nível Sênior

Uma aplicação realmente complexa.

Com:

Architecture
Performance
Security
Testing
Accessibility
CI/CD
Monitoring
Documentation

📖 COMO ESTUDAR
Como você disse que tem bastante tempo, eu faria algo próximo de:

Segunda a sexta
2h — teoria
Documentação/livro/curso.

3h — código
Implementação.

1h — projeto
Construção real.

1h — inglês
Total:

7h/dia

Se tiver mais tempo, não necessariamente aumente para 12h de programação.

Use o restante para:

exercício

leitura

descanso

inglês

projetos

revisão

Consistência por anos é mais importante que uma explosão de estudo durante três meses.

🔄 REGRA DOS 6 MESES
Você mencionou uma coisa que considero excelente:

"A cada 6 meses vou pesquisar e ajustar."

Mantenha isso.

A cada:

Janeiro
Julho

faça uma revisão.

Mercado
Quais tecnologias estão sendo requisitadas?

React continua relevante?

TypeScript?

Next?

Qual arquitetura está aparecendo?

O que as vagas internacionais estão pedindo?

Tecnologia
⚠️ MAS EXISTE UMA REGRA
Não mude de tecnologia porque apareceu um tweet:

"FRAMEWORK X VAI MATAR REACT."

Não.

Você vai observar:

Adoção
+
Mercado
+
Maturidade
+
Comunidade
+
Documentação
+
Empregabilidade
+
Problema que resolve

A Web Platform Baseline é um bom exemplo de mecanismo para acompanhar evolução da plataforma sem simplesmente perseguir toda novidade: ela classifica recursos conforme sua disponibilidade nos principais navegadores.

💰 META FINANCEIRA
React State

Context

Zustand

TanStack Query

Redux Toolkit — conhecimento

FORMS
React Hook Form

Zod

TESTES
Vitest

React Testing Library

Playwright

BUILD
Vite

Next.js build

npm

pnpm

VERSIONAMENTO
Git

GitHub

BACKEND COMPLEMENTAR
Node.js

REST

GraphQL

PostgreSQL

Redis

DEVOPS
Docker

GitHub Actions

CI/CD

Vercel

AWS

Cloudflare

ARQUITETURA
SOLID

Design Patterns

Modular Architecture

Feature-based Architecture

Monorepo

Micro-frontends — conhecimento

PERFORMANCE
Lighthouse

Chrome DevTools

Core Web Vitals

Web Vitals

Profiling

Caching

CDN

SEGURANÇA
XSS

CSRF

CORS

CSP

OAuth

OIDC

Cookies

Sessions

JWT

ENGENHARIA
Clean Code

Code Review

CI/CD

Observability

Logging

Monitoring

Documentation

Agile

Scrum/Kanban

Product thinking

IA
AI Coding Assistants

AI Agents

LLM workflows

MCP

AI-assisted testing

AI-assisted debugging

CARREIRA
Inglês

LinkedIn

GitHub

Portfolio

CV

Technical Interview

System Design

Behavioral Interview

Comunicação

Mentoring

⭐ E TEM UMA COISA AINDA MAIS IMPORTANTE
Não quero que você transforme isso em uma lista infinita de:

☑ React
☑ TypeScript
☑ Next
☑ Docker

e ache que está evoluindo.

Cada tecnologia deve ter evidência.

Por exemplo:

TypeScript — nível 4
Evidência:

"Construí uma aplicação de 30 mil linhas utilizando generics, discriminated unions, Zod, tipos derivados de API e strict mode."

React — nível 5
Evidência:

"Consigo diagnosticar renders desnecessários, estruturar estado, trabalhar com Server Components, Suspense e otimizar componentes."

Performance — nível 4
Evidência:

"Consegui reduzir LCP de 4,1s para 1,9s e identifiquei o gargalo através do DevTools/CrUX."

Isso é carreira.

Não certificado.

📌 E EU USARIA ESTAS FONTES COMO "BÚSSOLA"
Para manter seu roadmap vivo até 2030, não dependa de um único roadmap de terceiros.

MDN Web Docs — fundamentos da Web, JavaScript e APIs.

React Documentation — React atual. A documentação atualmente lista React 19.3 como versão mais recente. 
R
React

Next.js Documentation — Next.js/App Router. 
N
Next.js

TypeScript Handbook — TypeScript. 
T
TypeScript

web.dev — performance e evolução da plataforma Web.

W3C WCAG 2.2 — acessibilidade. 
W
W3C

State of JS — tendências/ecossistema JavaScript. 
E
Estado do JavaScript 2025

Stack Overflow Developer Survey — dados de tecnologia, trabalho e remuneração. 
S
Stack Overflow Developer Survey
+1

Frontend Roadmap / Roadmap.sh — referência complementar de tópicos e projetos. 
R
roadmap.sh

🔥 Finalmente: seu primeiro objetivo
Não pense em 2030 amanhã.

Seu primeiro checkpoint é:

🎯 27 de março de 2027
Seis meses.

Até lá, eu gostaria que seu perfil estivesse aproximadamente assim:

Essa é uma das características mais importantes de um profissional experiente.

FUNDAMENTOS
FRONT-END 2027 H1

HTML                ██████░░  3/6
CSS                 ██████░░  3/6
JavaScript          █████░░░  3/6
Git                 █████░░░  3/6
Web Platform        ████░░░░  2/6
TypeScript          ████░░░░  2/6
React               ██░░░░░░  1/6
Next.js             ░░░░░░░░  0/6
Testing             ██░░░░░░  1/6
English              ███░░░░░  1-2/6

E principalmente:

3–5 projetos reais publicados.

Não precisa estar perfeito.

Precisa estar feito.

E uma última coisa
Você falou:

"quero ter sucesso na minha vida"

Então eu não faria deste projeto apenas um roadmap de tecnologia.

Eu transformaria sua evolução em um sistema pessoal de carreira, com:

                 SUA CARREIRA
                      │
       ┌──────────────┼──────────────┐
       ↓              ↓              ↓
   TECNOLOGIA      INGLÊS         CARREIRA
       │              │              │
       ↓              ↓              ↓
   Projetos       Conversação     Trabalho
       │              │              │
       ↓              ↓              ↓
   Portfólio      Entrevistas      Salário
       │              │              │
       └──────────────┼──────────────┘
                      ↓
                 SÊNIOR / ESPECIALISTA
                      ↓
                MERCADO GLOBAL

E não vou considerar este roadmap "congelado". A base deve permanecer estável, mas React, Next, ferramentas de build, IA, padrões de arquitetura e práticas corporativas vão mudar. Seu ritual semestral deve atualizar a camada de ferramentas, enquanto HTML, CSS, JavaScript, Web Platform, engenharia, acessibilidade, performance e capacidade de resolver problemas continuam sendo o núcleo. A própria evolução do Baseline mostra por que acompanhar a plataforma Web é melhor do que simplesmente perseguir modismos. 