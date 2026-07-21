hexo.extend.generator.register('bber', function(locals) {
  var data = locals.data.shuoshuo || [];
  
  var html = `
<style>
.bber-timeline {
  position: relative;
  max-width: 800px;
  margin: 0 auto;
  padding: 20px 0;
}
.bber-timeline::before {
  content: '';
  position: absolute;
  top: 0;
  bottom: 0;
  left: 20px;
  width: 2px;
  background: #e0e3e7;
}
.bber-item {
  position: relative;
  margin-bottom: 30px;
  padding-left: 50px;
}
.bber-item::before {
  content: '';
  position: absolute;
  left: 14px;
  top: 4px;
  width: 14px;
  height: 14px;
  border-radius: 50%;
  background: #30a9de;
  border: 3px solid #fff;
  box-shadow: 0 0 0 2px #30a9de;
  z-index: 1;
}
.bber-date {
  font-size: 0.9em;
  color: #718096;
  margin-bottom: 8px;
  font-weight: 600;
}
.bber-content {
  background: #f8f9fa;
  padding: 15px 20px;
  border-radius: 8px;
  color: #3c4858;
  line-height: 1.6;
  box-shadow: 0 2px 8px rgba(0,0,0,0.04);
}
/* 暗黑模式适配 */
[data-user-color-scheme="dark"] .bber-timeline::before {
  background: #435266;
}
[data-user-color-scheme="dark"] .bber-item::before {
  background: #1589e9;
  border-color: #252d38;
  box-shadow: 0 0 0 2px #1589e9;
}
[data-user-color-scheme="dark"] .bber-content {
  background: #2d3748;
  color: #c4c6c9;
}
</style>
<div class="bber-timeline">
`;

  if (data.length > 0) {
    data.forEach(function(item) {
      html += '<div class="bber-item">';
      html += '<div class="bber-date">' + item.date + '</div>';
      html += '<div class="bber-content">' + item.content + '</div>';
      html += '</div>';
    });
  } else {
    html += '<p>暂时还没有碎碎念哦~</p>';
  }
  
  html += '</div>';

  return {
    path: 'bber/index.html',
    data: {
      title: '碎碎念',
      content: html
    },
    layout: ['page', 'post']
  };
});
