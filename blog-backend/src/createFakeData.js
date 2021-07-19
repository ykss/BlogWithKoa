import Post from './models/post';

export default function createFakeData() {
    const posts = [...Array(40).keys()].map(i => ({
        title: `포스트 #${i}`,
        body: '동해물과 백두산이 마르고 닳도록 하나님이 보우하사 우리나라 만세, 무궁화 삼천리 화려강산 대한사람 대한으로 길이 보전하세.',
        tags: ['가짜', 'fake']
    }));

    Post.insertMany(posts, (err, docs) => {
        console.log(docs);
    })
}