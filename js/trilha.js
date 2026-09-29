function g(nome, pares) {
  return {
    nome: nome,
    topicos: pares.map(function (par) {
      return { nome: par[0], feito: par[1] };
    }),
  };
}

const trilha = [
  {
    fase: "Fase 0",
    titulo: "Fundamentos de TI e Redes",
    periodo: "Nível 0 · Inicial",
    modulos: [
      {
        nome: "Arquitetura & Redes",
        grupos: [
          g("Redes & Protocolos", [
            ["Modelo OSI e TCP/IP", false],
            ["Endereçamento IPv4 / IPv6 e Sub-redes", false],
            ["Protocolos de Aplicação (HTTP/S, DNS, DHCP, FTP, SSH)", false],
            ["Roteamento e Comutação (Switches e Roteadores)", false],
            ["Portas lógicas e Serviços padrão", false],
            ["Topologias e Tipos de Rede (LAN, WAN, VPC)", false],
          ]),
          g("Sistemas Operacionais", [
            ["Estrutura de Arquivos Linux ( /etc, /var, /log )", false],
            ["Gerenciamento de Usuários e Permissões (Linux/Unix)", false],
            ["Windows Server & Active Directory (AD)", false],
            ["Comandos de Diagnóstico (ping, traceroute, netstat, nmap)", false],
            ["Logs de Sistema (Syslog, Event Viewer)", false],
          ]),
        ],
      },
      {
        nome: "Governança & Frameworks",
        grupos: [
          g("Padrões de Mercado", [
            ["ISO/IEC 27001 e 27002 (SGSI)", false],
            ["NIST Cybersecurity Framework (CSF)", false],
            ["COBIT (Governança de TI)", false],
            ["ITIL (Gestão de Serviços)", false],
            ["CIS Controls", false],
          ]),
          g("Regulamentação & Compliance", [
            ["LGPD / GDPR (Privacidade e Proteção de Dados)", false],
            ["SOX (Seção 404 - Controles Internos de TI)", false],
            ["PCI-DSS (Segurança de Cartões de Crédito)", false],
            ["Bacen / CVM (Regulamentações Setoriais)", false],
          ]),
        ],
      },
    ],
  },
  {
    fase: "Fase 1",
    titulo: "Controles Internos & Auditoria de TI (ITGC)",
    periodo: "Nível 1 · Execução de Controles",
    modulos: [
      {
        nome: "ITGC (General Controls)",
        grupos: [
          g("Acessos & Identidades (IAM)", [
            ["Gestão de Identidade e Acesso (IAM)", false],
            ["Gestão de Acessos Privilegiados (PAM)", false],
            ["Segregação de Funções (SoD - Segregation of Duties)", false],
            ["Revisão Periódica de Acessos (User Access Review)", false],
            ["Ciclo de Vida do Usuário (Joiner, Mover, Leaver)", false],
            ["Múltiplo Fator de Autenticação (MFA)", false],
          ]),
          g("Mudanças & Operações", [
            ["Gestão de Mudanças (Change Management)", false],
            ["Ambientes de Dev, Homologação e Produção", false],
            ["Testes e Homologação de Código", false],
            ["Gestão de Incidentes e Problemas", false],
            ["Rotinas de Backup e Retenção", false],
            ["Agendamento de Tarefas e Monitoramento", false],
          ]),
        ],
      },
      {
        nome: "Auditoria Continuada & Execução",
        grupos: [
          g("Procedimentos de Auditoria", [
            ["Planejamento e Matriz de Riscos e Controles (RCM)", false],
            ["Testes de Desenho do Controle (TOD)", false],
            ["Testes de Eficácia Operacional (TOE)", false],
            ["Amostragem em Auditoria (Sampling)", false],
            ["Coleta e Preservação de Evidências", false],
            ["Elaboração de Papéis de Trabalho", false],
            ["Redação de Achados e Recomendações", false],
          ]),
        ],
      },
    ],
  },
  {
    fase: "Fase 2",
    titulo: "Segurança da Informação & Cyber Audit",
    periodo: "Nível 2 · Avaliação Técnica",
    modulos: [
      {
        nome: "Segurança Ofensiva & Vulnerabilidades",
        grupos: [
          g("Gestão de Vulnerabilidades", [
            ["Análise de Vulnerabilidades (Vulnerability Assessment)", false],
            ["Entendimento de Pentest (Black, Gray, White box)", false],
            ["OWASP Top 10 (Vulnerabilidades Web)", false],
            ["Gestão e Correção de Patches (Patch Management)", false],
            ["Classificação de Risco CVSS", false],
          ]),
        ],
      },
      {
        nome: "Segurança Defensiva & Infraestrutura",
        grupos: [
          g("Arquitetura de Segurança", [
            ["Firewalls, IDS/IPS e WAF", false],
            ["Criptografia em Trânsito e em Repouso (TLS/AES)", false],
            ["Gestão de Chaves e Certificados (PKI)", false],
            ["Segurança em Redes Sem Fio", false],
            ["Arquitetura Zero Trust", false],
            ["SIEM e Monitoramento de Segurança (SOC)", false],
          ]),
        ],
      },
      {
        nome: "Resiliência Operacional",
        grupos: [
          g("Continuidade de Negócios", [
            ["Plano de Continuidade de Negócios (PCN / BCP)", false],
            ["Plano de Recuperação de Desastres (PRD / DRP)", false],
            ["Análise de Impacto no Negócio (BIA)", false],
            ["Definição de RTO e RPO", false],
            ["Testes de DRP e Simulação de Desastres", false],
            ["Plano de Resposta a Incidentes Cibernéticos", false],
          ]),
        ],
      },
    ],
  },
  {
    fase: "Fase 3",
    titulo: "Auditoria Avançada: Nuvem, Sistemas & Dados",
    periodo: "Nível 3 · Especialização",
    modulos: [
      {
        nome: "Auditoria em Nuvem (Cloud)",
        grupos: [
          g("Ambientes Multi-Cloud (AWS / Azure / GCP)", [
            ["Modelo de Responsabilidade Compartilhada", false],
            ["Auditoria de IAM na Nuvem", false],
            ["Configuração de Armazenamento (S3 Buckets, Blob)", false],
            ["Relatórios SOC (SOC 1, SOC 2 Type II, SOC 3)", false],
            ["Posture Management (CSPM)", false],
          ]),
        ],
      },
      {
        nome: "Sistemas & Dados",
        grupos: [
          g("Controles de Aplicação & ERP", [
            ["Controles Automatizados de Aplicação (ITAC)", false],
            ["Auditoria em ERPs (SAP, TOTVS, Oracle)", false],
            ["Interfaces e Integrações de Dados (APIs)", false],
          ]),
          g("Data Analytics para Auditoria", [
            ["Consultas SQL para Validação de Dados", false],
            ["Extração e Análise de Massa de Dados (CAATTs)", false],
            ["Detecção de Anomalias e Fraudes com Dados", false],
            ["Visualização em Power BI / Tableau para Auditoria", false],
          ]),
        ],
      },
    ],
  }
];
