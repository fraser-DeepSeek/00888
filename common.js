// 1. 初始化 Supabase（注意前面加了 window.）
window.supabaseClient = supabase.createClient(
  'https://hyybzmqmrgnrfetumbhb.supabase.co', 
  'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Imh5eWJ6bXFtcmducmZldHVtYmhiIiwicm9sZSI6ImFub24iLCJpYXQiOjE3OTIyMTg1NjksImV4cCI6MjEwNzc5NDU2OX0.QoAeWhvLmwsfgxsHqHYXee9H_-Wo9zwTlY5x2s7FbPk' 
);

// 2. 页面跳转小工具（注意前面也加了 window.）
window.goDetail = function(postId) { 
  location.href = `detail.html?id=${postId}`; 
};

window.goProfile = function() { 
  location.href = 'profile.html'; 
};

window.goHome = function() { 
  location.href = 'index.html'; 
};

// 3. 图片压缩工具（也加上 window.）
window.compressImage = async function(file, maxWidth = 1280, quality = 0.8) {
  return new Promise((resolve) => {
    const img = new Image();
    const reader = new FileReader();
    reader.onload = (e) => {
      img.onload = () => {
        const canvas = document.createElement('canvas');
        const scale = Math.min(1, maxWidth / img.width);
        canvas.width = img.width * scale;
        canvas.height = img.height * scale;
        canvas.getContext('2d').drawImage(img, 0, 0, canvas.width, canvas.height);
        canvas.toBlob((blob) => resolve(blob), 'image/jpeg', quality);
      };
      img.src = e.target.result;
    };
    reader.readAsDataURL(file);
  });
};