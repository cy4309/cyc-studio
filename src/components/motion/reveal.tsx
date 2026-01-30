"use client";

import { motion } from "framer-motion";
import { ReactNode } from "react";

interface RevealProps {
  children: ReactNode;
  /** 單一內容延遲 */
  delay?: number;
  /** Y 軸位移 */
  y?: number;
  /** 動畫時間 */
  duration?: number;
  /** stagger children（用在列表容器） */
  stagger?: number;
  className?: string;
}

export const Reveal = ({
  children,
  delay = 0,
  y = 24,
  duration = 0.8,
  stagger,
  className,
}: RevealProps) => {
  const variants = stagger
    ? {
        hidden: {},
        show: {
          transition: {
            staggerChildren: stagger,
          },
        },
      }
    : undefined;

  return (
    <motion.div
      className={className}
      initial="hidden"
      animate="show"
      variants={variants}
      transition={
        stagger
          ? undefined
          : {
              delay,
              duration,
              ease: [0.22, 1, 0.36, 1] as const,
            }
      }
    >
      {stagger ? (
        children
      ) : (
        <motion.div
          variants={{
            hidden: { opacity: 0, y },
            show: {
              opacity: 1,
              y: 0,
              transition: {
                duration,
                ease: [0.22, 1, 0.36, 1] as const,
              },
            },
          }}
        >
          {children}
        </motion.div>
      )}
    </motion.div>
  );
};

// "use client";

// import { motion } from "framer-motion";
// import { ReactNode } from "react";

// interface RevealProps {
//   children: ReactNode;
//   delay?: number /** 單一內容延遲 */;
//   y?: number /** Y 軸位移 */;
//   duration?: number /** 動畫時間 */;
//   stagger?: number /** stagger children（用在列表容器） */;
//   className?: string;
// }

// const itemVariants = {
//   hidden: {
//     opacity: 0,
//     y: 24,
//   },
//   show: {
//     opacity: 1,
//     y: 0,
//     transition: {
//       duration: 0.8,
//       ease: [0.22, 1, 0.36, 1] as const,
//     },
//   },
// };

// export const Reveal = ({
//   children,
//   delay = 0,
//   y = 24,
//   duration = 0.8,
//   stagger,
//   className,
// }: RevealProps) => {
//   // 當 Reveal 作為「列表容器」時
//   if (stagger) {
//     return (
//       <motion.div
//         className={className}
//         initial="hidden"
//         animate="show"
//         variants={{
//           hidden: {},
//           show: {
//             transition: {
//               staggerChildren: stagger,
//             },
//           },
//         }}
//       >
//         {children}
//       </motion.div>
//     );
//   }

//   // 單一 item reveal
//   return (
//     <motion.div
//       className={className}
//       variants={itemVariants}
//       initial="hidden"
//       animate="show"
//       transition={{ delay }}
//     >
//       {children}
//     </motion.div>
//   );
// };
