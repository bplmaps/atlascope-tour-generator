<script>

    import {cubicInOut} from "svelte/easing";
    import {tweened} from 'svelte/motion';
    import { onMount } from "svelte";
    
    const smallR = 3.4;
    const largeR = 4.9;
    const r = tweened(smallR, {easing: cubicInOut, duration: 1000});
    
    export let pulse = false;
    
    onMount(()=>{
      if (pulse) {
        let t = true;
        function p() {
          t = !t;
          r.set(t ? smallR : largeR).then(p);
        }
        p();
      }
    })
    
    </script>
    
    <div class="atlascope-logo-holder mx-auto">
        <svg id="atlascope-logo-svg" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 83.54 15.25">
    
            <path class="cls-2" d="M2.56,11.99H0L2.88,3.26h3.24l2.88,8.73h-2.56l-1.91-6.32h-.07l-1.91,6.32Zm-.48-3.44H6.89v1.77H2.08v-1.77Z"/>
            <path class="cls-2" d="M9.69,5.17v-1.91h7.59v1.91h-2.62v6.82h-2.34V5.17h-2.62Z"/>
            <path class="cls-2" d="M19.36,11.99V3.26h2.37v6.82h3.53v1.91h-5.9Z"/>
            <path class="cls-2" d="M29.68,11.99h-2.56l2.88-8.73h3.24l2.88,8.73h-2.56l-1.91-6.32h-.07l-1.91,6.32Zm-.48-3.44h4.81v1.77h-4.81v-1.77Z"/>
            <path class="cls-2" d="M42.52,5.99c-.02-.28-.13-.51-.32-.66-.19-.16-.48-.24-.86-.24-.24,0-.44,.03-.6,.09s-.27,.14-.34,.24c-.07,.1-.11,.21-.11,.34,0,.11,.01,.2,.06,.28,.04,.08,.11,.16,.21,.23,.1,.07,.22,.13,.37,.18,.15,.05,.33,.1,.54,.15l.72,.15c.48,.1,.9,.24,1.24,.4s.62,.36,.84,.59c.22,.23,.38,.48,.48,.76,.1,.28,.16,.59,.16,.92,0,.57-.15,1.06-.43,1.46-.28,.4-.69,.7-1.22,.91-.53,.21-1.16,.31-1.9,.31s-1.42-.11-1.98-.34c-.56-.22-1-.57-1.31-1.04-.31-.47-.47-1.07-.47-1.8h2.25c.01,.27,.08,.49,.2,.67,.12,.18,.29,.32,.51,.41,.22,.09,.48,.14,.78,.14,.25,0,.46-.03,.64-.09s.3-.15,.39-.26c.09-.11,.13-.24,.14-.38,0-.13-.05-.25-.13-.35-.08-.1-.22-.19-.41-.27-.19-.08-.45-.16-.77-.23l-.87-.19c-.77-.17-1.38-.45-1.83-.84s-.67-.93-.66-1.61c0-.55,.15-1.04,.45-1.46s.72-.74,1.25-.97,1.14-.35,1.83-.35,1.31,.12,1.83,.35,.91,.57,1.19,.99c.28,.43,.42,.93,.42,1.5h-2.27Z"/>
            <path class="cls-2" d="M55.16,6.53h-2.4c-.02-.2-.06-.38-.13-.54-.07-.16-.17-.3-.3-.42-.13-.12-.28-.21-.46-.27-.18-.06-.38-.1-.61-.1-.4,0-.73,.1-1.01,.29-.27,.19-.48,.47-.62,.83-.14,.36-.21,.79-.21,1.3,0,.53,.07,.98,.22,1.34s.35,.63,.62,.81c.27,.18,.6,.27,.98,.27,.22,0,.42-.03,.59-.08,.17-.06,.32-.14,.45-.24s.23-.23,.31-.38c.08-.15,.14-.32,.16-.5l2.4,.02c-.03,.37-.13,.75-.31,1.13-.18,.38-.43,.73-.76,1.06-.33,.32-.73,.58-1.22,.78-.48,.2-1.04,.29-1.68,.29-.8,0-1.52-.17-2.15-.52s-1.14-.85-1.5-1.52c-.37-.67-.55-1.48-.55-2.45s.19-1.79,.56-2.46,.88-1.17,1.52-1.51,1.35-.51,2.13-.51c.55,0,1.06,.08,1.52,.23,.46,.15,.87,.37,1.22,.66,.35,.29,.63,.64,.84,1.06,.21,.42,.34,.9,.39,1.44Z"/>
            <path class="cls-2" d="M68.18,11.99V3.26h3.77c.65,0,1.21,.13,1.7,.38s.86,.62,1.13,1.08c.27,.46,.4,1,.4,1.62s-.14,1.17-.42,1.62c-.28,.46-.67,.81-1.16,1.06-.5,.25-1.08,.37-1.75,.37h-2.25v-1.84h1.77c.28,0,.52-.05,.71-.15,.2-.1,.35-.24,.46-.42,.11-.18,.16-.4,.16-.64s-.05-.46-.16-.64c-.11-.18-.26-.31-.46-.41-.2-.1-.44-.14-.71-.14h-.84v6.84h-2.37Z"/>
            <path class="cls-2" d="M77.25,11.99V3.26h6.29v1.91h-3.92v1.5h3.6v1.91h-3.6v1.5h3.9v1.91h-6.27Z"/>
            <g>
              <rect class="cls-2" x="56.4" width="10.54" height="15.25"/>
              <circle class="cls-1" cx="61.67" cy="7.62" r="{$r}"/>
            </g>
          </svg>
    </div>
    
    <style>
    
    .atlascope-logo-holder {
        width: 100%;
    }
    
    .cls-1 {
        fill: white;
    }
    
    </style>