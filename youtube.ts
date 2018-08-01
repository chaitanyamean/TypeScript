
// Trending videos class starts

class TrendingVideos {
    constructor(public videoTitle: string, public accountName: string, public viewsCount: string, public uploaded: string) { }
    getViewCount = () => {
        return this.viewsCount;
    }
    setViewCount = (countData: string) => {
        this.viewsCount = countData;
    }

    getRelatedVideos() {
        console.log('All Related Videos');
    }
    
    getHistoryVideos() {
        console.log('All History Videos');
    }
    
    createVideos() {
        console.log('Create Videos');
    }
    
    getMenuItems(){
        console.log('All Menu Items');
    }

    
} // Trending videos class stops


let videoCount = new TrendingVideos('edwisor video', 'Edwisor', '3000k', '23 hours ago');

console.log(videoCount.getViewCount());
videoCount.setViewCount('4444k');
console.log(videoCount.getViewCount());

// Recommended class starts
class Recommended extends TrendingVideos {
    constructor(public videoTitle: string, public accountName: string, public viewsCount: string, public uploaded: string) {
        super(videoTitle, accountName, viewsCount, uploaded);
    }
} // Recommended class stops

let recvideoCount = new Recommended('Edwisor Mean Stack Video', 'Edwisor', '2000k', '23 hours ago')

console.log(recvideoCount.getViewCount());
recvideoCount.setViewCount('1111k');
console.log(recvideoCount.getViewCount());
// RecentlyUploaded class starts
class RecentlyUploaded extends TrendingVideos {
    constructor(public videoTitle: string, public accountName: string, public viewsCount: string, public uploaded: string) {
        super(videoTitle, accountName, viewsCount, uploaded);
    }
}
// RecentlyUploaded class stops



