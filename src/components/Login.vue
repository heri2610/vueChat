<template>
    <!-- Dekstop -->
    <div class="background rounded-md hidden md:block">
        <h1 class="text-center text-black font-semibold pb-5 lg:pt-2">Join Chatroom</h1>
        <div>
            <form action="">
                <div class="pb-3 pt-3 lg:px-2 lg:py-2">
                    <input placeholder="Username" class="bg-vuechat-bg-white-1 w-full rounded-md pl-3 py-2">
                </div>
                <div class="pb-20 lg:pb-14 lg:px-2 lg:py-2">
                    <input placeholder="RoomID" class="bg-vuechat-bg-white-1 w-full rounded-md pl-3 py-2">
                </div>
                <div class="lg:px-2 lg:py-2 lg:pb-5">
                    <button type="submit"
                        class="bg-vuechat-bg-green hover:bg-green-700 text-white w-full rounded-full py-2">Join</button>
                </div>
            </form>
        </div>
    </div>
    <!-- Mobile -->
    <div class="rounded-md md:hidden">
        <h1 class="text-center text-black font-semibold pb-5 lg:pt-2">Join Chatroom</h1>
        <div>
            <form action="">
                <div class="pb-3 pt-3 lg:px-2 lg:py-2">
                    <input placeholder="Username" class="bg-vuechat-bg-white-1 w-full rounded-md pl-3 py-2">
                </div>
                <div class="pb-20 lg:pb-14 lg:px-2 lg:py-2">
                    <input placeholder="RoomID" class="bg-vuechat-bg-white-1 w-full rounded-md pl-3 py-2">
                </div>
                <div class="lg:px-2 lg:py-2 lg:pb-5">
                    <button type="submit"
                        class="bg-vuechat-bg-green hover:bg-green-700 text-white w-full rounded-full py-2">Join</button>
                </div>
            </form>
        </div>
    </div>
</template>

<style>
.background {
    background: linear-gradient(101.92deg, #537FE7 0%, rgba(79, 125, 234, 0.35) 132.69%);
}
</style>