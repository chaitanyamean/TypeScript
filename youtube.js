var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var YoutubeDashboard = /** @class */ (function () {
    function YoutubeDashboard() {
    }
    return YoutubeDashboard;
}());
// Trending videos class
var TrendingVideos = /** @class */ (function () {
    function TrendingVideos(videoTitle, accountName, viewsCount, uploaded) {
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
    return TrendingVideos;
}());
var videoCount = new TrendingVideos('edwisor video', 'Edwisor', '3000k', '23 hours ago');
console.log(videoCount.getViewCount());
videoCount.setViewCount('4444k');
console.log(videoCount.getViewCount());
var Recommended = /** @class */ (function (_super) {
    __extends(Recommended, _super);
    function Recommended(videoTitle, accountName, viewsCount, uploaded) {
        var _this = _super.call(this, videoTitle, accountName, viewsCount, uploaded) || this;
        _this.videoTitle = videoTitle;
        _this.accountName = accountName;
        _this.viewsCount = viewsCount;
        _this.uploaded = uploaded;
        return _this;
    }
    return Recommended;
}(TrendingVideos));
var recvideoCount = new Recommended('Edwisor Video', 'Edwisor', '2000k', '23 hours ago');
console.log(recvideoCount.getViewCount());
recvideoCount.setViewCount('1111k');
console.log(recvideoCount.getViewCount());
var RecentlyUploaded = /** @class */ (function (_super) {
    __extends(RecentlyUploaded, _super);
    function RecentlyUploaded(videoTitle, accountName, viewsCount, uploaded) {
        var _this = _super.call(this, videoTitle, accountName, viewsCount, uploaded) || this;
        _this.videoTitle = videoTitle;
        _this.accountName = accountName;
        _this.viewsCount = viewsCount;
        _this.uploaded = uploaded;
        return _this;
    }
    return RecentlyUploaded;
}(TrendingVideos));
