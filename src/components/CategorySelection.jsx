import { motion } from 'framer-motion';
import PropTypes from 'prop-types';
import { categories, categoryGroups } from '../data/questions';

const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1
    }
  }
};

const item = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0 }
};

export function CategorySelection({ onSelectCategory }) {
  return (
    <div className="w-full space-y-12 p-12">
      {categoryGroups.map((group) => (
        <motion.div
          key={group.id}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className="w-full"
        >
          <div className="flex items-center gap-4 mb-6">
            <span className="text-4xl">{group.icon}</span>
            <div>
              <h2 className="text-2xl font-bold text-white">{group.name}</h2>
              <p className="text-gray-300">{group.description}</p>
            </div>
          </div>
          
          <motion.div
            variants={container}
            initial="hidden"
            animate="show"
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 2xl:grid-cols-4 gap-6"
          >
            {categories
              .filter(category => category.group === group.id)
              .map((category) => (
                <motion.div
                  key={category.id}
                  variants={item}
                  whileHover={{ scale: 1.03 }}
                  whileTap={{ scale: 0.98 }}
                  className="card cursor-pointer h-full"
                  onClick={() => onSelectCategory(category)}
                >
                  <div className="flex items-center gap-4">
                    <span className="text-4xl">{category.icon}</span>
                    <div>
                      <h3 className="text-xl font-bold">{category.name}</h3>
                      <p className="text-muted-foreground">{category.description}</p>
                    </div>
                  </div>
                </motion.div>
              ))}
          </motion.div>
        </motion.div>
      ))}
    </div>
  );
}

CategorySelection.propTypes = {
  onSelectCategory: PropTypes.func.isRequired
};
