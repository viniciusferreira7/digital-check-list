interface item {
  id: number
  photo: string
  control: {
    pt_br: string
    eng: string
  }
}
interface CheckListData {
  id: string
  name: string
  boxes: number[]
  QuantityPerBox: number[]
  itens: item[]
  quantityItems: number
  hasEngines: boolean
}

export const checkListData: CheckListData[] = [
  {
    id: 'JB00016926',
    name: 'Acciona Nordex YD',
    boxes: [1, 2, 3],
    QuantityPerBox: [1, 2],
    itens: [
      {
        id: 1,
        photo:
          'https://images.unsplash.com/photo-1462331940025-496dfbfc7564?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=611&q=80',
        control: {
          pt_br: 'Defeitos de Pintura',
          eng: 'Painting defects',
        },
      },
      {
        id: 2,
        photo:
          'https://images.unsplash.com/photo-1462331940025-496dfbfc7564?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=611&q=80',
        control: {
          pt_br: 'Conferir a plaqueta de identificação.',
          eng: 'Check the nameplate',
        },
      },
      {
        id: 3,
        photo:
          'https://images.unsplash.com/photo-1462331940025-496dfbfc7564?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=611&q=80',
        control: {
          pt_br:
            'Verificar a presença da etiqueta metálica "E" com a letra na cor preta, que indica o ponto máximo de Excenticidade e marcar a presença com marcador industrial (Produção cor Branco / Qualidade cor Azul)',
          eng: 'Check the presence of "A" metallic plate with black letter color which indicate of the maximum eccentricity point and to mark the presence with industrial pen (Production white color / Quality blue color)',
        },
      },
      {
        id: 4,
        photo:
          'https://images.unsplash.com/photo-1462331940025-496dfbfc7564?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=611&q=80',
        control: {
          pt_br:
            'Verificar a presença das 2 etiquetas metálicas "E" com letra vermelha que indica o ponto isento de Excenticidade, eles devem estar posicionas à 90° positivo e negativo referente ao ponto máximo de excentricidade (A). Marcar a presença com marcador industrial (Produção cor Branco / Qualidade cor Azul)',
          eng: 'Check the presence of "A" metallic plates with red letter color which indicate of the eccentricity free point. This plates must be placed to 90° positive and negative relation to the maximum eccentricity point (A). Mark the presence with industrial pen (Production white color / Quality blue color)',
        },
      },
    ],
    quantityItems: 4,
    hasEngines: true,
  },
  {
    id: '2T709T3191A01',
    name: 'Acciona Nordex PD',
    boxes: [1],
    QuantityPerBox: [1, 2, 3],
    itens: [
      {
        id: 1,
        photo:
          'https://images.unsplash.com/photo-1462331940025-496dfbfc7564?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=611&q=80',
        control: {
          pt_br: 'Defeitos de Pintura',
          eng: 'Painting defects',
        },
      },
      {
        id: 2,
        photo:
          'https://images.unsplash.com/photo-1462331940025-496dfbfc7564?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=611&q=80',
        control: {
          pt_br: 'Conferir a plaqueta de identificação.',
          eng: 'Check the nameplate',
        },
      },
      {
        id: 3,
        photo:
          'https://images.unsplash.com/photo-1462331940025-496dfbfc7564?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=611&q=80',
        control: {
          pt_br:
            'Superfícies não pintadas sem vestígios de tinta e protegidas com Tectyl 506EH. ATENÇÃO: A região entre o pinhão e o anel nilos deve estar corretamente pintada',
          eng: 'Unpainted surfaces free of paint and protect with Tecty 506EH. Check if free of oxidation (A). ATTENTION: The region betwen pinion shaft and the Nilos ring must be correctly painted (A)',
        },
      },
      {
        id: 4,
        photo:
          'https://images.unsplash.com/photo-1462331940025-496dfbfc7564?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=611&q=80',
        control: {
          pt_br:
            'Verificar a presença e a correta montagem do Dispositivo de travamento, a tampa do mesmo deve estar fechada e o anel trava alojado corretamente no canal',
          eng: 'Check if the locking device was correctly assembled the cover must be closed and the circlip fitted correctly',
        },
      },
      {
        id: 5,
        photo:
          'https://images.unsplash.com/photo-1462331940025-496dfbfc7564?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=611&q=80',
        control: {
          pt_br:
            'Verificar a presença da etiqueta de Óleo colada à esquerda da plaqueta do redutor ',
          eng: 'The Oil label must be placed on the left side of gearbox nameplate.',
        },
      },
      {
        id: 6,
        photo:
          'https://images.unsplash.com/photo-1462331940025-496dfbfc7564?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=611&q=80',
        control: {
          pt_br:
            'Verificar a presença da graxa Kluber 46 MR no eixo de entrada',
          eng: 'Check the presence of the grease Kluber 46 MR on the input shaft',
        },
      },
      {
        id: 7,
        photo:
          'https://images.unsplash.com/photo-1462331940025-496dfbfc7564?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=611&q=80',
        control: {
          pt_br:
            'Verificar se os 3 redutores foram embalados com 1 saco de gel dessecante (det. A) dentro do saco VCI para cada redutor',
          eng: 'Check if the 3 gearboxes were packaged with desiccant salt (det. A) inside each VCI bag to each gearbox',
        },
      },
    ],
    quantityItems: 7,
    hasEngines: false,
  },
  {
    id: 'JB00004855 / JB00022273',
    name: 'VESTAS',
    boxes: [1, 2],
    QuantityPerBox: [1, 2, 3, 4],
    itens: [
      {
        id: 1,
        photo:
          'https://images.unsplash.com/photo-1462331940025-496dfbfc7564?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=611&q=80',
        control: {
          pt_br: 'Defeitos de Pintura',
          eng: 'Painting defects',
        },
      },
      {
        id: 2,
        photo:
          'https://images.unsplash.com/photo-1462331940025-496dfbfc7564?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=611&q=80',
        control: {
          pt_br: 'Conferir a plaqueta de identificação.',
          eng: 'Check the nameplate',
        },
      },
      {
        id: 3,
        photo:
          'https://images.unsplash.com/photo-1462331940025-496dfbfc7564?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=611&q=80',
        control: {
          pt_br:
            'Superfícies não pintadas sem vestígios de tinta e protegidas com Tectyl 506EH. ATENÇÃO: O anel espaçador entre o eixo pinhão e o anel nilos deve estar corretamente pintado (A) e a superfície inferior do mesmo protegida com Tectyl 506EH (B). SE A CARCAÇA FOR METALIZADA, NÃO APLICAR ÓLEO PROTETIVO NA REGIÃO METALIZADA',
          eng: 'Unpainted surfaces free of paint and protect with Tecty 506EH. Check if free of oxidation. ATTENTION: The spacer ring betwen pinion shaft and the Nilos ring must be correctly painted (A) and the bottom area protected with Tectyl 506EH (B).  If the housing is mettalized, do not apply protective oil in this region',
        },
      },
      {
        id: 4,
        photo:
          'https://images.unsplash.com/photo-1462331940025-496dfbfc7564?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=611&q=80',
        control: {
          pt_br: 'Verificar se o alinhamento de montagem está conforme desenho',
          eng: 'Check if the alignment of the assembly is according to the drawing',
        },
      },
      {
        id: 5,
        photo:
          'https://images.unsplash.com/photo-1462331940025-496dfbfc7564?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=611&q=80',
        control: {
          pt_br:
            'Verificar a presença da graxa Kluber 46 MR no eixo de entrada',
          eng: 'Check the presence of the grease Kluber 46 MR on the input shaft',
        },
      },
      {
        id: 6,
        photo:
          'https://images.unsplash.com/photo-1462331940025-496dfbfc7564?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=611&q=80',
        control: {
          pt_br: 'Verificar se o alinhamento de montagem está conforme desenho',
          eng: 'Check if the alignment of the assembly is according to the drawing',
        },
      },
    ],
    quantityItems: 6,
    hasEngines: true,
  },
  {
    id: 'JB00010399',
    name: 'WEG',
    boxes: [1],
    QuantityPerBox: [1, 2, 3],
    itens: [
      {
        id: 1,
        photo:
          'https://images.unsplash.com/photo-1462331940025-496dfbfc7564?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=611&q=80',
        control: {
          pt_br: 'Defeitos de Pintur',
          eng: 'Painting defects',
        },
      },
      {
        id: 2,
        photo:
          'https://images.unsplash.com/photo-1462331940025-496dfbfc7564?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=611&q=80',
        control: {
          pt_br: 'Conferir a plaqueta de identificação',
          eng: 'Check the nameplate',
        },
      },
      {
        id: 3,
        photo:
          'https://images.unsplash.com/photo-1462331940025-496dfbfc7564?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=611&q=80',
        control: {
          pt_br: 'Conferir a plaqueta de excentricidade',
          eng: 'Check the eccentric nameplate',
        },
      },
      {
        id: 4,
        photo:
          'https://images.unsplash.com/photo-1462331940025-496dfbfc7564?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=611&q=80',
        control: {
          pt_br: 'Verificar se o alinhamento de montagem está conforme desenho',
          eng: 'Check if the alignment of the assembly is according to the drawing ',
        },
      },
      {
        id: 5,
        photo:
          'https://images.unsplash.com/photo-1462331940025-496dfbfc7564?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=611&q=80',
        control: {
          pt_br:
            'Superfícies não pintadas sem vestígios de tinta e protegidas com TECTYL 506-EH',
          eng: 'Unpainted surfaces free of paint and protect with TECTYL 506-EH',
        },
      },
      {
        id: 6,
        photo:
          'https://images.unsplash.com/photo-1462331940025-496dfbfc7564?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=611&q=80',
        control: {
          pt_br:
            'Verificar a presença da graxa Kluber 46 MR no eixo de entrada',
          eng: 'Check the presence of the grease Kluber 46 MR on the input shaft',
        },
      },
    ],
    quantityItems: 6,
    hasEngines: false,
  },
]
