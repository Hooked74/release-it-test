const { getDeepMessage } = require("@repo/deep");

function run() {
  // Simple runtime hook that demonstrates the dependency chain.
  return `reader uses 2 ${getDeepMessage()}`;
}

module.exports = {
  run
};

// feat(deep): update deep [123][minor|major|patch]

// корнер кейсы dev 
// 1. выделили релиз или rc но не смерджили в dev и добавляем новый коммит в dev (определить что нужно инкрементировать dev tag)
// 2. когда мы замерджили release в dev (определить для мердж коммита версию)
// 3. когда мы замерджили release/master в dev -> подняли версию а потом мерджим feature с меньшей версией

// [major|minor|patch] поднятие версий через commit
// только в ветках main, develop


// можно ли в gitlab ci сделать кастомный триггер ни на ветку или 

// 1.0.0 - должна иметь возможность раскатываться на production, staging, development (всегда только manual раскатка)
// 1.0.0-rc.1 - релиз кандидат, должна иметь возможность раскатываться на staging, development (автоматическая раскатка на staging при теге)
// 1.0.0-hotfix.1 - хотфикс версия, должна иметь возможность раскатываться на staging, development (всегда только manual раскатка)

// 1.0.0-beta.1 - девелоперская версия, должна иметь возможность раскатываться только на development

// canary


// ветка feature/*
// тег ставится по маске 