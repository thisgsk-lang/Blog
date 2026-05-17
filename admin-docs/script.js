// 섹션 네비게이션
document.querySelectorAll('.nav-btn').forEach(btn => {
    btn.addEventListener('click', (e) => {
        // 이전 활성 버튼 비활성화
        document.querySelectorAll('.nav-btn').forEach(b => b.classList.remove('active'));
        document.querySelectorAll('.section').forEach(s => s.classList.remove('active'));

        // 새로운 섹션 활성화
        e.target.classList.add('active');
        const sectionId = e.target.getAttribute('data-section');
        document.getElementById(sectionId).classList.add('active');
    });
});

// 콘텐츠 테이블 업데이트
function updateContentTable() {
    const tbody = document.querySelector('.content-table tbody');
    tbody.innerHTML = '';

    const posts = JSON.parse(localStorage.getItem('posts') || '[]');

    posts.forEach((post, index) => {
        const tr = document.createElement('tr');
        const statusText = post.published ? '공개' : '초안';
        const statusClass = post.published ? 'published' : 'draft';

        tr.innerHTML = `
            <td>${post.title}</td>
            <td><span class="status ${statusClass}">${statusText}</span></td>
            <td>${post.createdAt.split('T')[0]}</td>
            <td>${post.updatedAt.split('T')[0]}</td>
            <td>
                <button class="btn-small edit-btn" data-id="${post.id}">수정</button>
                <button class="btn-small toggle-btn" data-id="${post.id}">${post.published ? '공개중' : '발행'}</button>
                <button class="btn-small danger delete-btn" data-id="${post.id}">삭제</button>
            </td>
        `;
        tbody.appendChild(tr);
    });

    attachTableButtonHandlers();
}

// 글 작성/수정 폼 제출
document.querySelector('.editor-form').addEventListener('submit', (e) => {
    e.preventDefault();

    const editId = document.getElementById('edit-id').value;
    const title = document.getElementById('title').value;
    const content = document.getElementById('content').value;
    const tags = document.getElementById('tags').value;
    const publish = document.getElementById('publish').checked;

    if (!title || !content) {
        alert('제목과 내용을 입력해주세요');
        return;
    }

    let posts = JSON.parse(localStorage.getItem('posts') || '[]');

    if (editId) {
        // 기존 글 수정
        const postIndex = posts.findIndex(p => p.id == editId);
        if (postIndex !== -1) {
            posts[postIndex].title = title;
            posts[postIndex].content = content;
            posts[postIndex].tags = tags.split(',').map(t => t.trim());
            posts[postIndex].published = publish;
            posts[postIndex].updatedAt = new Date().toISOString();
        }
        alert('글이 수정되었습니다!');
    } else {
        // 새 글 생성
        const post = {
            id: Date.now(),
            title: title,
            content: content,
            tags: tags.split(',').map(t => t.trim()),
            published: publish,
            createdAt: new Date().toISOString(),
            updatedAt: new Date().toISOString()
        };
        posts.push(post);
        alert('글이 저장되었습니다!');
    }

    localStorage.setItem('posts', JSON.stringify(posts));

    // 폼 초기화 및 목록으로 돌아가기
    document.querySelector('.editor-form').reset();
    document.getElementById('edit-id').value = '';
    document.getElementById('editor-title').textContent = '새 글 작성';
    document.getElementById('cancel-edit-btn').style.display = 'none';
    document.getElementById('publish').checked = true;

    updateContentTable();

    // 콘텐츠 탭으로 자동 전환
    document.querySelectorAll('.nav-btn').forEach(b => b.classList.remove('active'));
    document.querySelectorAll('.section').forEach(s => s.classList.remove('active'));
    document.querySelector('[data-section="content"]').classList.add('active');
    document.getElementById('content-section').classList.add('active');
});

// 테이블 버튼 이벤트 핸들러
function attachTableButtonHandlers() {
    // 수정 버튼
    document.querySelectorAll('.edit-btn').forEach(btn => {
        btn.addEventListener('click', (e) => {
            const postId = e.target.getAttribute('data-id');
            const posts = JSON.parse(localStorage.getItem('posts') || '[]');
            const post = posts.find(p => p.id == postId);

            if (post) {
                // 에디터 폼에 데이터 채우기
                document.getElementById('edit-id').value = post.id;
                document.getElementById('title').value = post.title;
                document.getElementById('content').value = post.content;
                document.getElementById('tags').value = post.tags.join(', ');
                document.getElementById('publish').checked = post.published;

                // UI 업데이트
                document.getElementById('editor-title').textContent = '글 수정';
                document.getElementById('cancel-edit-btn').style.display = 'inline-block';

                // 에디터 탭으로 이동
                document.querySelectorAll('.nav-btn').forEach(b => b.classList.remove('active'));
                document.querySelectorAll('.section').forEach(s => s.classList.remove('active'));
                document.querySelector('[data-section="editor"]').classList.add('active');
                document.getElementById('editor').classList.add('active');
            }
        });
    });

    // 공개/초안 토글 버튼
    document.querySelectorAll('.toggle-btn').forEach(btn => {
        btn.addEventListener('click', (e) => {
            const postId = e.target.getAttribute('data-id');
            let posts = JSON.parse(localStorage.getItem('posts') || '[]');
            const post = posts.find(p => p.id == postId);

            if (post) {
                post.published = !post.published;
                post.updatedAt = new Date().toISOString();
                localStorage.setItem('posts', JSON.stringify(posts));
                updateContentTable();
            }
        });
    });

    // 삭제 버튼
    document.querySelectorAll('.delete-btn').forEach(btn => {
        btn.addEventListener('click', (e) => {
            const postId = e.target.getAttribute('data-id');
            if (confirm('이 글을 삭제하시겠습니까?')) {
                let posts = JSON.parse(localStorage.getItem('posts') || '[]');
                posts = posts.filter(p => p.id != postId);
                localStorage.setItem('posts', JSON.stringify(posts));
                updateContentTable();
                alert('글이 삭제되었습니다');
            }
        });
    });
}

// 목록으로 돌아가기
document.getElementById('cancel-edit-btn').addEventListener('click', () => {
    document.querySelector('.editor-form').reset();
    document.getElementById('edit-id').value = '';
    document.getElementById('editor-title').textContent = '새 글 작성';
    document.getElementById('cancel-edit-btn').style.display = 'none';
    document.getElementById('publish').checked = true;

    // 콘텐츠 탭으로 이동
    document.querySelectorAll('.nav-btn').forEach(b => b.classList.remove('active'));
    document.querySelectorAll('.section').forEach(s => s.classList.remove('active'));
    document.querySelector('[data-section="content"]').classList.add('active');
    document.getElementById('content-section').classList.add('active');
});

// 페이지 로드 시 저장된 글 불러오기
window.addEventListener('load', () => {
    const posts = JSON.parse(localStorage.getItem('posts') || '[]');
    if (posts.length > 0) {
        console.log('저장된 글:', posts);
    }
    updateContentTable();
});

// 미리보기 기능
document.querySelector('.editor-form .btn-secondary').addEventListener('click', () => {
    const title = document.getElementById('title').value;
    const content = document.getElementById('content').value;

    if (!title || !content) {
        alert('제목과 내용을 입력해주세요');
        return;
    }

    // 새 탭에서 미리보기 열기
    const preview = window.open('', 'preview', 'width=800,height=600');
    preview.document.write(`
        <!DOCTYPE html>
        <html>
        <head>
            <meta charset="UTF-8">
            <title>${title}</title>
            <style>
                body { font-family: Arial; max-width: 800px; margin: 0 auto; padding: 2rem; }
                h1 { color: #2c3e50; }
                pre { background: #f0f0f0; padding: 1rem; overflow-x: auto; }
            </style>
        </head>
        <body>
            <h1>${title}</h1>
            <hr>
            <pre>${content}</pre>
            <hr>
            <small>이는 미리보기 입니다. 저장 후 실제 페이지에서 확인해주세요.</small>
        </body>
        </html>
    `);
    preview.document.close();
});

// JSON으로 내보내기
document.getElementById('export-json-btn').addEventListener('click', () => {
    const posts = JSON.parse(localStorage.getItem('posts') || '[]');

    if (posts.length === 0) {
        alert('내보낼 글이 없습니다');
        return;
    }

    const dataStr = JSON.stringify(posts, null, 2);
    const dataBlob = new Blob([dataStr], { type: 'application/json' });
    const url = URL.createObjectURL(dataBlob);
    const link = document.createElement('a');
    link.href = url;
    link.download = `posts-${new Date().toISOString().split('T')[0]}.json`;
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
    URL.revokeObjectURL(url);

    alert('JSON 파일이 다운로드되었습니다!');
});

// 마크다운으로 내보내기
document.getElementById('export-markdown-btn').addEventListener('click', () => {
    const posts = JSON.parse(localStorage.getItem('posts') || '[]');

    if (posts.length === 0) {
        alert('내보낼 글이 없습니다');
        return;
    }

    let markdown = '# AI 도구 활용 블로그 - 내보낸 글\n\n';
    markdown += `내보낸 날짜: ${new Date().toLocaleString('ko-KR')}\n\n`;

    posts.forEach((post, index) => {
        markdown += `## ${index + 1}. ${post.title}\n\n`;
        markdown += `**작성일**: ${post.createdAt.split('T')[0]}\n`;
        markdown += `**수정일**: ${post.updatedAt.split('T')[0]}\n`;
        markdown += `**상태**: ${post.published ? '공개' : '초안'}\n`;
        markdown += `**태그**: ${post.tags.join(', ')}\n\n`;
        markdown += `### 내용\n\n`;
        markdown += `${post.content}\n\n`;
        markdown += `---\n\n`;
    });

    const dataBlob = new Blob([markdown], { type: 'text/markdown;charset=utf-8' });
    const url = URL.createObjectURL(dataBlob);
    const link = document.createElement('a');
    link.href = url;
    link.download = `posts-${new Date().toISOString().split('T')[0]}.md`;
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
    URL.revokeObjectURL(url);

    alert('마크다운 파일이 다운로드되었습니다!');
});

// Cloudflare 로그인 알림
window.addEventListener('load', () => {
    const loginNotice = document.querySelector('.info-box');
    if (loginNotice) {
        loginNotice.innerHTML += '<br><br>✨ <strong>Cloudflare Workers</strong>를 통해 로그인 기능이 추가될 예정입니다.<br>그 때까지는 이 대시보드에서 자유롭게 작업할 수 있습니다.';
    }
});

console.log('관리자 대시보드 로드됨 ✅');
