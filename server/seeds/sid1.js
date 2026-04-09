/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> } 
 */

exports.seed = async function(knex) {
  // Удаляем существующие записи
  await knex('Products').del();

  // Вставляем новые записи
  await knex('Products').insert([
    {
      name: 'Парацетамол',
      description: 'Обезболивающее и жаропонижающее средство',
      image: 'paracetamol.jpg',
      price: 5.99,
      createdAt: new Date(),
    },
    {
      name: 'Ибупрофен',
      description: 'Противовоспалительное и болеутоляющее средство',
      image: 'ibuprofen.jpg',
      price: 7.49,
      createdAt: new Date(),
    },
    {
      name: 'Аспирин',
      description: 'Снижение температуры и профилактика сердечно-сосудистых заболеваний',
      image: 'aspirin.jpg',
      price: 6.99,
      createdAt: new Date(),
    },
    {
      name: 'Витамин C',
      description: 'Поддержка иммунной системы',
      image: 'vitamin_c.jpg',
      price: 9.99,
      createdAt: new Date(),
    },
    {
      name: 'Магний',
      description: 'Поддержка нервной системы и мышц',
      image: 'magnesium.jpg',
      price: 12.49,
      createdAt: new Date(),
    },
    {
      name: 'Антигистамин (Цетиризин)',
      description: 'Снятие симптомов аллергии',
      image: 'cetirizine.jpg',
      price: 8.99,
      createdAt: new Date(),
    },
    {
      name: 'Лоперамид',
      description: 'Средство от диареи',
      image: 'loperamide.jpg',
      price: 4.99,
      createdAt: new Date(),
    },
    {
      name: 'Мазь с гидрокортизоном',
      description: 'Противовоспалительное средство для кожи',
      image: 'hydrocortisone_ointment.jpg',
      price: 6.49,
      createdAt: new Date(),
    },
    {
      name: 'Антибактериальные капли для глаз',
      description: 'Для лечения инфекций глаз',
      image: 'eye_drops.jpg',
      price: 14.99,
      createdAt: new Date(),
    },
    {
      name: 'Пробиотики',
      description: 'Поддержка здоровой микрофлоры кишечника',
      image: 'probiotics.jpg',
      price: 19.99,
      createdAt: new Date(),
    },
  ]);
};

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.down = async function(knex) {
  await knex('Products').del();
};