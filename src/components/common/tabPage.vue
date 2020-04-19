<template>
    <div class="tabPageDiv">
            <a href="javascript:;"
               class="tabPageA"
               @click="changeCurrentPage(currentPage-1)"
            >
                上一页
            </a>
            <a href="javascript:;" class="tabPageA"
               v-for="(pageInfo, pageIndex) in showingPage"
               :key="pageIndex"
               :class="currentPage==pageInfo ? 'pageActive':''"
               @click="changeCurrentPage(pageInfo)"
            >
            {{ pageInfo }}
            </a>

            <a href="javascript:;"
               class="tabPageA"
               @click="changeCurrentPage(currentPage+1)"
            >
                下一页
            </a>
    </div>
</template>
<script type="text/javascript">
export default {
    props: {
        totalPage: {
            type: Number,
            required: true
        }
    },
    data() {
        return {
            currentPage: 1
        }
    },
    computed: {
        showingPage: function() {
            let pages = []

            if (this.currentPage - 4 > 0 ) {
                pages.push(1)
                pages.push(2)
                pages.push('...')
                pages.push(this.currentPage-2)
                pages.push(this.currentPage-1)
            } else {
                for (let i=1; i<this.currentPage; i++) {
                    pages.push(i)
                }
            }

            pages.push(this.currentPage)

            if (this.currentPage + 4 < this.totalPage) {
                pages.push(this.currentPage+1)
                pages.push(this.currentPage+2)
                pages.push('...')
                pages.push(this.totalPage-1)
                pages.push(this.totalPage)
            } else {
                for (let i=this.currentPage+1; i<=this.totalPage; i++) {
                    pages.push(i)
                }
            }

            return pages
        }
    },
    methods: {
        changeCurrentPage(page) {
            if (page <= 0 || page > this.totalPage || page==='...') {
                return
            }

            this.currentPage = page
            this.$emit('changePage', this.currentPage)
        }
    }
}
</script>

<style type="text/css" scoped>
.tabPageDiv {
    display: flex;
    justify-content: center;
    margin: 20px 0;
}

.tabPageA {
    display: block;
    font-size: 14px;
    color: #565a61;
    background: #fff;
    padding: 6px 12px;
    margin: 0 2px;
}

.tabPageA:hover, .pageActive {
    color: #fff;
    background: #6A8DC3
;
}

</style>