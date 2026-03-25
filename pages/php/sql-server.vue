<script setup lang="ts">
useSeoMeta({
  title: 'SQL Server Architecture | Sistemas de Larga Escala NTL',
  description: 'Projete entidades, normalização de schema NTL e transactions com ACID total.'
})

const sqlTopics = [
  {
    title: 'Engenharia de Normalização',
    icon: 'lucide:network',
    color: 'emerald',
    content: 'Tabelas NTL seguem estritamente a 3ª Forma Normal (3NF). Campos dependentes transicionam para tabelas-filhas e instigam as Foreign Keys. O objetivo é anular completamente redudância de dados massivos. Uma reestruturação de cargo, por exemplo, não deve necessitar atualizar os mil usuários na tabela users, mas sim atualizar o registro na tabela "tblApoioCargos".'
  },
  {
    title: 'Indexação com B-Trees (Heaps vs Clustered)',
    icon: 'lucide:database-zap',
    color: 'sky',
    content: 'Consultar tabelas sem índices é fatal gerando Table Scans (varredura global custosa). Um Clustered Index reorganiza fisicamente a tabela no disco (apenas um por tabela, comumente ID baseados em numéricos ordenados). Non-clustered Indexes constroem estruturas de mapeamento como mapas laterais (permitindo múltiplos, ótimos em FKs e CPFs buscáveis frequententemente).'
  },
  {
    title: 'Atomicidade e Procedures',
    icon: 'lucide:file-code-2',
    color: 'indigo',
    content: 'O banco não serve só para Storage; ele executa as Stored Procedures e mantem o ecossistema blindado de SQL Injection. O banco NTL deve envolver múltiplas rotinas (ex: Criar fatura, retirar saldo, transferir) num corpo TRANSACTIONAL, ou seja, ou todas gravam na fita ou ROLLBACK anula tudo em caso de erro atômico nas views SQLScope.'
  },
  {
    title: 'Estratégias de Soft-Deletes',
    icon: 'lucide:trash-2',
    color: 'red',
    content: 'No design de bancos corporativos NTL, nunca usamos a cláusula DELETE do corpo de um dado ativo (fatura de vendas, relatórios financeiros). Ao invés disso, trabalhamos com uma FLAG de deleção lógica (ex: isAtivo = 0, isDeleted = 1). Isso preserva integridade relacional, não afeta chaves e salva todo o histórico retroativo se auditado.'
  }
]

const codeExample = `-- Criação Padrão de Tabela Apoio (Domínio)
CREATE TABLE [dbo].[tblApoioEstadosCIVIS] (
    [Id] INT IDENTITY(1,1) NOT NULL,
    [Descricao] NVARCHAR(50) NOT NULL,
    [IsAtivo] BIT DEFAULT 1,
    [DataCriacao] DATETIME DEFAULT GETDATE(),
    
    CONSTRAINT [PK_tblEstadosCivis] PRIMARY KEY CLUSTERED ([Id] ASC)
);

-- Utilização robusta com Transactions na SqlScope (Procedure NTL)
CREATE PROCEDURE [dbo].[usp_RegistrarTransacao_NTL]
    @UsuarioId INT,
    @Montante DECIMAL(18,2)
AS
BEGIN
    SET NOCOUNT ON;
    
    BEGIN TRY
        BEGIN TRANSACTION
        
            -- Ação 1
            INSERT INTO [dbo].[tblTransacoesLote] (UserId, ValorLote, DataMovimentador)
            VALUES (@UsuarioId, @Montante, GETDATE())
            
            -- Ação 2
            UPDATE [dbo].[tblSaldosConsolidados]
            SET SaldoFinal = SaldoFinal - @Montante
            WHERE UsuarioID = @UsuarioId
            
        COMMIT TRANSACTION
    END TRY
    BEGIN CATCH
        -- ACID preservado. O log captura, o dinheiro volta.
        ROLLBACK TRANSACTION;
        THROW;
    END CATCH
END`

</script>

<template>
  <div class="container mx-auto px-4 py-16 max-w-7xl">
    
    <!-- Hero Section -->
    <div class="relative bg-emerald-500/10 border border-emerald-500/20 rounded-[3rem] p-12 overflow-hidden mb-16 text-center">
      <div class="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-emerald-400/20 via-transparent to-transparent pointer-events-none"></div>
      
      <Icon name="vscode-icons:file-type-sql" class="w-24 h-24 mx-auto drop-shadow-2xl mb-6 hover:scale-110 transition-transform duration-500" />
      <h1 class="text-5xl md:text-7xl font-black text-slate-900 dark:text-white tracking-tight mb-6">
        Relacional <span class="text-transparent bg-clip-text bg-gradient-to-r from-emerald-500 to-teal-500">SQL Server</span>
      </h1>
      <p class="text-xl md:text-2xl text-slate-700 dark:text-slate-300 font-light max-w-4xl mx-auto leading-relaxed">
        Bancos de Dados para Alta Volumetria em Soluções NTL. Desconsidere arquivos locais; aprenda a orquestrar schemas poderosos que resistem ao Big Data.
      </p>
    </div>

    <div class="grid lg:grid-cols-[1.5fr_1fr] gap-12">
      <!-- Deep Content -->
      <div class="space-y-8">
        <div v-for="topic in sqlTopics" :key="topic.title" class="bg-white dark:bg-slate-900 border border-slate-200 dark:border-white/5 p-8 rounded-[2rem] shadow-sm hover:shadow-xl transition-all group">
          <div class="flex items-center gap-4 mb-4">
            <div :class="`p-3 rounded-2xl bg-${topic.color}-50 dark:bg-${topic.color}-900/20 text-${topic.color}-500 group-hover:scale-110 transition-transform`">
              <Icon :name="topic.icon" class="w-8 h-8" />
            </div>
            <h3 class="text-2xl font-bold text-slate-900 dark:text-white">{{ topic.title }}</h3>
          </div>
          <p class="text-lg text-slate-600 dark:text-slate-400 leading-relaxed font-light pl-16">
            {{ topic.content }}
          </p>
        </div>
      </div>

      <!-- Code Inspector -->
      <div class="space-y-8">
        <!-- Live Code Block -->
        <div class="bg-[#1e1e1e] rounded-[2rem] shadow-2xl overflow-hidden border border-slate-800">
          <div class="flex items-center px-4 py-3 bg-[#2d2d2d] border-b border-slate-700">
            <div class="flex gap-2">
              <div class="w-3 h-3 rounded-full bg-red-500"></div>
              <div class="w-3 h-3 rounded-full bg-yellow-500"></div>
              <div class="w-3 h-3 rounded-full bg-green-500"></div>
            </div>
            <span class="ml-4 text-xs font-mono text-slate-400">NTL_DatabaseObject.sql</span>
          </div>
          <div class="p-6 overflow-x-auto text-sm font-mono text-emerald-300 whitespace-pre">
            {{ codeExample }}
          </div>
        </div>

        <!-- Rules -->
        <div class="bg-gradient-to-br from-emerald-50/50 to-white dark:from-slate-900/80 dark:to-slate-800/50 p-8 rounded-[2rem] border border-emerald-200/50 dark:border-white/5">
          <h3 class="text-xl font-bold text-slate-900 dark:text-white mb-6 uppercase tracking-widest text-sm text-slate-500">Engenharia T-SQL NTL</h3>
          <ul class="space-y-4">
            <li class="flex items-start gap-3">
              <Icon name="lucide:arrow-down-right" class="w-6 h-6 text-emerald-500 shrink-0" />
              <span class="text-sm text-slate-700 dark:text-slate-300">Prefira campos <strong>NVARCHAR</strong> se houver internacionalização. Ele suporta a camada Unicode inteira, mas usa 2 bytes por letra.</span>
            </li>
            <li class="flex items-start gap-3">
              <Icon name="lucide:arrow-down-right" class="w-6 h-6 text-emerald-500 shrink-0" />
              <span class="text-sm text-slate-700 dark:text-slate-300">Evite a cláusula letal <strong>SELECT *</strong> em ambiente de Produção. Isso arrasta índices irrelevantes. Use mapeamento explícito de colunas.</span>
            </li>
            <li class="flex items-start gap-3">
              <Icon name="lucide:shield-check" class="w-6 h-6 text-emerald-500 shrink-0" />
              <span class="text-sm text-slate-700 dark:text-slate-300">Stings que emendam SQL lado Backend em PDO disparam <strong>SQL Injection</strong> instantemente. Parâmetros (?) são a única blindagem real.</span>
            </li>
          </ul>
        </div>
      </div>
    </div>
  </div>
</template>
