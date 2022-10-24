package keeper_test

import (
	"context"
	"testing"

	keepertest "github.com/aljo242/test/testutil/keeper"
	"github.com/aljo242/test/x/test/keeper"
	"github.com/aljo242/test/x/test/types"
	sdk "github.com/cosmos/cosmos-sdk/types"
)

func setupMsgServer(t testing.TB) (types.MsgServer, context.Context) {
	k, ctx := keepertest.TestKeeper(t)
	return keeper.NewMsgServerImpl(*k), sdk.WrapSDKContext(ctx)
}
