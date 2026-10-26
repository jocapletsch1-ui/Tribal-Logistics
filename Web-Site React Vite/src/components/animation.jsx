import { motion } from 'framer-motion';

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1, 
    },
  },
};

const itemVariants = {
  hidden: { 
    opacity: 0, 
    y: 20
  },
  visible: { 
    opacity: 1, 
    y: 0,
    transition: {
      type: 'spring',
      stiffness: 100,
    },
  },
};

export default function MinhaTela() {
  const itens = ['Dashboard', 'Relatórios', 'Configurações', 'Perfil', 'Sair'];

  return (
    <motion.ul
      variants={containerVariants}
      initial="hidden"
      animate="visible"
      style={{ listStyle: 'none', padding: 0 }}
    >
      {itens.map((item, index) => (
        <motion.li
          key={index}
          variants={itemVariants}
          style={{
            padding: '16px',
            margin: '8px 0',
            background: '#f0f0f0',
            borderRadius: '8px',
          }}
        >
          {item}
        </motion.li>
      ))}
    </motion.ul>
  );
}