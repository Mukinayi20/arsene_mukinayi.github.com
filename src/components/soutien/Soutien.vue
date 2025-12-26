<template>
    <div>
        <TitleCard className="flex items-center flex-col gap-5 pb-10">
            Soutenez mon travail
        </TitleCard>
    </div>

    <div class="p-6">
        <p class="text-mutedForeground pt-6 text-lg">Cette section est temporairement indisponible. <br>
        Pour tout soutien financier, vous pouvez effectuer votre versement via le numéro indiqué ci-dessous. <br>
        Pour toute information complémentaire ou assistance, ce même numéro reste à votre disposition.<br><a class="no-underline hover:underline text-blue-600" href="tel:+243821600256">+243 821 600 256</a>
        </p>
    </div>
    
    

    <div>
        <Layoutprimary autherClass="flex flex-col items-center">
            <Like/>
        </Layoutprimary>
        <Layoutprimary autherClass="flex flex-col items-center">
            <DIscussion/>
        </Layoutprimary>
        <Layoutprimary autherClass="flex flex-col items-center">
            <Finacement/>
        </Layoutprimary>
    </div>
    <div>
        <Layoutprimary autherClass="flex flex-col items-center">
            <FinanceSecondary/>
        </Layoutprimary>
    </div>
</template>

<script setup>
import TitleCard from '../TitleCard.vue';
import Layoutprimary from '../Layoutprimary.vue';
import Like from './Like.vue';
import DIscussion from './DIscussion.vue';
import Finacement from './Finacement.vue';
import FinanceSecondary from './FinanceSecondary.vue';
</script>