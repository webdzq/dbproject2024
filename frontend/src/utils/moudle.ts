const gitlabPath = 'https://git.xx.cc'
const pathpre1 = '/inno_newhw'
const pathpre2 = '/inno_newhw/pad/fe'
const pathpre3 = '/inno_newhw/pad/fe/13'

const apkList = ['1', '2', '1', '2', '1', '2', '1', '2', '1', '2', '1', '2']

export const getApiList = () => {
  const list = apkList.map((i) => {
    const obj = {
      disabled: !i.includes('zpchinesedictation', 1),
      value: i,
      label: i
    }
    return obj
  })
  return list
}
const moudlePath = {
  'iot-learning-tools': pathpre1, //
  'pad-correction-poetry': pathpre2, // 古诗，语文作文批改，英语作文批改
  'pad-composition-recite': pathpre2, // 语文作文，背单词，英语作文
  'pad-cal-paper-print': pathpre2, // 计算器，练习和试卷，打印
  'pad-arithmetic-report': pathpre2, // 口算，试卷诊断
  'pad-ai-study': pathpre2, // ai课
  'activity-pull-new': pathpre2, // 精准学-拉新活动
  'pad-baby': pathpre3 // 低幼
}
export const getFullPath = (moduleName: string, commitStr: string) => {
  let moduleName1 = moduleName.replace('/static/', '')
  if (moduleName1 === 'learning-tools') {
    moduleName1 = 'iot-learning-tools'
  }
  return `${gitlabPath}${moudlePath[moduleName1]}/${moduleName1}/compare/${commitStr}`
}
