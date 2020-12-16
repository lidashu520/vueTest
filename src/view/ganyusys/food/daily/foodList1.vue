<template>
    <div class="main-page-wrapper">
            <LoadMore :onLoadMore="onLoadMore" :enableLoadMore="enableLoadMore">
                <ListItem :listData="listData"></ListItem>
            </LoadMore>
    </div>
</template>


<script>
import ListItem from './ListItem'
import LoadMore from './LoadMore';

// import { getListData } from '../js/service.js'


export default {
    name: "MainPage",
    components: {
        ListItem,
        LoadMore
    },
    data() {
        return {
            listData: [],
            page: 0,
            enableLoadMore: true,
        }
    },
    methods: {
        onLoadMore(done) {
            setTimeout(()=>{
                if(!this.enableLoadMore) {
                    return
                }
                this.page = this.page + 1
                // this.getListData();
                done();
            }, 200)
        },
        // getListData() {
        //     let reqData = {
        //         reqData: "接口请求字段"
        //     }
        //     getListData(reqData).then((res)=> {
        //         if(res.length < 20) {
        //             this.enableLoadMore = false
        //         }
        //         this.listData = this.listData.concat(res);
        //     })
        // }
    }
}
</script>


<style lang="scss" scope>
.main-page-wrapper {
    position: relative;
    display: flex;
    height: 100%;
    -webkit-box-orient: vertical;
    flex-direction: column;
}
</style>
