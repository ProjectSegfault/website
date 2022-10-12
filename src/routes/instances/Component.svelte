<script lang="ts">
	import { CardInner, LinksOuter, Link } from "$lib/Card";

	export let name: string;
	export let description: string;
	export let icon: string;
	export let website: string;
	export let projectWebsite: string;
	export let status: number;
</script>

<div class="status-wrapper">
    <CardInner title={name} {description} {icon} position={status === 200 ? "Operational" : "Down"} positionColor={status === 200 ? "text-green" : "text-red"}>
        <LinksOuter>
            <Link url={website} class="web">
                <div class="withText">
                    <div class="i-fa6-solid:globe" />
                    <span>Instance link</span>
                </div>
            </Link>
            <Link url={projectWebsite} class="link">
                <div class="withText">
                    <div class="i-fa6-solid:circle-info" />
                    <span>Project website</span>
                </div>
            </Link>
        </LinksOuter>
    </CardInner>
</div>

<style>
	.withText {
		display: flex;
		align-items: center;
		gap: 4px;
		font-size: medium;
	}
</style>