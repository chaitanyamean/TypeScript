var face = /** @class */ (function () {
    function face(videoTitle, accountName, viewsCount, uploaded) {
        var _this = this;
        this.videoTitle = videoTitle;
        this.accountName = accountName;
        this.viewsCount = viewsCount;
        this.uploaded = uploaded;
        this.getViewCount = function () {
            return _this.viewsCount;
        };
        this.setViewCount = function (countData) {
            _this.viewsCount = countData;
        };
    }
    face.prototype.getRelatedVideos = function () {
        console.log('All Related Videos');
    };
    face.prototype.getHistoryVideos = function () {
        console.log('All History Videos');
    };
    face.prototype.createVideos = function () {
        console.log('Create Videos');
    };
    face.prototype.getMenuItems = function () {
        console.log('All Menu Items');
    };
    return face;
}()); // Trending videos class stops
