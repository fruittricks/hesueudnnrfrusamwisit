(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
    [2888],
    {
      22804: function (s, o, a) {
        Object.defineProperty(o, "__esModule", { value: !0 });
        let {
            Decimal: c,
            objectEnumValues: g,
            makeStrictEnum: w,
            Public: k,
            detectRuntime: x,
          } = a(73847),
          P = {};
        (o.Prisma = P),
          (o.$Enums = {}),
          (P.prismaVersion = {
            client: "5.6.0",
            engine: "e95e739751f42d8ca026f6b910f5a2dc5adeaeee",
          }),
          (P.PrismaClientKnownRequestError = () => {
            throw Error(`PrismaClientKnownRequestError is unable to be run ${runtimeDescription}.
  In case this error is unexpected for you, please report it in https://github.com/prisma/prisma/issues`);
          }),
          (P.PrismaClientUnknownRequestError = () => {
            throw Error(`PrismaClientUnknownRequestError is unable to be run ${runtimeDescription}.
  In case this error is unexpected for you, please report it in https://github.com/prisma/prisma/issues`);
          }),
          (P.PrismaClientRustPanicError = () => {
            throw Error(`PrismaClientRustPanicError is unable to be run ${runtimeDescription}.
  In case this error is unexpected for you, please report it in https://github.com/prisma/prisma/issues`);
          }),
          (P.PrismaClientInitializationError = () => {
            throw Error(`PrismaClientInitializationError is unable to be run ${runtimeDescription}.
  In case this error is unexpected for you, please report it in https://github.com/prisma/prisma/issues`);
          }),
          (P.PrismaClientValidationError = () => {
            throw Error(`PrismaClientValidationError is unable to be run ${runtimeDescription}.
  In case this error is unexpected for you, please report it in https://github.com/prisma/prisma/issues`);
          }),
          (P.NotFoundError = () => {
            throw Error(`NotFoundError is unable to be run ${runtimeDescription}.
  In case this error is unexpected for you, please report it in https://github.com/prisma/prisma/issues`);
          }),
          (P.Decimal = c),
          (P.sql = () => {
            throw Error(`sqltag is unable to be run ${runtimeDescription}.
  In case this error is unexpected for you, please report it in https://github.com/prisma/prisma/issues`);
          }),
          (P.empty = () => {
            throw Error(`empty is unable to be run ${runtimeDescription}.
  In case this error is unexpected for you, please report it in https://github.com/prisma/prisma/issues`);
          }),
          (P.join = () => {
            throw Error(`join is unable to be run ${runtimeDescription}.
  In case this error is unexpected for you, please report it in https://github.com/prisma/prisma/issues`);
          }),
          (P.raw = () => {
            throw Error(`raw is unable to be run ${runtimeDescription}.
  In case this error is unexpected for you, please report it in https://github.com/prisma/prisma/issues`);
          }),
          (P.validator = k.validator),
          (P.getExtensionContext = () => {
            throw Error(`Extensions.getExtensionContext is unable to be run ${runtimeDescription}.
  In case this error is unexpected for you, please report it in https://github.com/prisma/prisma/issues`);
          }),
          (P.defineExtension = () => {
            throw Error(`Extensions.defineExtension is unable to be run ${runtimeDescription}.
  In case this error is unexpected for you, please report it in https://github.com/prisma/prisma/issues`);
          }),
          (P.DbNull = g.instances.DbNull),
          (P.JsonNull = g.instances.JsonNull),
          (P.AnyNull = g.instances.AnyNull),
          (P.NullTypes = {
            DbNull: g.classes.DbNull,
            JsonNull: g.classes.JsonNull,
            AnyNull: g.classes.AnyNull,
          }),
          (o.Prisma.TransactionIsolationLevel = w({
            ReadUncommitted: "ReadUncommitted",
            ReadCommitted: "ReadCommitted",
            RepeatableRead: "RepeatableRead",
            Serializable: "Serializable",
          })),
          (o.Prisma.TenantScalarFieldEnum = {
            id: "id",
            name: "name",
            htmlName: "htmlName",
            rolloverValue: "rolloverValue",
            appLogo: "appLogo",
            gameLogo: "gameLogo",
            favicon: "favicon",
            welcomeVideo: "welcomeVideo",
            description: "description",
            gtmId: "gtmId",
            enableWelcomeVideo: "enableWelcomeVideo",
            enablePasswordConfirmation: "enablePasswordConfirmation",
            passwordMinLength: "passwordMinLength",
            domain: "domain",
            email: "email",
            gameDifficulty: "gameDifficulty",
            freeGameDifficulty: "freeGameDifficulty",
            presellGameDifficulty: "presellGameDifficulty",
            demoUserDifficulty: "demoUserDifficulty",
            withdrawCreationStrategy: "withdrawCreationStrategy",
            defaultRevenueShareRemunerationType:
              "defaultRevenueShareRemunerationType",
            defaultRevenueShareAccuracy: "defaultRevenueShareAccuracy",
            defaultRevenueShareValue: "defaultRevenueShareValue",
            defaultFirstDepositRemunerationType:
              "defaultFirstDepositRemunerationType",
            defaultFirstDepositAccuracy: "defaultFirstDepositAccuracy",
            defaultFirstDepositValue: "defaultFirstDepositValue",
            affiliateSupportUrl: "affiliateSupportUrl",
            tawkTo: "tawkTo",
            primePagApiKey: "primePagApiKey",
            primePagApiSecret: "primePagApiSecret",
            primePagWebhookSecret: "primePagWebhookSecret",
            slug: "slug",
            enableEmailConfirmation: "enableEmailConfirmation",
            minWithdrawal: "minWithdrawal",
            enableRevenueShare: "enableRevenueShare",
            enableFirstDeposit: "enableFirstDeposit",
            withdrawMaxWaitingTime: "withdrawMaxWaitingTime",
            createdAt: "createdAt",
            updatedAt: "updatedAt",
          }),
          (o.Prisma.UpsellScalarFieldEnum = {
            id: "id",
            tenantId: "tenantId",
            name: "name",
            url: "url",
            logo: "logo",
            createdAt: "createdAt",
            updatedAt: "updatedAt",
          }),
          (o.Prisma.WebhookScalarFieldEnum = {
            id: "id",
            tenantId: "tenantId",
            secret: "secret",
            url: "url",
            event: "event",
            createdAt: "createdAt",
            updatedAt: "updatedAt",
          }),
          (o.Prisma.WithdrawScalarFieldEnum = {
            id: "id",
            userId: "userId",
            value: "value",
            reference: "reference",
            destination: "destination",
            status: "status",
            tenantId: "tenantId",
            createdAt: "createdAt",
            updatedAt: "updatedAt",
          }),
          (o.Prisma.MoneyBundleScalarFieldEnum = {
            id: "id",
            bonus: "bonus",
            value: "value",
            tenantId: "tenantId",
            createdAt: "createdAt",
            updatedAt: "updatedAt",
          }),
          (o.Prisma.RemarketingBundleScalarFieldEnum = {
            id: "id",
            bonus: "bonus",
            value: "value",
            tenantId: "tenantId",
            createdAt: "createdAt",
            updatedAt: "updatedAt",
          }),
          (o.Prisma.AccountScalarFieldEnum = {
            id: "id",
            userId: "userId",
            providerType: "providerType",
            providerId: "providerId",
            providerAccountId: "providerAccountId",
            refreshToken: "refreshToken",
            accessToken: "accessToken",
            accessTokenExpires: "accessTokenExpires",
            createdAt: "createdAt",
            updatedAt: "updatedAt",
            tenantId: "tenantId",
          }),
          (o.Prisma.OrderScalarFieldEnum = {
            id: "id",
            ref: "ref",
            userId: "userId",
            value: "value",
            content: "content",
            tenantId: "tenantId",
            createdAt: "createdAt",
            updatedAt: "updatedAt",
            rollover: "rollover",
            payerName: "payerName",
            payerDocument: "payerDocument",
            remarketing: "remarketing",
            status: "status",
            bonus: "bonus",
          }),
          (o.Prisma.SessionScalarFieldEnum = {
            id: "id",
            sessionToken: "sessionToken",
            userId: "userId",
            expires: "expires",
            accessToken: "accessToken",
            createdAt: "createdAt",
            updatedAt: "updatedAt",
            tenantId: "tenantId",
          }),
          (o.Prisma.UserScalarFieldEnum = {
            id: "id",
            name: "name",
            email: "email",
            emailVerified: "emailVerified",
            password: "password",
            isDemo: "isDemo",
            image: "image",
            createdAt: "createdAt",
            updatedAt: "updatedAt",
            balance: "balance",
            realBalance: "realBalance",
            role: "role",
            phone: "phone",
            affiliateId: "affiliateId",
            tenantId: "tenantId",
            utms: "utms",
            deletedAt: "deletedAt",
          }),
          (o.Prisma.RevenueShareScalarFieldEnum = {
            id: "id",
            value: "value",
            displayValue: "displayValue",
            remunerationType: "remunerationType",
            accuracy: "accuracy",
            balance: "balance",
            revenue: "revenue",
            createdAt: "createdAt",
            updatedAt: "updatedAt",
            deletedAt: "deletedAt",
            userId: "userId",
            tenantId: "tenantId",
          }),
          (o.Prisma.FirstDepositScalarFieldEnum = {
            id: "id",
            value: "value",
            displayValue: "displayValue",
            remunerationType: "remunerationType",
            accuracy: "accuracy",
            balance: "balance",
            revenue: "revenue",
            createdAt: "createdAt",
            updatedAt: "updatedAt",
            deletedAt: "deletedAt",
            userId: "userId",
            tenantId: "tenantId",
          }),
          (o.Prisma.BetRequestScalarFieldEnum = {
            id: "id",
            amount: "amount",
            userId: "userId",
            status: "status",
            createdAt: "createdAt",
            updatedAt: "updatedAt",
            gain: "gain",
            tenantId: "tenantId",
          }),
          (o.Prisma.VerificationTokenScalarFieldEnum = {
            identifier: "identifier",
            token: "token",
            expires: "expires",
            tenantId: "tenantId",
          }),
          (o.Prisma.AuditScalarFieldEnum = {
            id: "id",
            date: "date",
            resource: "resource",
            action: "action",
            payload: "payload",
            authorId: "authorId",
            tenantId: "tenantId",
          }),
          (o.Prisma.AffiliationOrdersWithAuditedDataScalarFieldEnum = {
            id: "id",
            ref: "ref",
            userId: "userId",
            value: "value",
            content: "content",
            tenantId: "tenantId",
            createdAt: "createdAt",
            updatedAt: "updatedAt",
            rollover: "rollover",
            remarketing: "remarketing",
            status: "status",
            rowNumberByUser: "rowNumberByUser",
            lastUpdate: "lastUpdate",
            last_enable_first_deposit_audited:
              "last_enable_first_deposit_audited",
            last_first_deposit_audited: "last_first_deposit_audited",
            last_global_first_deposit_audited:
              "last_global_first_deposit_audited",
            last_global_enable_first_deposit_audited:
              "last_global_enable_first_deposit_audited",
            last_first_deposit_remuneration_type_audited:
              "last_first_deposit_remuneration_type_audited",
            last_global_first_deposit_remuneration_type_audited:
              "last_global_first_deposit_remuneration_type_audited",
            last_enable_revenue_share_audited:
              "last_enable_revenue_share_audited",
            last_revenue_share_audited: "last_revenue_share_audited",
            last_global_revenue_share_audited:
              "last_global_revenue_share_audited",
            last_global_enable_revenue_share_audited:
              "last_global_enable_revenue_share_audited",
            last_revenue_share_remuneration_type_audited:
              "last_revenue_share_remuneration_type_audited",
            last_global_revenue_share_remuneration_type_audited:
              "last_global_revenue_share_remuneration_type_audited",
          }),
          (o.Prisma.SortOrder = { asc: "asc", desc: "desc" }),
          (o.Prisma.NullableJsonNullValueInput = {
            DbNull: P.DbNull,
            JsonNull: P.JsonNull,
          }),
          (o.Prisma.QueryMode = {
            default: "default",
            insensitive: "insensitive",
          }),
          (o.Prisma.NullsOrder = { first: "first", last: "last" }),
          (o.Prisma.JsonNullValueFilter = {
            DbNull: P.DbNull,
            JsonNull: P.JsonNull,
            AnyNull: P.AnyNull,
          }),
          (o.Difficult = o.$Enums.Difficult =
            { EASY: "EASY", MEDIUM: "MEDIUM", HARD: "HARD" }),
          (o.WithdrawCreationStrategy = o.$Enums.WithdrawCreationStrategy =
            {
              AUTOMATIC: "AUTOMATIC",
              AFFILIATE_ONLY: "AFFILIATE_ONLY",
              MANUAL: "MANUAL",
            }),
          (o.RemunerationType = o.$Enums.RemunerationType =
            { PERCENTAGE: "PERCENTAGE", FIXED: "FIXED" }),
          (o.WithdrawStatus = o.$Enums.WithdrawStatus =
            { PENDING: "PENDING", APPROVED: "APPROVED", REJECTED: "REJECTED" }),
          (o.Role = o.$Enums.Role =
            {
              COLLABORATOR: "COLLABORATOR",
              OWNER: "OWNER",
              PLAYER: "PLAYER",
              MANAGER: "MANAGER",
            }),
          (o.Prisma.ModelName = {
            Tenant: "Tenant",
            Upsell: "Upsell",
            Webhook: "Webhook",
            Withdraw: "Withdraw",
            MoneyBundle: "MoneyBundle",
            RemarketingBundle: "RemarketingBundle",
            Account: "Account",
            Order: "Order",
            Session: "Session",
            User: "User",
            RevenueShare: "RevenueShare",
            FirstDeposit: "FirstDeposit",
            BetRequest: "BetRequest",
            VerificationToken: "VerificationToken",
            Audit: "Audit",
            AffiliationOrdersWithAuditedData: "AffiliationOrdersWithAuditedData",
          }),
          (o.PrismaClient = class {
            constructor() {
              return new Proxy(this, {
                get(s, o) {
                  let a = x(),
                    c = {
                      workerd: "Cloudflare Workers",
                      deno: "Deno and Deno Deploy",
                      netlify: "Netlify Edge Functions",
                      "edge-light": "Vercel Edge Functions",
                    }[a],
                    g = "PrismaClient is unable to run in ";
                  throw (
                    (void 0 !== c
                      ? (g +=
                          c +
                          ". As an alternative, try Accelerate: https://pris.ly/d/accelerate.")
                      : (g +=
                          "this browser environment, or has been bundled for the browser (running in `" +
                          a +
                          "`)."),
                    Error(
                      (g += `
  If this is unexpected, please open an issue: https://github.com/prisma/prisma/issues`)
                    ))
                  );
                },
              });
            }
          }),
          Object.assign(o, P);
      },
      70385: function (s, o, a) {
        let c = a(22804);
        s.exports = c;
      },
      73847: function (s) {
        "use strict";
        var o = Object.defineProperty,
          a = Object.getOwnPropertyDescriptor,
          c = Object.getOwnPropertyNames,
          g = Object.prototype.hasOwnProperty,
          Ce = (s, a) => {
            for (var c in a) o(s, c, { get: a[c], enumerable: !0 });
          },
          w = {};
        Ce(w, {
          Decimal: () => ev,
          Public: () => k,
          detectRuntime: () => He,
          makeStrictEnum: () => Pe,
          objectEnumValues: () => W,
        }),
          (s.exports = ((s, w, k, x) => {
            if ((w && "object" == typeof w) || "function" == typeof w)
              for (let k of c(w))
                g.call(s, k) ||
                  void 0 === k ||
                  o(s, k, {
                    get: () => w[k],
                    enumerable: !(x = a(w, k)) || x.enumerable,
                  });
            return s;
          })(o({}, "__esModule", { value: !0 }), w));
        var k = {};
        function Me(...s) {
          return (s) => s;
        }
        Ce(k, { validator: () => Me });
        var x = Symbol(),
          P = new WeakMap(),
          A = class {
            constructor(s) {
              s === x
                ? P.set(this, "Prisma.".concat(this._getName()))
                : P.set(
                    this,
                    "new Prisma."
                      .concat(this._getNamespace(), ".")
                      .concat(this._getName(), "()")
                  );
            }
            _getName() {
              return this.constructor.name;
            }
            toString() {
              return P.get(this);
            }
          },
          j = class extends A {
            _getNamespace() {
              return "NullTypes";
            }
          },
          D = class extends j {};
        me(D, "DbNull");
        var z = class extends j {};
        me(z, "JsonNull");
        var $ = class extends j {};
        me($, "AnyNull");
        var W = {
          classes: { DbNull: D, JsonNull: z, AnyNull: $ },
          instances: { DbNull: new D(x), JsonNull: new z(x), AnyNull: new $(x) },
        };
        function me(s, o) {
          Object.defineProperty(s, "name", { value: o, configurable: !0 });
        }
        var G = new Set([
          "toJSON",
          "$$typeof",
          "asymmetricMatch",
          Symbol.iterator,
          Symbol.toStringTag,
          Symbol.isConcatSpreadable,
          Symbol.toPrimitive,
        ]);
        function Pe(s) {
          return new Proxy(s, {
            get(s, o) {
              if (o in s) return s[o];
              if (!G.has(o))
                throw TypeError("Invalid enum value: ".concat(String(o)));
            },
          });
        }
        var V,
          K,
          X = "0123456789abcdef",
          Z =
            "2.3025850929940456840179914546843642076011014886287729760333279009675726096773524802359972050895982983419677840422862486334095254650828067566662873690987816894829072083255546808437998948262331985283935053089653777326288461633662222876982198867465436674744042432743651550489343149393914796194044002221051017141748003688084012647080685567743216228355220114804663715659121373450747856947683463616792101806445070648000277502684916746550586856935673420670581136429224554405758925724208241314695689016758940256776311356919292033376587141660230105703089634572075440370847469940168269282808481184289314848524948644871927809676271275775397027668605952496716674183485704422507197965004714951050492214776567636938662976979522110718264549734772662425709429322582798502585509785265383207606726317164309505995087807523710333101197857547331541421808427543863591778117054309827482385045648019095610299291824318237525357709750539565187697510374970888692180205189339507238539205144634197265287286965110862571492198849978748873771345686209167058",
          Y =
            "3.1415926535897932384626433832795028841971693993751058209749445923078164062862089986280348253421170679821480865132823066470938446095505822317253594081284811174502841027019385211055596446229489549303819644288109756659334461284756482337867831652712019091456485669234603486104543266482133936072602491412737245870066063155881748815209209628292540917153643678925903600113305305488204665213841469519415116094330572703657595919530921861173819326117931051185480744623799627495673518857527248912279381830119491298336733624406566430860213949463952247371907021798609437027705392171762931767523846748184676694051320005681271452635608277857713427577896091736371787214684409012249534301465495853710507922796892589235420199561121290219608640344181598136297747713099605187072113499999983729780499510597317328160963185950244594553469083026425223082533446850352619311881710100031378387528865875332083814206171776691473035982534904287554687311595628638823537875937519577818577805321712268066130019278766111959092164201989380952572010654858632789",
          ee = {
            precision: 20,
            rounding: 4,
            modulo: 1,
            toExpNeg: -7,
            toExpPos: 21,
            minE: -9e15,
            maxE: 9e15,
            crypto: !1,
          },
          et = !0,
          er = "[DecimalError] ",
          en = er + "Invalid argument: ",
          ei = er + "Precision limit exceeded",
          es = er + "crypto unavailable",
          eo = "[object Decimal]",
          ea = Math.floor,
          eu = Math.pow,
          el = /^0b([01]+(\.[01]*)?|\.[01]+)(p[+-]?\d+)?$/i,
          ec = /^0x([0-9a-f]+(\.[0-9a-f]*)?|\.[0-9a-f]+)(p[+-]?\d+)?$/i,
          eh = /^0o([0-7]+(\.[0-7]*)?|\.[0-7]+)(p[+-]?\d+)?$/i,
          ed = /^(\d+(\.\d*)?|\.\d+)(e[+-]?\d+)?$/i,
          ef = Z.length - 1,
          ep = Y.length - 1,
          eg = { toStringTag: eo };
        function O(s) {
          var o,
            a,
            c,
            g = s.length - 1,
            w = "",
            k = s[0];
          if (g > 0) {
            for (w += k, o = 1; o < g; o++)
              (a = 7 - (c = s[o] + "").length) && (w += U(a)), (w += c);
            (a = 7 - (c = (k = s[o]) + "").length) && (w += U(a));
          } else if (0 === k) return "0";
          for (; k % 10 == 0; ) k /= 10;
          return w + k;
        }
        function q(s, o, a) {
          if (s !== ~~s || s < o || s > a) throw Error(en + s);
        }
        function Q(s, o, a, c) {
          var g, w, k, x;
          for (w = s[0]; w >= 10; w /= 10) --o;
          return (
            --o < 0
              ? ((o += 7), (g = 0))
              : ((g = Math.ceil((o + 1) / 7)), (o %= 7)),
            (w = eu(10, 7 - o)),
            (x = s[g] % w | 0),
            null == c
              ? o < 3
                ? (0 == o ? (x = (x / 100) | 0) : 1 == o && (x = (x / 10) | 0),
                  (k =
                    (a < 4 && 99999 == x) ||
                    (a > 3 && 49999 == x) ||
                    5e4 == x ||
                    0 == x))
                : (k =
                    (((a < 4 && x + 1 == w) || (a > 3 && x + 1 == w / 2)) &&
                      ((s[g + 1] / w / 100) | 0) == eu(10, o - 2) - 1) ||
                    ((x == w / 2 || 0 == x) && ((s[g + 1] / w / 100) | 0) == 0))
              : o < 4
              ? (0 == o
                  ? (x = (x / 1e3) | 0)
                  : 1 == o
                  ? (x = (x / 100) | 0)
                  : 2 == o && (x = (x / 10) | 0),
                (k = ((c || a < 4) && 9999 == x) || (!c && a > 3 && 4999 == x)))
              : (k =
                  (((c || a < 4) && x + 1 == w) ||
                    (!c && a > 3 && x + 1 == w / 2)) &&
                  ((s[g + 1] / w / 1e3) | 0) == eu(10, o - 3) - 1),
            k
          );
        }
        function ie(s, o, a) {
          for (var c, g, w = [0], k = 0, x = s.length; k < x; ) {
            for (g = w.length; g--; ) w[g] *= o;
            for (w[0] += X.indexOf(s.charAt(k++)), c = 0; c < w.length; c++)
              w[c] > a - 1 &&
                (void 0 === w[c + 1] && (w[c + 1] = 0),
                (w[c + 1] += (w[c] / a) | 0),
                (w[c] %= a));
          }
          return w.reverse();
        }
        (eg.absoluteValue = eg.abs =
          function () {
            var s = new this.constructor(this);
            return s.s < 0 && (s.s = 1), p(s);
          }),
          (eg.ceil = function () {
            return p(new this.constructor(this), this.e + 1, 2);
          }),
          (eg.clampedTo = eg.clamp =
            function (s, o) {
              var a = this.constructor;
              if (((s = new a(s)), (o = new a(o)), !s.s || !o.s))
                return new a(NaN);
              if (s.gt(o)) throw Error(en + o);
              return 0 > this.cmp(s) ? s : this.cmp(o) > 0 ? o : new a(this);
            }),
          (eg.comparedTo = eg.cmp =
            function (s) {
              var o,
                a,
                c,
                g,
                w = this.d,
                k = (s = new this.constructor(s)).d,
                x = this.s,
                P = s.s;
              if (!w || !k)
                return x && P
                  ? x !== P
                    ? x
                    : w === k
                    ? 0
                    : !w ^ (x < 0)
                    ? 1
                    : -1
                  : NaN;
              if (!w[0] || !k[0]) return w[0] ? x : k[0] ? -P : 0;
              if (x !== P) return x;
              if (this.e !== s.e) return (this.e > s.e) ^ (x < 0) ? 1 : -1;
              for (
                c = w.length, g = k.length, o = 0, a = c < g ? c : g;
                o < a;
                ++o
              )
                if (w[o] !== k[o]) return (w[o] > k[o]) ^ (x < 0) ? 1 : -1;
              return c === g ? 0 : (c > g) ^ (x < 0) ? 1 : -1;
            }),
          (eg.cosine = eg.cos =
            function () {
              var s,
                o,
                a = this,
                c = a.constructor;
              return a.d
                ? a.d[0]
                  ? ((s = c.precision),
                    (o = c.rounding),
                    (c.precision = s + Math.max(a.e, a.sd()) + 7),
                    (c.rounding = 1),
                    (a = (function (s, o) {
                      var a, c, g;
                      if (o.isZero()) return o;
                      (c = o.d.length) < 32
                        ? (g = (1 / fe(4, (a = Math.ceil(c / 3)))).toString())
                        : ((a = 16), (g = "2.3283064365386962890625e-10")),
                        (s.precision += a),
                        (o = J(s, 1, o.times(g), new s(1)));
                      for (var w = a; w--; ) {
                        var k = o.times(o);
                        o = k.times(k).minus(k).times(8).plus(1);
                      }
                      return (s.precision -= a), o;
                    })(c, Be(c, a))),
                    (c.precision = s),
                    (c.rounding = o),
                    p(2 == K || 3 == K ? a.neg() : a, s, o, !0))
                  : new c(1)
                : new c(NaN);
            }),
          (eg.cubeRoot = eg.cbrt =
            function () {
              var s,
                o,
                a,
                c,
                g,
                w,
                k,
                x,
                P,
                A,
                j = this.constructor;
              if (!this.isFinite() || this.isZero()) return new j(this);
              for (
                et = !1,
                  (w = this.s * eu(this.s * this, 1 / 3)) && Math.abs(w) != 1 / 0
                    ? (c = new j(w.toString()))
                    : ((a = O(this.d)),
                      (w = ((s = this.e) - a.length + 1) % 3) &&
                        (a += 1 == w || -2 == w ? "0" : "00"),
                      (w = eu(a, 1 / 3)),
                      (s = ea((s + 1) / 3) - (s % 3 == (s < 0 ? -1 : 2))),
                      (a =
                        w == 1 / 0
                          ? "5e" + s
                          : (a = w.toExponential()).slice(0, a.indexOf("e") + 1) +
                            s),
                      ((c = new j(a)).s = this.s)),
                  k = (s = j.precision) + 3;
                ;
  
              )
                if (
                  ((c = ey(
                    (A = (P = (x = c).times(x).times(x)).plus(this))
                      .plus(this)
                      .times(x),
                    A.plus(P),
                    k + 2,
                    1
                  )),
                  O(x.d).slice(0, k) === (a = O(c.d)).slice(0, k))
                ) {
                  if (
                    "9999" != (a = a.slice(k - 3, k + 1)) &&
                    (g || "4999" != a)
                  ) {
                    (+a && (+a.slice(1) || "5" != a.charAt(0))) ||
                      (p(c, s + 1, 1), (o = !c.times(c).times(c).eq(this)));
                    break;
                  }
                  if (!g && (p(x, s + 1, 0), x.times(x).times(x).eq(this))) {
                    c = x;
                    break;
                  }
                  (k += 4), (g = 1);
                }
              return (et = !0), p(c, s, j.rounding, o);
            }),
          (eg.decimalPlaces = eg.dp =
            function () {
              var s,
                o = this.d,
                a = NaN;
              if (o) {
                if (((a = ((s = o.length - 1) - ea(this.e / 7)) * 7), (s = o[s])))
                  for (; s % 10 == 0; s /= 10) a--;
                a < 0 && (a = 0);
              }
              return a;
            }),
          (eg.dividedBy = eg.div =
            function (s) {
              return ey(this, new this.constructor(s));
            }),
          (eg.dividedToIntegerBy = eg.divToInt =
            function (s) {
              var o = this.constructor;
              return p(ey(this, new o(s), 0, 1, 1), o.precision, o.rounding);
            }),
          (eg.equals = eg.eq =
            function (s) {
              return 0 === this.cmp(s);
            }),
          (eg.floor = function () {
            return p(new this.constructor(this), this.e + 1, 3);
          }),
          (eg.greaterThan = eg.gt =
            function (s) {
              return this.cmp(s) > 0;
            }),
          (eg.greaterThanOrEqualTo = eg.gte =
            function (s) {
              var o = this.cmp(s);
              return 1 == o || 0 === o;
            }),
          (eg.hyperbolicCosine = eg.cosh =
            function () {
              var s,
                o,
                a,
                c,
                g,
                w = this,
                k = w.constructor,
                x = new k(1);
              if (!w.isFinite()) return new k(w.s ? 1 / 0 : NaN);
              if (w.isZero()) return x;
              (a = k.precision),
                (c = k.rounding),
                (k.precision = a + Math.max(w.e, w.sd()) + 4),
                (k.rounding = 1),
                (g = w.d.length) < 32
                  ? (o = (1 / fe(4, (s = Math.ceil(g / 3)))).toString())
                  : ((s = 16), (o = "2.3283064365386962890625e-10")),
                (w = J(k, 1, w.times(o), new k(1), !0));
              for (var P, A = s, j = new k(8); A--; )
                (P = w.times(w)), (w = x.minus(P.times(j.minus(P.times(j)))));
              return p(w, (k.precision = a), (k.rounding = c), !0);
            }),
          (eg.hyperbolicSine = eg.sinh =
            function () {
              var s,
                o,
                a,
                c,
                g = this,
                w = g.constructor;
              if (!g.isFinite() || g.isZero()) return new w(g);
              if (
                ((o = w.precision),
                (a = w.rounding),
                (w.precision = o + Math.max(g.e, g.sd()) + 4),
                (w.rounding = 1),
                (c = g.d.length) < 3)
              )
                g = J(w, 2, g, g, !0);
              else {
                (s = (s = 1.4 * Math.sqrt(c)) > 16 ? 16 : 0 | s),
                  (g = J(w, 2, (g = g.times(1 / fe(5, s))), g, !0));
                for (var k, x = new w(5), P = new w(16), A = new w(20); s--; )
                  (k = g.times(g)),
                    (g = g.times(x.plus(k.times(P.times(k).plus(A)))));
              }
              return (w.precision = o), (w.rounding = a), p(g, o, a, !0);
            }),
          (eg.hyperbolicTangent = eg.tanh =
            function () {
              var s,
                o,
                a = this.constructor;
              return this.isFinite()
                ? this.isZero()
                  ? new a(this)
                  : ((s = a.precision),
                    (o = a.rounding),
                    (a.precision = s + 7),
                    (a.rounding = 1),
                    ey(
                      this.sinh(),
                      this.cosh(),
                      (a.precision = s),
                      (a.rounding = o)
                    ))
                : new a(this.s);
            }),
          (eg.inverseCosine = eg.acos =
            function () {
              var s,
                o = this,
                a = o.constructor,
                c = o.abs().cmp(1),
                g = a.precision,
                w = a.rounding;
              return -1 !== c
                ? 0 === c
                  ? o.isNeg()
                    ? R(a, g, w)
                    : new a(0)
                  : new a(NaN)
                : o.isZero()
                ? R(a, g + 4, w).times(0.5)
                : ((a.precision = g + 6),
                  (a.rounding = 1),
                  (o = o.asin()),
                  (s = R(a, g + 4, w).times(0.5)),
                  (a.precision = g),
                  (a.rounding = w),
                  s.minus(o));
            }),
          (eg.inverseHyperbolicCosine = eg.acosh =
            function () {
              var s,
                o,
                a = this,
                c = a.constructor;
              return a.lte(1)
                ? new c(a.eq(1) ? 0 : NaN)
                : a.isFinite()
                ? ((s = c.precision),
                  (o = c.rounding),
                  (c.precision = s + Math.max(Math.abs(a.e), a.sd()) + 4),
                  (c.rounding = 1),
                  (et = !1),
                  (a = a.times(a).minus(1).sqrt().plus(a)),
                  (et = !0),
                  (c.precision = s),
                  (c.rounding = o),
                  a.ln())
                : new c(a);
            }),
          (eg.inverseHyperbolicSine = eg.asinh =
            function () {
              var s,
                o,
                a = this,
                c = a.constructor;
              return !a.isFinite() || a.isZero()
                ? new c(a)
                : ((s = c.precision),
                  (o = c.rounding),
                  (c.precision = s + 2 * Math.max(Math.abs(a.e), a.sd()) + 6),
                  (c.rounding = 1),
                  (et = !1),
                  (a = a.times(a).plus(1).sqrt().plus(a)),
                  (et = !0),
                  (c.precision = s),
                  (c.rounding = o),
                  a.ln());
            }),
          (eg.inverseHyperbolicTangent = eg.atanh =
            function () {
              var s,
                o,
                a,
                c,
                g = this,
                w = g.constructor;
              return g.isFinite()
                ? g.e >= 0
                  ? new w(g.abs().eq(1) ? g.s / 0 : g.isZero() ? g : NaN)
                  : ((s = w.precision),
                    (o = w.rounding),
                    Math.max((c = g.sd()), s) < -(2 * g.e) - 1
                      ? p(new w(g), s, o, !0)
                      : ((w.precision = a = c - g.e),
                        (g = ey(g.plus(1), new w(1).minus(g), a + s, 1)),
                        (w.precision = s + 4),
                        (w.rounding = 1),
                        (g = g.ln()),
                        (w.precision = s),
                        (w.rounding = o),
                        g.times(0.5)))
                : new w(NaN);
            }),
          (eg.inverseSine = eg.asin =
            function () {
              var s,
                o,
                a,
                c,
                g = this,
                w = g.constructor;
              return g.isZero()
                ? new w(g)
                : ((o = g.abs().cmp(1)),
                  (a = w.precision),
                  (c = w.rounding),
                  -1 !== o
                    ? 0 === o
                      ? (((s = R(w, a + 4, c).times(0.5)).s = g.s), s)
                      : new w(NaN)
                    : ((w.precision = a + 6),
                      (w.rounding = 1),
                      (g = g
                        .div(new w(1).minus(g.times(g)).sqrt().plus(1))
                        .atan()),
                      (w.precision = a),
                      (w.rounding = c),
                      g.times(2)));
            }),
          (eg.inverseTangent = eg.atan =
            function () {
              var s,
                o,
                a,
                c,
                g,
                w,
                k,
                x,
                P,
                A = this,
                j = A.constructor,
                D = j.precision,
                z = j.rounding;
              if (A.isFinite()) {
                if (A.isZero()) return new j(A);
                if (A.abs().eq(1) && D + 4 <= ep)
                  return ((k = R(j, D + 4, z).times(0.25)).s = A.s), k;
              } else {
                if (!A.s) return new j(NaN);
                if (D + 4 <= ep)
                  return ((k = R(j, D + 4, z).times(0.5)).s = A.s), k;
              }
              for (
                j.precision = x = D + 10,
                  j.rounding = 1,
                  s = a = Math.min(28, (x / 7 + 2) | 0);
                s;
                --s
              )
                A = A.div(A.times(A).plus(1).sqrt().plus(1));
              for (
                et = !1,
                  o = Math.ceil(x / 7),
                  c = 1,
                  P = A.times(A),
                  k = new j(A),
                  g = A;
                -1 !== s;
  
              )
                if (
                  ((g = g.times(P)),
                  (w = k.minus(g.div((c += 2)))),
                  (g = g.times(P)),
                  void 0 !== (k = w.plus(g.div((c += 2)))).d[o])
                )
                  for (s = o; k.d[s] === w.d[s] && s--; );
              return (
                a && (k = k.times(2 << (a - 1))),
                (et = !0),
                p(k, (j.precision = D), (j.rounding = z), !0)
              );
            }),
          (eg.isFinite = function () {
            return !!this.d;
          }),
          (eg.isInteger = eg.isInt =
            function () {
              return !!this.d && ea(this.e / 7) > this.d.length - 2;
            }),
          (eg.isNaN = function () {
            return !this.s;
          }),
          (eg.isNegative = eg.isNeg =
            function () {
              return this.s < 0;
            }),
          (eg.isPositive = eg.isPos =
            function () {
              return this.s > 0;
            }),
          (eg.isZero = function () {
            return !!this.d && 0 === this.d[0];
          }),
          (eg.lessThan = eg.lt =
            function (s) {
              return 0 > this.cmp(s);
            }),
          (eg.lessThanOrEqualTo = eg.lte =
            function (s) {
              return 1 > this.cmp(s);
            }),
          (eg.logarithm = eg.log =
            function (s) {
              var o,
                a,
                c,
                g,
                w,
                k,
                x,
                P = this.constructor,
                A = P.precision,
                j = P.rounding;
              if (null == s) (s = new P(10)), (o = !0);
              else {
                if (((a = (s = new P(s)).d), s.s < 0 || !a || !a[0] || s.eq(1)))
                  return new P(NaN);
                o = s.eq(10);
              }
              if (((a = this.d), this.s < 0 || !a || !a[0] || this.eq(1)))
                return new P(
                  a && !a[0] ? -1 / 0 : 1 != this.s ? NaN : a ? 0 : 1 / 0
                );
              if (o) {
                if (a.length > 1) g = !0;
                else {
                  for (c = a[0]; c % 10 == 0; ) c /= 10;
                  g = 1 !== c;
                }
              }
              if (
                ((et = !1),
                Q(
                  (x = ey(
                    B(this, (k = A + 5)),
                    o ? se(P, k + 10) : B(s, k),
                    k,
                    1
                  )).d,
                  (c = A),
                  j
                ))
              )
                do
                  if (
                    ((k += 10),
                    (x = ey(B(this, k), o ? se(P, k + 10) : B(s, k), k, 1)),
                    !g)
                  ) {
                    +O(x.d).slice(c + 1, c + 15) + 1 == 1e14 &&
                      (x = p(x, A + 1, 0));
                    break;
                  }
                while (Q(x.d, (c += 10), j));
              return (et = !0), p(x, A, j);
            }),
          (eg.minus = eg.sub =
            function (s) {
              var o,
                a,
                c,
                g,
                w,
                k,
                x,
                P,
                A,
                j,
                D,
                z,
                $ = this.constructor;
              if (((s = new $(s)), !this.d || !s.d))
                return (
                  this.s && s.s
                    ? this.d
                      ? (s.s = -s.s)
                      : (s = new $(s.d || this.s !== s.s ? this : NaN))
                    : (s = new $(NaN)),
                  s
                );
              if (this.s != s.s) return (s.s = -s.s), this.plus(s);
              if (
                ((A = this.d),
                (z = s.d),
                (x = $.precision),
                (P = $.rounding),
                !A[0] || !z[0])
              ) {
                if (z[0]) s.s = -s.s;
                else {
                  if (!A[0]) return new $(3 === P ? -0 : 0);
                  s = new $(this);
                }
                return et ? p(s, x, P) : s;
              }
              if (
                ((a = ea(s.e / 7)),
                (j = ea(this.e / 7)),
                (A = A.slice()),
                (w = j - a))
              ) {
                for (
                  (D = w < 0)
                    ? ((o = A), (w = -w), (k = z.length))
                    : ((o = z), (a = j), (k = A.length)),
                    w > (c = Math.max(Math.ceil(x / 7), k) + 2) &&
                      ((w = c), (o.length = 1)),
                    o.reverse(),
                    c = w;
                  c--;
  
                )
                  o.push(0);
                o.reverse();
              } else {
                for (
                  (D = (c = A.length) < (k = z.length)) && (k = c), c = 0;
                  c < k;
                  c++
                )
                  if (A[c] != z[c]) {
                    D = A[c] < z[c];
                    break;
                  }
                w = 0;
              }
              for (
                D && ((o = A), (A = z), (z = o), (s.s = -s.s)),
                  k = A.length,
                  c = z.length - k;
                c > 0;
                --c
              )
                A[k++] = 0;
              for (c = z.length; c > w; ) {
                if (A[--c] < z[c]) {
                  for (g = c; g && 0 === A[--g]; ) A[g] = 1e7 - 1;
                  --A[g], (A[c] += 1e7);
                }
                A[c] -= z[c];
              }
              for (; 0 === A[--k]; ) A.pop();
              for (; 0 === A[0]; A.shift()) --a;
              return A[0]
                ? ((s.d = A), (s.e = ue(A, a)), et ? p(s, x, P) : s)
                : new $(3 === P ? -0 : 0);
            }),
          (eg.modulo = eg.mod =
            function (s) {
              var o,
                a = this.constructor;
              return (
                (s = new a(s)),
                this.d && s.s && (!s.d || s.d[0])
                  ? s.d && (!this.d || this.d[0])
                    ? ((et = !1),
                      9 == a.modulo
                        ? ((o = ey(this, s.abs(), 0, 3, 1)), (o.s *= s.s))
                        : (o = ey(this, s, 0, a.modulo, 1)),
                      (o = o.times(s)),
                      (et = !0),
                      this.minus(o))
                    : p(new a(this), a.precision, a.rounding)
                  : new a(NaN)
              );
            }),
          (eg.naturalExponential = eg.exp =
            function () {
              return Ee(this);
            }),
          (eg.naturalLogarithm = eg.ln =
            function () {
              return B(this);
            }),
          (eg.negated = eg.neg =
            function () {
              var s = new this.constructor(this);
              return (s.s = -s.s), p(s);
            }),
          (eg.plus = eg.add =
            function (s) {
              var o,
                a,
                c,
                g,
                w,
                k,
                x,
                P,
                A,
                j,
                D = this.constructor;
              if (((s = new D(s)), !this.d || !s.d))
                return (
                  this.s && s.s
                    ? this.d || (s = new D(s.d || this.s === s.s ? this : NaN))
                    : (s = new D(NaN)),
                  s
                );
              if (this.s != s.s) return (s.s = -s.s), this.minus(s);
              if (
                ((A = this.d),
                (j = s.d),
                (x = D.precision),
                (P = D.rounding),
                !A[0] || !j[0])
              )
                return j[0] || (s = new D(this)), et ? p(s, x, P) : s;
              if (
                ((w = ea(this.e / 7)),
                (c = ea(s.e / 7)),
                (A = A.slice()),
                (g = w - c))
              ) {
                for (
                  g < 0
                    ? ((a = A), (g = -g), (k = j.length))
                    : ((a = j), (c = w), (k = A.length)),
                    g > (k = (w = Math.ceil(x / 7)) > k ? w + 1 : k + 1) &&
                      ((g = k), (a.length = 1)),
                    a.reverse();
                  g--;
  
                )
                  a.push(0);
                a.reverse();
              }
              for (
                (k = A.length) - (g = j.length) < 0 &&
                  ((g = k), (a = j), (j = A), (A = a)),
                  o = 0;
                g;
  
              )
                (o = ((A[--g] = A[g] + j[g] + o) / 1e7) | 0), (A[g] %= 1e7);
              for (o && (A.unshift(o), ++c), k = A.length; 0 == A[--k]; ) A.pop();
              return (s.d = A), (s.e = ue(A, c)), et ? p(s, x, P) : s;
            }),
          (eg.precision = eg.sd =
            function (s) {
              var o;
              if (void 0 !== s && !!s !== s && 1 !== s && 0 !== s)
                throw Error(en + s);
              return (
                this.d
                  ? ((o = Ie(this.d)), s && this.e + 1 > o && (o = this.e + 1))
                  : (o = NaN),
                o
              );
            }),
          (eg.round = function () {
            var s = this.constructor;
            return p(new s(this), this.e + 1, s.rounding);
          }),
          (eg.sine = eg.sin =
            function () {
              var s,
                o,
                a = this,
                c = a.constructor;
              return a.isFinite()
                ? a.isZero()
                  ? new c(a)
                  : ((s = c.precision),
                    (o = c.rounding),
                    (c.precision = s + Math.max(a.e, a.sd()) + 7),
                    (c.rounding = 1),
                    (a = (function (s, o) {
                      var a,
                        c = o.d.length;
                      if (c < 3) return o.isZero() ? o : J(s, 2, o, o);
                      (a = (a = 1.4 * Math.sqrt(c)) > 16 ? 16 : 0 | a),
                        (o = J(s, 2, (o = o.times(1 / fe(5, a))), o));
                      for (
                        var g, w = new s(5), k = new s(16), x = new s(20);
                        a--;
  
                      )
                        (g = o.times(o)),
                          (o = o.times(w.plus(g.times(k.times(g).minus(x)))));
                      return o;
                    })(c, Be(c, a))),
                    (c.precision = s),
                    (c.rounding = o),
                    p(K > 2 ? a.neg() : a, s, o, !0))
                : new c(NaN);
            }),
          (eg.squareRoot = eg.sqrt =
            function () {
              var s,
                o,
                a,
                c,
                g,
                w,
                k = this.d,
                x = this.e,
                P = this.s,
                A = this.constructor;
              if (1 !== P || !k || !k[0])
                return new A(
                  !P || (P < 0 && (!k || k[0])) ? NaN : k ? this : 1 / 0
                );
              for (
                et = !1,
                  0 == (P = Math.sqrt(+this)) || P == 1 / 0
                    ? (((o = O(k)).length + x) % 2 == 0 && (o += "0"),
                      (P = Math.sqrt(o)),
                      (x = ea((x + 1) / 2) - (x < 0 || x % 2)),
                      (o =
                        P == 1 / 0
                          ? "5e" + x
                          : (o = P.toExponential()).slice(0, o.indexOf("e") + 1) +
                            x),
                      (c = new A(o)))
                    : (c = new A(P.toString())),
                  a = (x = A.precision) + 3;
                ;
  
              )
                if (
                  ((c = (w = c).plus(ey(this, w, a + 2, 1)).times(0.5)),
                  O(w.d).slice(0, a) === (o = O(c.d)).slice(0, a))
                ) {
                  if (
                    "9999" != (o = o.slice(a - 3, a + 1)) &&
                    (g || "4999" != o)
                  ) {
                    (+o && (+o.slice(1) || "5" != o.charAt(0))) ||
                      (p(c, x + 1, 1), (s = !c.times(c).eq(this)));
                    break;
                  }
                  if (!g && (p(w, x + 1, 0), w.times(w).eq(this))) {
                    c = w;
                    break;
                  }
                  (a += 4), (g = 1);
                }
              return (et = !0), p(c, x, A.rounding, s);
            }),
          (eg.tangent = eg.tan =
            function () {
              var s,
                o,
                a = this,
                c = a.constructor;
              return a.isFinite()
                ? a.isZero()
                  ? new c(a)
                  : ((s = c.precision),
                    (o = c.rounding),
                    (c.precision = s + 10),
                    (c.rounding = 1),
                    ((a = a.sin()).s = 1),
                    (a = ey(a, new c(1).minus(a.times(a)).sqrt(), s + 10, 0)),
                    (c.precision = s),
                    (c.rounding = o),
                    p(2 == K || 4 == K ? a.neg() : a, s, o, !0))
                : new c(NaN);
            }),
          (eg.times = eg.mul =
            function (s) {
              var o,
                a,
                c,
                g,
                w,
                k,
                x,
                P,
                A,
                j = this.constructor,
                D = this.d,
                z = (s = new j(s)).d;
              if (((s.s *= this.s), !D || !D[0] || !z || !z[0]))
                return new j(
                  s.s && (!D || D[0] || z) && (!z || z[0] || D)
                    ? D && z
                      ? 0 * s.s
                      : s.s / 0
                    : NaN
                );
              for (
                a = ea(this.e / 7) + ea(s.e / 7),
                  (P = D.length) < (A = z.length) &&
                    ((w = D), (D = z), (z = w), (k = P), (P = A), (A = k)),
                  w = [],
                  c = k = P + A;
                c--;
  
              )
                w.push(0);
              for (c = A; --c >= 0; ) {
                for (o = 0, g = P + c; g > c; )
                  (x = w[g] + z[c] * D[g - c - 1] + o),
                    (w[g--] = x % 1e7 | 0),
                    (o = (x / 1e7) | 0);
                w[g] = (w[g] + o) % 1e7 | 0;
              }
              for (; !w[--k]; ) w.pop();
              return (
                o ? ++a : w.shift(),
                (s.d = w),
                (s.e = ue(w, a)),
                et ? p(s, j.precision, j.rounding) : s
              );
            }),
          (eg.toBinary = function (s, o) {
            return ke(this, 2, s, o);
          }),
          (eg.toDecimalPlaces = eg.toDP =
            function (s, o) {
              var a = this,
                c = a.constructor;
              return (
                (a = new c(a)),
                void 0 === s
                  ? a
                  : (q(s, 0, 1e9),
                    void 0 === o ? (o = c.rounding) : q(o, 0, 8),
                    p(a, s + a.e + 1, o))
              );
            }),
          (eg.toExponential = function (s, o) {
            var a,
              c = this,
              g = c.constructor;
            return (
              void 0 === s
                ? (a = I(c, !0))
                : (q(s, 0, 1e9),
                  void 0 === o ? (o = g.rounding) : q(o, 0, 8),
                  (a = I((c = p(new g(c), s + 1, o)), !0, s + 1))),
              c.isNeg() && !c.isZero() ? "-" + a : a
            );
          }),
          (eg.toFixed = function (s, o) {
            var a,
              c,
              g = this.constructor;
            return (
              void 0 === s
                ? (a = I(this))
                : (q(s, 0, 1e9),
                  void 0 === o ? (o = g.rounding) : q(o, 0, 8),
                  (a = I(
                    (c = p(new g(this), s + this.e + 1, o)),
                    !1,
                    s + c.e + 1
                  ))),
              this.isNeg() && !this.isZero() ? "-" + a : a
            );
          }),
          (eg.toFraction = function (s) {
            var o,
              a,
              c,
              g,
              w,
              k,
              x,
              P,
              A,
              j,
              D,
              z,
              $ = this.d,
              W = this.constructor;
            if (!$) return new W(this);
            if (
              ((A = a = new W(1)),
              (c = P = new W(0)),
              (k = (w = (o = new W(c)).e = Ie($) - this.e - 1) % 7),
              (o.d[0] = eu(10, k < 0 ? 7 + k : k)),
              null == s)
            )
              s = w > 0 ? o : A;
            else {
              if (!(x = new W(s)).isInt() || x.lt(A)) throw Error(en + x);
              s = x.gt(o) ? (w > 0 ? o : A) : x;
            }
            for (
              et = !1,
                x = new W(O($)),
                j = W.precision,
                W.precision = w = 14 * $.length;
              (D = ey(x, o, 0, 1, 1)), 1 != (g = a.plus(D.times(c))).cmp(s);
  
            )
              (a = c),
                (c = g),
                (g = A),
                (A = P.plus(D.times(g))),
                (P = g),
                (g = o),
                (o = x.minus(D.times(g))),
                (x = g);
            return (
              (g = ey(s.minus(a), c, 0, 1, 1)),
              (P = P.plus(g.times(A))),
              (a = a.plus(g.times(c))),
              (P.s = A.s = this.s),
              (z =
                1 >
                ey(A, c, w, 1)
                  .minus(this)
                  .abs()
                  .cmp(ey(P, a, w, 1).minus(this).abs())
                  ? [A, c]
                  : [P, a]),
              (W.precision = j),
              (et = !0),
              z
            );
          }),
          (eg.toHexadecimal = eg.toHex =
            function (s, o) {
              return ke(this, 16, s, o);
            }),
          (eg.toNearest = function (s, o) {
            var a = this,
              c = a.constructor;
            if (((a = new c(a)), null == s)) {
              if (!a.d) return a;
              (s = new c(1)), (o = c.rounding);
            } else {
              if (
                ((s = new c(s)),
                void 0 === o ? (o = c.rounding) : q(o, 0, 8),
                !a.d)
              )
                return s.s ? a : s;
              if (!s.d) return s.s && (s.s = a.s), s;
            }
            return (
              s.d[0]
                ? ((et = !1), (a = ey(a, s, 0, o, 1).times(s)), (et = !0), p(a))
                : ((s.s = a.s), (a = s)),
              a
            );
          }),
          (eg.toNumber = function () {
            return +this;
          }),
          (eg.toOctal = function (s, o) {
            return ke(this, 8, s, o);
          }),
          (eg.toPower = eg.pow =
            function (s) {
              var o,
                a,
                c,
                g,
                w,
                k,
                x = this,
                P = x.constructor,
                A = +(s = new P(s));
              if (!x.d || !s.d || !x.d[0] || !s.d[0]) return new P(eu(+x, A));
              if ((x = new P(x)).eq(1)) return x;
              if (((c = P.precision), (w = P.rounding), s.eq(1)))
                return p(x, c, w);
              if (
                (o = ea(s.e / 7)) >= s.d.length - 1 &&
                (a = A < 0 ? -A : A) <= 9007199254740991
              )
                return (
                  (g = De(P, x, a, c)), s.s < 0 ? new P(1).div(g) : p(g, c, w)
                );
              if ((k = x.s) < 0) {
                if (o < s.d.length - 1) return new P(NaN);
                if (
                  (1 & s.d[o] || (k = 1),
                  0 == x.e && 1 == x.d[0] && 1 == x.d.length)
                )
                  return (x.s = k), x;
              }
              return (o =
                0 != (a = eu(+x, A)) && isFinite(a)
                  ? new P(a + "").e
                  : ea(A * (Math.log("0." + O(x.d)) / Math.LN10 + x.e + 1))) >
                P.maxE + 1 || o < P.minE - 1
                ? new P(o > 0 ? k / 0 : 0)
                : ((et = !1),
                  (P.rounding = x.s = 1),
                  (a = Math.min(12, (o + "").length)),
                  (g = Ee(s.times(B(x, c + a)), c)).d &&
                    Q((g = p(g, c + 5, 1)).d, c, w) &&
                    ((o = c + 10),
                    +O((g = p(Ee(s.times(B(x, o + a)), o), o + 5, 1)).d).slice(
                      c + 1,
                      c + 15
                    ) +
                      1 ==
                      1e14 && (g = p(g, c + 1, 0))),
                  (g.s = k),
                  (et = !0),
                  (P.rounding = w),
                  p(g, c, w));
            }),
          (eg.toPrecision = function (s, o) {
            var a,
              c = this,
              g = c.constructor;
            return (
              void 0 === s
                ? (a = I(c, c.e <= g.toExpNeg || c.e >= g.toExpPos))
                : (q(s, 1, 1e9),
                  void 0 === o ? (o = g.rounding) : q(o, 0, 8),
                  (a = I(
                    (c = p(new g(c), s, o)),
                    s <= c.e || c.e <= g.toExpNeg,
                    s
                  ))),
              c.isNeg() && !c.isZero() ? "-" + a : a
            );
          }),
          (eg.toSignificantDigits = eg.toSD =
            function (s, o) {
              var a = this.constructor;
              return (
                void 0 === s
                  ? ((s = a.precision), (o = a.rounding))
                  : (q(s, 1, 1e9), void 0 === o ? (o = a.rounding) : q(o, 0, 8)),
                p(new a(this), s, o)
              );
            }),
          (eg.toString = function () {
            var s = this.constructor,
              o = I(this, this.e <= s.toExpNeg || this.e >= s.toExpPos);
            return this.isNeg() && !this.isZero() ? "-" + o : o;
          }),
          (eg.truncated = eg.trunc =
            function () {
              return p(new this.constructor(this), this.e + 1, 1);
            }),
          (eg.valueOf = eg.toJSON =
            function () {
              var s = this.constructor,
                o = I(this, this.e <= s.toExpNeg || this.e >= s.toExpPos);
              return this.isNeg() ? "-" + o : o;
            });
        var ey = (function () {
          function e(s, o, a) {
            var c,
              g = 0,
              w = s.length;
            for (s = s.slice(); w--; )
              (c = s[w] * o + g), (s[w] = c % a | 0), (g = (c / a) | 0);
            return g && s.unshift(g), s;
          }
          function n(s, o, a, c) {
            var g, w;
            if (a != c) w = a > c ? 1 : -1;
            else
              for (g = w = 0; g < a; g++)
                if (s[g] != o[g]) {
                  w = s[g] > o[g] ? 1 : -1;
                  break;
                }
            return w;
          }
          function i(s, o, a, c) {
            for (var g = 0; a--; )
              (s[a] -= g),
                (g = s[a] < o[a] ? 1 : 0),
                (s[a] = g * c + s[a] - o[a]);
            for (; !s[0] && s.length > 1; ) s.shift();
          }
          return function (s, o, a, c, g, w) {
            var k,
              x,
              P,
              A,
              j,
              D,
              z,
              $,
              W,
              G,
              K,
              X,
              Z,
              Y,
              ee,
              et,
              er,
              en,
              ei,
              es,
              eo = s.constructor,
              eu = s.s == o.s ? 1 : -1,
              el = s.d,
              ec = o.d;
            if (!el || !el[0] || !ec || !ec[0])
              return new eo(
                s.s && o.s && (el ? !ec || el[0] != ec[0] : ec)
                  ? (el && 0 == el[0]) || !ec
                    ? 0 * eu
                    : eu / 0
                  : NaN
              );
            for (
              w
                ? ((j = 1), (x = s.e - o.e))
                : ((w = 1e7), (j = 7), (x = ea(s.e / j) - ea(o.e / j))),
                ei = ec.length,
                er = el.length,
                G = (W = new eo(eu)).d = [],
                P = 0;
              ec[P] == (el[P] || 0);
              P++
            );
            if (
              (ec[P] > (el[P] || 0) && x--,
              null == a
                ? ((Y = a = eo.precision), (c = eo.rounding))
                : (Y = g ? a + (s.e - o.e) + 1 : a),
              Y < 0)
            )
              G.push(1), (D = !0);
            else {
              if (((Y = (Y / j + 2) | 0), (P = 0), 1 == ei)) {
                for (A = 0, ec = ec[0], Y++; (P < er || A) && Y--; P++)
                  (ee = A * w + (el[P] || 0)),
                    (G[P] = (ee / ec) | 0),
                    (A = ee % ec | 0);
                D = A || P < er;
              } else {
                for (
                  (A = (w / (ec[0] + 1)) | 0) > 1 &&
                    ((ec = e(ec, A, w)),
                    (el = e(el, A, w)),
                    (ei = ec.length),
                    (er = el.length)),
                    et = ei,
                    X = (K = el.slice(0, ei)).length;
                  X < ei;
  
                )
                  K[X++] = 0;
                (es = ec.slice()).unshift(0),
                  (en = ec[0]),
                  ec[1] >= w / 2 && ++en;
                do
                  (A = 0),
                    (k = n(ec, K, ei, X)) < 0
                      ? ((Z = K[0]),
                        ei != X && (Z = Z * w + (K[1] || 0)),
                        (A = (Z / en) | 0) > 1
                          ? (A >= w && (A = w - 1),
                            ($ = (z = e(ec, A, w)).length),
                            (X = K.length),
                            1 == (k = n(z, K, $, X)) &&
                              (A--, i(z, ei < $ ? es : ec, $, w)))
                          : (0 == A && (k = A = 1), (z = ec.slice())),
                        ($ = z.length) < X && z.unshift(0),
                        i(K, z, X, w),
                        -1 == k &&
                          ((X = K.length),
                          (k = n(ec, K, ei, X)) < 1 &&
                            (A++, i(K, ei < X ? es : ec, X, w))),
                        (X = K.length))
                      : 0 === k && (A++, (K = [0])),
                    (G[P++] = A),
                    k && K[0]
                      ? (K[X++] = el[et] || 0)
                      : ((K = [el[et]]), (X = 1));
                while ((et++ < er || void 0 !== K[0]) && Y--);
                D = void 0 !== K[0];
              }
              G[0] || G.shift();
            }
            if (1 == j) (W.e = x), (V = D);
            else {
              for (P = 1, A = G[0]; A >= 10; A /= 10) P++;
              (W.e = P + x * j - 1), p(W, g ? a + W.e + 1 : a, c, D);
            }
            return W;
          };
        })();
        function p(s, o, a, c) {
          var g,
            w,
            k,
            x,
            P,
            A,
            j,
            D,
            z,
            $ = s.constructor;
          e: if (null != o) {
            if (!(D = s.d)) return s;
            for (g = 1, x = D[0]; x >= 10; x /= 10) g++;
            if ((w = o - g) < 0)
              (w += 7),
                (k = o),
                (P = ((j = D[(z = 0)]) / eu(10, g - k - 1)) % 10 | 0);
            else if ((z = Math.ceil((w + 1) / 7)) >= (x = D.length)) {
              if (c) {
                for (; x++ <= z; ) D.push(0);
                (j = P = 0), (g = 1), (w %= 7), (k = w - 7 + 1);
              } else break e;
            } else {
              for (j = x = D[z], g = 1; x >= 10; x /= 10) g++;
              (w %= 7),
                (P = (k = w - 7 + g) < 0 ? 0 : (j / eu(10, g - k - 1)) % 10 | 0);
            }
            if (
              ((c =
                c ||
                o < 0 ||
                void 0 !== D[z + 1] ||
                (k < 0 ? j : j % eu(10, g - k - 1))),
              (A =
                a < 4
                  ? (P || c) && (0 == a || a == (s.s < 0 ? 3 : 2))
                  : P > 5 ||
                    (5 == P &&
                      (4 == a ||
                        c ||
                        (6 == a &&
                          (w > 0 ? (k > 0 ? j / eu(10, g - k) : 0) : D[z - 1]) %
                            10 &
                            1) ||
                        a == (s.s < 0 ? 8 : 7)))),
              o < 1 || !D[0])
            )
              return (
                (D.length = 0),
                A
                  ? ((o -= s.e + 1),
                    (D[0] = eu(10, (7 - (o % 7)) % 7)),
                    (s.e = -o || 0))
                  : (D[0] = s.e = 0),
                s
              );
            if (
              (0 == w
                ? ((D.length = z), (x = 1), z--)
                : ((D.length = z + 1),
                  (x = eu(10, 7 - w)),
                  (D[z] = k > 0 ? ((j / eu(10, g - k)) % eu(10, k) | 0) * x : 0)),
              A)
            )
              for (;;)
                if (0 == z) {
                  for (w = 1, k = D[0]; k >= 10; k /= 10) w++;
                  for (k = D[0] += x, x = 1; k >= 10; k /= 10) x++;
                  w != x && (s.e++, 1e7 == D[0] && (D[0] = 1));
                  break;
                } else {
                  if (((D[z] += x), 1e7 != D[z])) break;
                  (D[z--] = 0), (x = 1);
                }
            for (w = D.length; 0 === D[--w]; ) D.pop();
          }
          return (
            et &&
              (s.e > $.maxE
                ? ((s.d = null), (s.e = NaN))
                : s.e < $.minE && ((s.e = 0), (s.d = [0]))),
            s
          );
        }
        function I(s, o, a) {
          if (!s.isFinite()) return Ue(s);
          var c,
            g = s.e,
            w = O(s.d),
            k = w.length;
          return (
            o
              ? (a && (c = a - k) > 0
                  ? (w = w.charAt(0) + "." + w.slice(1) + U(c))
                  : k > 1 && (w = w.charAt(0) + "." + w.slice(1)),
                (w = w + (s.e < 0 ? "e" : "e+") + s.e))
              : g < 0
              ? ((w = "0." + U(-g - 1) + w), a && (c = a - k) > 0 && (w += U(c)))
              : g >= k
              ? ((w += U(g + 1 - k)),
                a && (c = a - g - 1) > 0 && (w = w + "." + U(c)))
              : ((c = g + 1) < k && (w = w.slice(0, c) + "." + w.slice(c)),
                a && (c = a - k) > 0 && (g + 1 === k && (w += "."), (w += U(c)))),
            w
          );
        }
        function ue(s, o) {
          var a = s[0];
          for (o *= 7; a >= 10; a /= 10) o++;
          return o;
        }
        function se(s, o, a) {
          if (o > ef) throw ((et = !0), a && (s.precision = a), Error(ei));
          return p(new s(Z), o, 1, !0);
        }
        function R(s, o, a) {
          if (o > ep) throw Error(ei);
          return p(new s(Y), o, a, !0);
        }
        function Ie(s) {
          var o = s.length - 1,
            a = 7 * o + 1;
          if ((o = s[o])) {
            for (; o % 10 == 0; o /= 10) a--;
            for (o = s[0]; o >= 10; o /= 10) a++;
          }
          return a;
        }
        function U(s) {
          for (var o = ""; s--; ) o += "0";
          return o;
        }
        function De(s, o, a, c) {
          var g,
            w = new s(1),
            k = Math.ceil(c / 7 + 4);
          for (et = !1; ; ) {
            if (
              (a % 2 && Ae((w = w.times(o)).d, k) && (g = !0),
              0 === (a = ea(a / 2)))
            ) {
              (a = w.d.length - 1), g && 0 === w.d[a] && ++w.d[a];
              break;
            }
            Ae((o = o.times(o)).d, k);
          }
          return (et = !0), w;
        }
        function be(s) {
          return 1 & s.d[s.d.length - 1];
        }
        function Ze(s, o, a) {
          for (var c, g = new s(o[0]), w = 0; ++w < o.length; )
            if ((c = new s(o[w])).s) g[a](c) && (g = c);
            else {
              g = c;
              break;
            }
          return g;
        }
        function Ee(s, o) {
          var a,
            c,
            g,
            w,
            k,
            x,
            P,
            A = 0,
            j = 0,
            D = 0,
            z = s.constructor,
            $ = z.rounding,
            W = z.precision;
          if (!s.d || !s.d[0] || s.e > 17)
            return new z(
              s.d
                ? s.d[0]
                  ? s.s < 0
                    ? 0
                    : 1 / 0
                  : 1
                : s.s
                ? s.s < 0
                  ? 0
                  : s
                : 0 / 0
            );
          for (
            null == o ? ((et = !1), (P = W)) : (P = o), x = new z(0.03125);
            s.e > -2;
  
          )
            (s = s.times(x)), (D += 5);
          for (
            P += c = ((Math.log(eu(2, D)) / Math.LN10) * 2 + 5) | 0,
              a = w = k = new z(1),
              z.precision = P;
            ;
  
          ) {
            if (
              ((w = p(w.times(s), P, 1)),
              (a = a.times(++j)),
              O((x = k.plus(ey(w, a, P, 1))).d).slice(0, P) ===
                O(k.d).slice(0, P))
            ) {
              for (g = D; g--; ) k = p(k.times(k), P, 1);
              if (null != o) return (z.precision = W), k;
              if (!(A < 3 && Q(k.d, P - c, $, A)))
                return p(k, (z.precision = W), $, (et = !0));
              (z.precision = P += 10), (a = w = x = new z(1)), (j = 0), A++;
            }
            k = x;
          }
        }
        function B(s, o) {
          var a,
            c,
            g,
            w,
            k,
            x,
            P,
            A,
            j,
            D,
            z,
            $ = 1,
            W = s,
            G = W.d,
            V = W.constructor,
            K = V.rounding,
            X = V.precision;
          if (W.s < 0 || !G || !G[0] || (!W.e && 1 == G[0] && 1 == G.length))
            return new V(G && !G[0] ? -1 / 0 : 1 != W.s ? NaN : G ? 0 : W);
          if (
            (null == o ? ((et = !1), (j = X)) : (j = o),
            (V.precision = j += 10),
            (c = (a = O(G)).charAt(0)),
            !(15e14 > Math.abs((w = W.e))))
          )
            return (
              (A = se(V, j + 2, X).times(w + "")),
              (W = B(new V(c + "." + a.slice(1)), j - 10).plus(A)),
              (V.precision = X),
              null == o ? p(W, X, K, (et = !0)) : W
            );
          for (; (c < 7 && 1 != c) || (1 == c && a.charAt(1) > 3); )
            (c = (a = O((W = W.times(s)).d)).charAt(0)), $++;
          for (
            w = W.e,
              c > 1
                ? ((W = new V("0." + a)), w++)
                : (W = new V(c + "." + a.slice(1))),
              D = W,
              P = k = W = ey(W.minus(1), W.plus(1), j, 1),
              z = p(W.times(W), j, 1),
              g = 3;
            ;
  
          ) {
            if (
              ((k = p(k.times(z), j, 1)),
              O((A = P.plus(ey(k, new V(g), j, 1))).d).slice(0, j) ===
                O(P.d).slice(0, j))
            ) {
              if (
                ((P = P.times(2)),
                0 !== w && (P = P.plus(se(V, j + 2, X).times(w + ""))),
                (P = ey(P, new V($), j, 1)),
                null != o)
              )
                return (V.precision = X), P;
              if (!Q(P.d, j - 10, K, x))
                return p(P, (V.precision = X), K, (et = !0));
              (V.precision = j += 10),
                (A = k = W = ey(D.minus(1), D.plus(1), j, 1)),
                (z = p(W.times(W), j, 1)),
                (g = x = 1);
            }
            (P = A), (g += 2);
          }
        }
        function Ue(s) {
          return String((s.s * s.s) / 0);
        }
        function Se(s, o) {
          var a, c, g;
          for (
            (a = o.indexOf(".")) > -1 && (o = o.replace(".", "")),
              (c = o.search(/e/i)) > 0
                ? (a < 0 && (a = c),
                  (a += +o.slice(c + 1)),
                  (o = o.substring(0, c)))
                : a < 0 && (a = o.length),
              c = 0;
            48 === o.charCodeAt(c);
            c++
          );
          for (g = o.length; 48 === o.charCodeAt(g - 1); --g);
          if ((o = o.slice(c, g))) {
            if (
              ((g -= c),
              (s.e = a = a - c - 1),
              (s.d = []),
              (c = (a + 1) % 7),
              a < 0 && (c += 7),
              c < g)
            ) {
              for (c && s.d.push(+o.slice(0, c)), g -= 7; c < g; )
                s.d.push(+o.slice(c, (c += 7)));
              c = 7 - (o = o.slice(c)).length;
            } else c -= g;
            for (; c--; ) o += "0";
            s.d.push(+o),
              et &&
                (s.e > s.constructor.maxE
                  ? ((s.d = null), (s.e = NaN))
                  : s.e < s.constructor.minE && ((s.e = 0), (s.d = [0])));
          } else (s.e = 0), (s.d = [0]);
          return s;
        }
        function J(s, o, a, c, g) {
          var w,
            k,
            x,
            P,
            A = s.precision,
            j = Math.ceil(A / 7);
          for (et = !1, P = a.times(a), x = new s(c); ; ) {
            if (
              ((k = ey(x.times(P), new s(o++ * o++), A, 1)),
              (x = g ? c.plus(k) : c.minus(k)),
              (c = ey(k.times(P), new s(o++ * o++), A, 1)),
              void 0 !== (k = x.plus(c)).d[j])
            ) {
              for (w = j; k.d[w] === x.d[w] && w--; );
              if (-1 == w) break;
            }
            (w = x), (x = c), (c = k), (k = w);
          }
          return (et = !0), (k.d.length = j + 1), k;
        }
        function fe(s, o) {
          for (var a = s; --o; ) a *= s;
          return a;
        }
        function Be(s, o) {
          var a,
            c = o.s < 0,
            g = R(s, s.precision, 1),
            w = g.times(0.5);
          if ((o = o.abs()).lte(w)) return (K = c ? 4 : 1), o;
          if ((a = o.divToInt(g)).isZero()) K = c ? 3 : 2;
          else {
            if ((o = o.minus(a.times(g))).lte(w))
              return (K = be(a) ? (c ? 2 : 3) : c ? 4 : 1), o;
            K = be(a) ? (c ? 1 : 4) : c ? 3 : 2;
          }
          return o.minus(g).abs();
        }
        function ke(s, o, a, c) {
          var g,
            w,
            k,
            x,
            P,
            A,
            j,
            D,
            z,
            $ = s.constructor,
            W = void 0 !== a;
          if (
            (W
              ? (q(a, 1, 1e9), void 0 === c ? (c = $.rounding) : q(c, 0, 8))
              : ((a = $.precision), (c = $.rounding)),
            s.isFinite())
          ) {
            for (
              k = (j = I(s)).indexOf("."),
                W
                  ? ((g = 2),
                    16 == o ? (a = 4 * a - 3) : 8 == o && (a = 3 * a - 2))
                  : (g = o),
                k >= 0 &&
                  ((j = j.replace(".", "")),
                  ((z = new $(1)).e = j.length - k),
                  (z.d = ie(I(z), 10, g)),
                  (z.e = z.d.length)),
                w = P = (D = ie(j, 10, g)).length;
              0 == D[--P];
  
            )
              D.pop();
            if (D[0]) {
              if (
                (k < 0
                  ? w--
                  : (((s = new $(s)).d = D),
                    (s.e = w),
                    (D = (s = ey(s, z, a, c, 0, g)).d),
                    (w = s.e),
                    (A = V)),
                (k = D[a]),
                (x = g / 2),
                (A = A || void 0 !== D[a + 1]),
                (A =
                  c < 4
                    ? (void 0 !== k || A) && (0 === c || c === (s.s < 0 ? 3 : 2))
                    : k > x ||
                      (k === x &&
                        (4 === c ||
                          A ||
                          (6 === c && 1 & D[a - 1]) ||
                          c === (s.s < 0 ? 8 : 7)))),
                (D.length = a),
                A)
              )
                for (; ++D[--a] > g - 1; ) (D[a] = 0), a || (++w, D.unshift(1));
              for (P = D.length; !D[P - 1]; --P);
              for (k = 0, j = ""; k < P; k++) j += X.charAt(D[k]);
              if (W) {
                if (P > 1) {
                  if (16 == o || 8 == o) {
                    for (k = 16 == o ? 4 : 3, --P; P % k; P++) j += "0";
                    for (P = (D = ie(j, g, o)).length; !D[P - 1]; --P);
                    for (k = 1, j = "1."; k < P; k++) j += X.charAt(D[k]);
                  } else j = j.charAt(0) + "." + j.slice(1);
                }
                j = j + (w < 0 ? "p" : "p+") + w;
              } else if (w < 0) {
                for (; ++w; ) j = "0" + j;
                j = "0." + j;
              } else if (++w > P) for (w -= P; w--; ) j += "0";
              else w < P && (j = j.slice(0, w) + "." + j.slice(w));
            } else j = W ? "0p+0" : "0";
            j = (16 == o ? "0x" : 2 == o ? "0b" : 8 == o ? "0o" : "") + j;
          } else j = Ue(s);
          return s.s < 0 ? "-" + j : j;
        }
        function Ae(s, o) {
          if (s.length > o) return (s.length = o), !0;
        }
        function tn(s) {
          return new this(s).abs();
        }
        function sn(s) {
          return new this(s).acos();
        }
        function on(s) {
          return new this(s).acosh();
        }
        function un(s, o) {
          return new this(s).plus(o);
        }
        function fn(s) {
          return new this(s).asin();
        }
        function ln(s) {
          return new this(s).asinh();
        }
        function cn(s) {
          return new this(s).atan();
        }
        function an(s) {
          return new this(s).atanh();
        }
        function hn(s, o) {
          (s = new this(s)), (o = new this(o));
          var a,
            c = this.precision,
            g = this.rounding,
            w = c + 4;
          return (
            s.s && o.s
              ? s.d || o.d
                ? !o.d || s.isZero()
                  ? ((a = o.s < 0 ? R(this, c, g) : new this(0)).s = s.s)
                  : !s.d || o.isZero()
                  ? ((a = R(this, w, 1).times(0.5)).s = s.s)
                  : o.s < 0
                  ? ((this.precision = w),
                    (this.rounding = 1),
                    (a = this.atan(ey(s, o, w, 1))),
                    (o = R(this, w, 1)),
                    (this.precision = c),
                    (this.rounding = g),
                    (a = s.s < 0 ? a.minus(o) : a.plus(o)))
                  : (a = this.atan(ey(s, o, w, 1)))
                : ((a = R(this, w, 1).times(o.s > 0 ? 0.25 : 0.75)).s = s.s)
              : (a = new this(NaN)),
            a
          );
        }
        function dn(s) {
          return new this(s).cbrt();
        }
        function pn(s) {
          return p((s = new this(s)), s.e + 1, 2);
        }
        function gn(s, o, a) {
          return new this(s).clamp(o, a);
        }
        function mn(s) {
          if (!s || "object" != typeof s) throw Error(er + "Object expected");
          var o,
            a,
            c,
            g = !0 === s.defaults,
            w = [
              "precision",
              1,
              1e9,
              "rounding",
              0,
              8,
              "toExpNeg",
              -9e15,
              0,
              "toExpPos",
              0,
              9e15,
              "maxE",
              0,
              9e15,
              "minE",
              -9e15,
              0,
              "modulo",
              0,
              9,
            ];
          for (o = 0; o < w.length; o += 3)
            if (((a = w[o]), g && (this[a] = ee[a]), void 0 !== (c = s[a]))) {
              if (ea(c) === c && c >= w[o + 1] && c <= w[o + 2]) this[a] = c;
              else throw Error(en + a + ": " + c);
            }
          if (((a = "crypto"), g && (this[a] = ee[a]), void 0 !== (c = s[a]))) {
            if (!0 === c || !1 === c || 0 === c || 1 === c) {
              if (c) {
                if (
                  "u" > typeof crypto &&
                  crypto &&
                  (crypto.getRandomValues || crypto.randomBytes)
                )
                  this[a] = !0;
                else throw Error(es);
              } else this[a] = !1;
            } else throw Error(en + a + ": " + c);
          }
          return this;
        }
        function wn(s) {
          return new this(s).cos();
        }
        function Nn(s) {
          return new this(s).cosh();
        }
        function vn(s, o) {
          return new this(s).div(o);
        }
        function En(s) {
          return new this(s).exp();
        }
        function Sn(s) {
          return p((s = new this(s)), s.e + 1, 3);
        }
        function kn() {
          var s,
            o,
            a = new this(0);
          for (et = !1, s = 0; s < arguments.length; )
            if (((o = new this(arguments[s++])), o.d))
              a.d && (a = a.plus(o.times(o)));
            else {
              if (o.s) return (et = !0), new this(1 / 0);
              a = o;
            }
          return (et = !0), a.sqrt();
        }
        function _e(s) {
          return s instanceof em || (s && s.toStringTag === eo) || !1;
        }
        function Cn(s) {
          return new this(s).ln();
        }
        function Mn(s, o) {
          return new this(s).log(o);
        }
        function On(s) {
          return new this(s).log(2);
        }
        function Pn(s) {
          return new this(s).log(10);
        }
        function bn() {
          return Ze(this, arguments, "lt");
        }
        function An() {
          return Ze(this, arguments, "gt");
        }
        function _n(s, o) {
          return new this(s).mod(o);
        }
        function qn(s, o) {
          return new this(s).mul(o);
        }
        function Tn(s, o) {
          return new this(s).pow(o);
        }
        function Ln(s) {
          var o,
            a,
            c,
            g,
            w = 0,
            k = new this(1),
            x = [];
          if (
            (void 0 === s ? (s = this.precision) : q(s, 1, 1e9),
            (c = Math.ceil(s / 7)),
            this.crypto)
          ) {
            if (crypto.getRandomValues)
              for (o = crypto.getRandomValues(new Uint32Array(c)); w < c; )
                (g = o[w]) >= 429e7
                  ? (o[w] = crypto.getRandomValues(new Uint32Array(1))[0])
                  : (x[w++] = g % 1e7);
            else if (crypto.randomBytes) {
              for (o = crypto.randomBytes((c *= 4)); w < c; )
                (g =
                  o[w] +
                  (o[w + 1] << 8) +
                  (o[w + 2] << 16) +
                  ((127 & o[w + 3]) << 24)) >= 214e7
                  ? crypto.randomBytes(4).copy(o, w)
                  : (x.push(g % 1e7), (w += 4));
              w = c / 4;
            } else throw Error(es);
          } else for (; w < c; ) x[w++] = (1e7 * Math.random()) | 0;
          for (
            c = x[--w],
              s %= 7,
              c && s && ((g = eu(10, 7 - s)), (x[w] = ((c / g) | 0) * g));
            0 === x[w];
            w--
          )
            x.pop();
          if (w < 0) (a = 0), (x = [0]);
          else {
            for (a = -1; 0 === x[0]; a -= 7) x.shift();
            for (c = 1, g = x[0]; g >= 10; g /= 10) c++;
            c < 7 && (a -= 7 - c);
          }
          return (k.e = a), (k.d = x), k;
        }
        function Rn(s) {
          return p((s = new this(s)), s.e + 1, this.rounding);
        }
        function Fn(s) {
          return (s = new this(s)).d ? (s.d[0] ? s.s : 0 * s.s) : s.s || NaN;
        }
        function In(s) {
          return new this(s).sin();
        }
        function Dn(s) {
          return new this(s).sinh();
        }
        function Zn(s) {
          return new this(s).sqrt();
        }
        function Un(s, o) {
          return new this(s).sub(o);
        }
        function Bn() {
          var s = 0,
            o = arguments,
            a = new this(o[s]);
          for (et = !1; a.s && ++s < o.length; ) a = a.plus(o[s]);
          return (et = !0), p(a, this.precision, this.rounding);
        }
        function $n(s) {
          return new this(s).tan();
        }
        function Vn(s) {
          return new this(s).tanh();
        }
        function Hn(s) {
          return p((s = new this(s)), s.e + 1, 1);
        }
        (eg[Symbol.for("nodejs.util.inspect.custom")] = eg.toString),
          (eg[Symbol.toStringTag] = "Decimal");
        var em = (eg.constructor = (function $e(s) {
          var o, a, c;
          function t(s) {
            var o, a, c;
            if (!(this instanceof t)) return new t(s);
            if (((this.constructor = t), _e(s))) {
              (this.s = s.s),
                et
                  ? !s.d || s.e > t.maxE
                    ? ((this.e = NaN), (this.d = null))
                    : s.e < t.minE
                    ? ((this.e = 0), (this.d = [0]))
                    : ((this.e = s.e), (this.d = s.d.slice()))
                  : ((this.e = s.e), (this.d = s.d ? s.d.slice() : s.d));
              return;
            }
            if ("number" == (c = typeof s)) {
              if (0 === s) {
                (this.s = 1 / s < 0 ? -1 : 1), (this.e = 0), (this.d = [0]);
                return;
              }
              if (
                (s < 0 ? ((s = -s), (this.s = -1)) : (this.s = 1),
                s === ~~s && s < 1e7)
              ) {
                for (o = 0, a = s; a >= 10; a /= 10) o++;
                et
                  ? o > t.maxE
                    ? ((this.e = NaN), (this.d = null))
                    : o < t.minE
                    ? ((this.e = 0), (this.d = [0]))
                    : ((this.e = o), (this.d = [s]))
                  : ((this.e = o), (this.d = [s]));
                return;
              }
              if (0 * s != 0) {
                s || (this.s = NaN), (this.e = NaN), (this.d = null);
                return;
              }
              return Se(this, s.toString());
            }
            if ("string" !== c) throw Error(en + s);
            return (
              45 === (a = s.charCodeAt(0))
                ? ((s = s.slice(1)), (this.s = -1))
                : (43 === a && (s = s.slice(1)), (this.s = 1)),
              ed.test(s)
                ? Se(this, s)
                : (function (s, o) {
                    var a, c, g, w, k, x, P, A, j;
                    if (o.indexOf("_") > -1) {
                      if (((o = o.replace(/(\d)_(?=\d)/g, "$1")), ed.test(o)))
                        return Se(s, o);
                    } else if ("Infinity" === o || "NaN" === o)
                      return +o || (s.s = NaN), (s.e = NaN), (s.d = null), s;
                    if (ec.test(o)) (a = 16), (o = o.toLowerCase());
                    else if (el.test(o)) a = 2;
                    else if (eh.test(o)) a = 8;
                    else throw Error(en + o);
                    for (
                      (w = o.search(/p/i)) > 0
                        ? ((P = +o.slice(w + 1)), (o = o.substring(2, w)))
                        : (o = o.slice(2)),
                        k = (w = o.indexOf(".")) >= 0,
                        c = s.constructor,
                        k &&
                          ((w = (x = (o = o.replace(".", "")).length) - w),
                          (g = De(c, new c(a), w, 2 * w))),
                        w = j = (A = ie(o, a, 1e7)).length - 1;
                      0 === A[w];
                      --w
                    )
                      A.pop();
                    return w < 0
                      ? new c(0 * s.s)
                      : ((s.e = ue(A, j)),
                        (s.d = A),
                        (et = !1),
                        k && (s = ey(s, g, 4 * x)),
                        P &&
                          (s = s.times(
                            54 > Math.abs(P) ? eu(2, P) : em.pow(2, P)
                          )),
                        (et = !0),
                        s);
                  })(this, s)
            );
          }
          if (
            ((t.prototype = eg),
            (t.ROUND_UP = 0),
            (t.ROUND_DOWN = 1),
            (t.ROUND_CEIL = 2),
            (t.ROUND_FLOOR = 3),
            (t.ROUND_HALF_UP = 4),
            (t.ROUND_HALF_DOWN = 5),
            (t.ROUND_HALF_EVEN = 6),
            (t.ROUND_HALF_CEIL = 7),
            (t.ROUND_HALF_FLOOR = 8),
            (t.EUCLID = 9),
            (t.config = t.set = mn),
            (t.clone = $e),
            (t.isDecimal = _e),
            (t.abs = tn),
            (t.acos = sn),
            (t.acosh = on),
            (t.add = un),
            (t.asin = fn),
            (t.asinh = ln),
            (t.atan = cn),
            (t.atanh = an),
            (t.atan2 = hn),
            (t.cbrt = dn),
            (t.ceil = pn),
            (t.clamp = gn),
            (t.cos = wn),
            (t.cosh = Nn),
            (t.div = vn),
            (t.exp = En),
            (t.floor = Sn),
            (t.hypot = kn),
            (t.ln = Cn),
            (t.log = Mn),
            (t.log10 = Pn),
            (t.log2 = On),
            (t.max = bn),
            (t.min = An),
            (t.mod = _n),
            (t.mul = qn),
            (t.pow = Tn),
            (t.random = Ln),
            (t.round = Rn),
            (t.sign = Fn),
            (t.sin = In),
            (t.sinh = Dn),
            (t.sqrt = Zn),
            (t.sub = Un),
            (t.sum = Bn),
            (t.tan = $n),
            (t.tanh = Vn),
            (t.trunc = Hn),
            void 0 === s && (s = {}),
            s && !0 !== s.defaults)
          )
            for (
              c = [
                "precision",
                "rounding",
                "toExpNeg",
                "toExpPos",
                "maxE",
                "minE",
                "modulo",
                "crypto",
              ],
                o = 0;
              o < c.length;
  
            )
              s.hasOwnProperty((a = c[o++])) || (s[a] = this[a]);
          return t.config(s), t;
        })(ee));
        (Z = new em(Z)), (Y = new em(Y));
        var ev = em;
        function He() {
          var s, o, a;
          return "object" == typeof Netlify
            ? "netlify"
            : "string" == typeof EdgeRuntime
            ? "edge-light"
            : (null == (s = globalThis.navigator) ? void 0 : s.userAgent) ===
              "Cloudflare-Workers"
            ? "workerd"
            : globalThis.Deno
            ? "deno"
            : globalThis.__lagon__
            ? "lagon"
            : (null == (a = null == (o = globalThis.process) ? void 0 : o.release)
                ? void 0
                : a.name) === "node"
            ? "node"
            : globalThis.Bun
            ? "bun"
            : globalThis.fastly
            ? "fastly"
            : "unknown";
        } /*! Bundled license information:
  
  decimal.js/decimal.mjs:
    (*!
     *  decimal.js v10.4.3
     *  An arbitrary-precision Decimal type for JavaScript.
     *  https://github.com/MikeMcl/decimal.js
     *  Copyright (c) 2022 Michael Mclaughlin <M8ch88l@gmail.com>
     *  MIT Licence
     *)
  */
      },
      26434: function (s, o, a) {
        "use strict";
        let c;
        s = a.nmd(s);
        let wrapAnsi16 =
            (s, o) =>
            (...a) => {
              let c = s(...a);
              return `\u001B[${c + o}m`;
            },
          wrapAnsi256 =
            (s, o) =>
            (...a) => {
              let c = s(...a);
              return `\u001B[${38 + o};5;${c}m`;
            },
          wrapAnsi16m =
            (s, o) =>
            (...a) => {
              let c = s(...a);
              return `\u001B[${38 + o};2;${c[0]};${c[1]};${c[2]}m`;
            },
          ansi2ansi = (s) => s,
          rgb2rgb = (s, o, a) => [s, o, a],
          setLazyProperty = (s, o, a) => {
            Object.defineProperty(s, o, {
              get: () => {
                let c = a();
                return (
                  Object.defineProperty(s, o, {
                    value: c,
                    enumerable: !0,
                    configurable: !0,
                  }),
                  c
                );
              },
              enumerable: !0,
              configurable: !0,
            });
          },
          makeDynamicStyles = (s, o, g, w) => {
            void 0 === c && (c = a(12085));
            let k = w ? 10 : 0,
              x = {};
            for (let [a, w] of Object.entries(c)) {
              let c = "ansi16" === a ? "ansi" : a;
              a === o
                ? (x[c] = s(g, k))
                : "object" == typeof w && (x[c] = s(w[o], k));
            }
            return x;
          };
        Object.defineProperty(s, "exports", {
          enumerable: !0,
          get: function () {
            let s = new Map(),
              o = {
                modifier: {
                  reset: [0, 0],
                  bold: [1, 22],
                  dim: [2, 22],
                  italic: [3, 23],
                  underline: [4, 24],
                  inverse: [7, 27],
                  hidden: [8, 28],
                  strikethrough: [9, 29],
                },
                color: {
                  black: [30, 39],
                  red: [31, 39],
                  green: [32, 39],
                  yellow: [33, 39],
                  blue: [34, 39],
                  magenta: [35, 39],
                  cyan: [36, 39],
                  white: [37, 39],
                  blackBright: [90, 39],
                  redBright: [91, 39],
                  greenBright: [92, 39],
                  yellowBright: [93, 39],
                  blueBright: [94, 39],
                  magentaBright: [95, 39],
                  cyanBright: [96, 39],
                  whiteBright: [97, 39],
                },
                bgColor: {
                  bgBlack: [40, 49],
                  bgRed: [41, 49],
                  bgGreen: [42, 49],
                  bgYellow: [43, 49],
                  bgBlue: [44, 49],
                  bgMagenta: [45, 49],
                  bgCyan: [46, 49],
                  bgWhite: [47, 49],
                  bgBlackBright: [100, 49],
                  bgRedBright: [101, 49],
                  bgGreenBright: [102, 49],
                  bgYellowBright: [103, 49],
                  bgBlueBright: [104, 49],
                  bgMagentaBright: [105, 49],
                  bgCyanBright: [106, 49],
                  bgWhiteBright: [107, 49],
                },
              };
            for (let [a, c] of ((o.color.gray = o.color.blackBright),
            (o.bgColor.bgGray = o.bgColor.bgBlackBright),
            (o.color.grey = o.color.blackBright),
            (o.bgColor.bgGrey = o.bgColor.bgBlackBright),
            Object.entries(o))) {
              for (let [a, g] of Object.entries(c))
                (o[a] = { open: `\u001B[${g[0]}m`, close: `\u001B[${g[1]}m` }),
                  (c[a] = o[a]),
                  s.set(g[0], g[1]);
              Object.defineProperty(o, a, { value: c, enumerable: !1 });
            }
            return (
              Object.defineProperty(o, "codes", { value: s, enumerable: !1 }),
              (o.color.close = "\x1b[39m"),
              (o.bgColor.close = "\x1b[49m"),
              setLazyProperty(o.color, "ansi", () =>
                makeDynamicStyles(wrapAnsi16, "ansi16", ansi2ansi, !1)
              ),
              setLazyProperty(o.color, "ansi256", () =>
                makeDynamicStyles(wrapAnsi256, "ansi256", ansi2ansi, !1)
              ),
              setLazyProperty(o.color, "ansi16m", () =>
                makeDynamicStyles(wrapAnsi16m, "rgb", rgb2rgb, !1)
              ),
              setLazyProperty(o.bgColor, "ansi", () =>
                makeDynamicStyles(wrapAnsi16, "ansi16", ansi2ansi, !0)
              ),
              setLazyProperty(o.bgColor, "ansi256", () =>
                makeDynamicStyles(wrapAnsi256, "ansi256", ansi2ansi, !0)
              ),
              setLazyProperty(o.bgColor, "ansi16m", () =>
                makeDynamicStyles(wrapAnsi16m, "rgb", rgb2rgb, !0)
              ),
              o
            );
          },
        });
      },
      79742: function (s, o) {
        "use strict";
        (o.byteLength = function (s) {
          var o = getLens(s),
            a = o[0],
            c = o[1];
          return ((a + c) * 3) / 4 - c;
        }),
          (o.toByteArray = function (s) {
            var o,
              a,
              w = getLens(s),
              k = w[0],
              x = w[1],
              P = new g(((k + x) * 3) / 4 - x),
              A = 0,
              j = x > 0 ? k - 4 : k;
            for (a = 0; a < j; a += 4)
              (o =
                (c[s.charCodeAt(a)] << 18) |
                (c[s.charCodeAt(a + 1)] << 12) |
                (c[s.charCodeAt(a + 2)] << 6) |
                c[s.charCodeAt(a + 3)]),
                (P[A++] = (o >> 16) & 255),
                (P[A++] = (o >> 8) & 255),
                (P[A++] = 255 & o);
            return (
              2 === x &&
                ((o = (c[s.charCodeAt(a)] << 2) | (c[s.charCodeAt(a + 1)] >> 4)),
                (P[A++] = 255 & o)),
              1 === x &&
                ((o =
                  (c[s.charCodeAt(a)] << 10) |
                  (c[s.charCodeAt(a + 1)] << 4) |
                  (c[s.charCodeAt(a + 2)] >> 2)),
                (P[A++] = (o >> 8) & 255),
                (P[A++] = 255 & o)),
              P
            );
          }),
          (o.fromByteArray = function (s) {
            for (
              var o, c = s.length, g = c % 3, w = [], k = 0, x = c - g;
              k < x;
              k += 16383
            )
              w.push(
                (function (s, o, c) {
                  for (var g, w = [], k = o; k < c; k += 3)
                    w.push(
                      a[
                        ((g =
                          ((s[k] << 16) & 16711680) +
                          ((s[k + 1] << 8) & 65280) +
                          (255 & s[k + 2])) >>
                          18) &
                          63
                      ] +
                        a[(g >> 12) & 63] +
                        a[(g >> 6) & 63] +
                        a[63 & g]
                    );
                  return w.join("");
                })(s, k, k + 16383 > x ? x : k + 16383)
              );
            return (
              1 === g
                ? w.push(a[(o = s[c - 1]) >> 2] + a[(o << 4) & 63] + "==")
                : 2 === g &&
                  w.push(
                    a[(o = (s[c - 2] << 8) + s[c - 1]) >> 10] +
                      a[(o >> 4) & 63] +
                      a[(o << 2) & 63] +
                      "="
                  ),
              w.join("")
            );
          });
        for (
          var a = [],
            c = [],
            g = "undefined" != typeof Uint8Array ? Uint8Array : Array,
            w =
              "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/",
            k = 0,
            x = w.length;
          k < x;
          ++k
        )
          (a[k] = w[k]), (c[w.charCodeAt(k)] = k);
        function getLens(s) {
          var o = s.length;
          if (o % 4 > 0)
            throw Error("Invalid string. Length must be a multiple of 4");
          var a = s.indexOf("=");
          -1 === a && (a = o);
          var c = a === o ? 0 : 4 - (a % 4);
          return [a, c];
        }
        (c["-".charCodeAt(0)] = 62), (c["_".charCodeAt(0)] = 63);
      },
      48764: function (s, o, a) {
        "use strict";
        /*!
         * The buffer module from node.js, for the browser.
         *
         * @author   Feross Aboukhadijeh <https://feross.org>
         * @license  MIT
         */ var c = a(79742),
          g = a(80645),
          w =
            "function" == typeof Symbol && "function" == typeof Symbol.for
              ? Symbol.for("nodejs.util.inspect.custom")
              : null;
        function createBuffer(s) {
          if (s > 2147483647)
            throw RangeError(
              'The value "' + s + '" is invalid for option "size"'
            );
          var o = new Uint8Array(s);
          return Object.setPrototypeOf(o, Buffer.prototype), o;
        }
        function Buffer(s, o, a) {
          if ("number" == typeof s) {
            if ("string" == typeof o)
              throw TypeError(
                'The "string" argument must be of type string. Received type number'
              );
            return allocUnsafe(s);
          }
          return from(s, o, a);
        }
        function from(s, o, a) {
          if ("string" == typeof s)
            return (function (s, o) {
              if (
                (("string" != typeof o || "" === o) && (o = "utf8"),
                !Buffer.isEncoding(o))
              )
                throw TypeError("Unknown encoding: " + o);
              var a = 0 | byteLength(s, o),
                c = createBuffer(a),
                g = c.write(s, o);
              return g !== a && (c = c.slice(0, g)), c;
            })(s, o);
          if (ArrayBuffer.isView(s))
            return (function (s) {
              if (isInstance(s, Uint8Array)) {
                var o = new Uint8Array(s);
                return fromArrayBuffer(o.buffer, o.byteOffset, o.byteLength);
              }
              return fromArrayLike(s);
            })(s);
          if (null == s)
            throw TypeError(
              "The first argument must be one of type string, Buffer, ArrayBuffer, Array, or Array-like Object. Received type " +
                typeof s
            );
          if (
            isInstance(s, ArrayBuffer) ||
            (s && isInstance(s.buffer, ArrayBuffer)) ||
            ("undefined" != typeof SharedArrayBuffer &&
              (isInstance(s, SharedArrayBuffer) ||
                (s && isInstance(s.buffer, SharedArrayBuffer))))
          )
            return fromArrayBuffer(s, o, a);
          if ("number" == typeof s)
            throw TypeError(
              'The "value" argument must not be of type number. Received type number'
            );
          var c = s.valueOf && s.valueOf();
          if (null != c && c !== s) return Buffer.from(c, o, a);
          var g = (function (s) {
            if (Buffer.isBuffer(s)) {
              var o,
                a = 0 | checked(s.length),
                c = createBuffer(a);
              return 0 === c.length || s.copy(c, 0, 0, a), c;
            }
            return void 0 !== s.length
              ? "number" != typeof s.length || (o = s.length) != o
                ? createBuffer(0)
                : fromArrayLike(s)
              : "Buffer" === s.type && Array.isArray(s.data)
              ? fromArrayLike(s.data)
              : void 0;
          })(s);
          if (g) return g;
          if (
            "undefined" != typeof Symbol &&
            null != Symbol.toPrimitive &&
            "function" == typeof s[Symbol.toPrimitive]
          )
            return Buffer.from(s[Symbol.toPrimitive]("string"), o, a);
          throw TypeError(
            "The first argument must be one of type string, Buffer, ArrayBuffer, Array, or Array-like Object. Received type " +
              typeof s
          );
        }
        function assertSize(s) {
          if ("number" != typeof s)
            throw TypeError('"size" argument must be of type number');
          if (s < 0)
            throw RangeError(
              'The value "' + s + '" is invalid for option "size"'
            );
        }
        function allocUnsafe(s) {
          return assertSize(s), createBuffer(s < 0 ? 0 : 0 | checked(s));
        }
        function fromArrayLike(s) {
          for (
            var o = s.length < 0 ? 0 : 0 | checked(s.length),
              a = createBuffer(o),
              c = 0;
            c < o;
            c += 1
          )
            a[c] = 255 & s[c];
          return a;
        }
        function fromArrayBuffer(s, o, a) {
          var c;
          if (o < 0 || s.byteLength < o)
            throw RangeError('"offset" is outside of buffer bounds');
          if (s.byteLength < o + (a || 0))
            throw RangeError('"length" is outside of buffer bounds');
          return (
            Object.setPrototypeOf(
              (c =
                void 0 === o && void 0 === a
                  ? new Uint8Array(s)
                  : void 0 === a
                  ? new Uint8Array(s, o)
                  : new Uint8Array(s, o, a)),
              Buffer.prototype
            ),
            c
          );
        }
        function checked(s) {
          if (s >= 2147483647)
            throw RangeError(
              "Attempt to allocate Buffer larger than maximum size: 0x7fffffff bytes"
            );
          return 0 | s;
        }
        function byteLength(s, o) {
          if (Buffer.isBuffer(s)) return s.length;
          if (ArrayBuffer.isView(s) || isInstance(s, ArrayBuffer))
            return s.byteLength;
          if ("string" != typeof s)
            throw TypeError(
              'The "string" argument must be one of type string, Buffer, or ArrayBuffer. Received type ' +
                typeof s
            );
          var a = s.length,
            c = arguments.length > 2 && !0 === arguments[2];
          if (!c && 0 === a) return 0;
          for (var g = !1; ; )
            switch (o) {
              case "ascii":
              case "latin1":
              case "binary":
                return a;
              case "utf8":
              case "utf-8":
                return utf8ToBytes(s).length;
              case "ucs2":
              case "ucs-2":
              case "utf16le":
              case "utf-16le":
                return 2 * a;
              case "hex":
                return a >>> 1;
              case "base64":
                return base64ToBytes(s).length;
              default:
                if (g) return c ? -1 : utf8ToBytes(s).length;
                (o = ("" + o).toLowerCase()), (g = !0);
            }
        }
        function slowToString(s, o, a) {
          var g,
            w,
            k = !1;
          if (
            ((void 0 === o || o < 0) && (o = 0),
            o > this.length ||
              ((void 0 === a || a > this.length) && (a = this.length),
              a <= 0 || (a >>>= 0) <= (o >>>= 0)))
          )
            return "";
          for (s || (s = "utf8"); ; )
            switch (s) {
              case "hex":
                return (function (s, o, a) {
                  var c = s.length;
                  (!o || o < 0) && (o = 0), (!a || a < 0 || a > c) && (a = c);
                  for (var g = "", w = o; w < a; ++w) g += x[s[w]];
                  return g;
                })(this, o, a);
              case "utf8":
              case "utf-8":
                return utf8Slice(this, o, a);
              case "ascii":
                return (function (s, o, a) {
                  var c = "";
                  a = Math.min(s.length, a);
                  for (var g = o; g < a; ++g)
                    c += String.fromCharCode(127 & s[g]);
                  return c;
                })(this, o, a);
              case "latin1":
              case "binary":
                return (function (s, o, a) {
                  var c = "";
                  a = Math.min(s.length, a);
                  for (var g = o; g < a; ++g) c += String.fromCharCode(s[g]);
                  return c;
                })(this, o, a);
              case "base64":
                return (
                  (g = o),
                  (w = a),
                  0 === g && w === this.length
                    ? c.fromByteArray(this)
                    : c.fromByteArray(this.slice(g, w))
                );
              case "ucs2":
              case "ucs-2":
              case "utf16le":
              case "utf-16le":
                return (function (s, o, a) {
                  for (
                    var c = s.slice(o, a), g = "", w = 0;
                    w < c.length - 1;
                    w += 2
                  )
                    g += String.fromCharCode(c[w] + 256 * c[w + 1]);
                  return g;
                })(this, o, a);
              default:
                if (k) throw TypeError("Unknown encoding: " + s);
                (s = (s + "").toLowerCase()), (k = !0);
            }
        }
        function swap(s, o, a) {
          var c = s[o];
          (s[o] = s[a]), (s[a] = c);
        }
        function bidirectionalIndexOf(s, o, a, c, g) {
          var w;
          if (0 === s.length) return -1;
          if (
            ("string" == typeof a
              ? ((c = a), (a = 0))
              : a > 2147483647
              ? (a = 2147483647)
              : a < -2147483648 && (a = -2147483648),
            (w = a = +a) != w && (a = g ? 0 : s.length - 1),
            a < 0 && (a = s.length + a),
            a >= s.length)
          ) {
            if (g) return -1;
            a = s.length - 1;
          } else if (a < 0) {
            if (!g) return -1;
            a = 0;
          }
          if (
            ("string" == typeof o && (o = Buffer.from(o, c)), Buffer.isBuffer(o))
          )
            return 0 === o.length ? -1 : arrayIndexOf(s, o, a, c, g);
          if ("number" == typeof o)
            return ((o &= 255), "function" == typeof Uint8Array.prototype.indexOf)
              ? g
                ? Uint8Array.prototype.indexOf.call(s, o, a)
                : Uint8Array.prototype.lastIndexOf.call(s, o, a)
              : arrayIndexOf(s, [o], a, c, g);
          throw TypeError("val must be string, number or Buffer");
        }
        function arrayIndexOf(s, o, a, c, g) {
          var w,
            k = 1,
            x = s.length,
            P = o.length;
          if (
            void 0 !== c &&
            ("ucs2" === (c = String(c).toLowerCase()) ||
              "ucs-2" === c ||
              "utf16le" === c ||
              "utf-16le" === c)
          ) {
            if (s.length < 2 || o.length < 2) return -1;
            (k = 2), (x /= 2), (P /= 2), (a /= 2);
          }
          function read(s, o) {
            return 1 === k ? s[o] : s.readUInt16BE(o * k);
          }
          if (g) {
            var A = -1;
            for (w = a; w < x; w++)
              if (read(s, w) === read(o, -1 === A ? 0 : w - A)) {
                if ((-1 === A && (A = w), w - A + 1 === P)) return A * k;
              } else -1 !== A && (w -= w - A), (A = -1);
          } else
            for (a + P > x && (a = x - P), w = a; w >= 0; w--) {
              for (var j = !0, D = 0; D < P; D++)
                if (read(s, w + D) !== read(o, D)) {
                  j = !1;
                  break;
                }
              if (j) return w;
            }
          return -1;
        }
        function utf8Slice(s, o, a) {
          a = Math.min(s.length, a);
          for (var c = [], g = o; g < a; ) {
            var w,
              k,
              x,
              P,
              A = s[g],
              j = null,
              D = A > 239 ? 4 : A > 223 ? 3 : A > 191 ? 2 : 1;
            if (g + D <= a)
              switch (D) {
                case 1:
                  A < 128 && (j = A);
                  break;
                case 2:
                  (192 & (w = s[g + 1])) == 128 &&
                    (P = ((31 & A) << 6) | (63 & w)) > 127 &&
                    (j = P);
                  break;
                case 3:
                  (w = s[g + 1]),
                    (k = s[g + 2]),
                    (192 & w) == 128 &&
                      (192 & k) == 128 &&
                      (P = ((15 & A) << 12) | ((63 & w) << 6) | (63 & k)) >
                        2047 &&
                      (P < 55296 || P > 57343) &&
                      (j = P);
                  break;
                case 4:
                  (w = s[g + 1]),
                    (k = s[g + 2]),
                    (x = s[g + 3]),
                    (192 & w) == 128 &&
                      (192 & k) == 128 &&
                      (192 & x) == 128 &&
                      (P =
                        ((15 & A) << 18) |
                        ((63 & w) << 12) |
                        ((63 & k) << 6) |
                        (63 & x)) > 65535 &&
                      P < 1114112 &&
                      (j = P);
              }
            null === j
              ? ((j = 65533), (D = 1))
              : j > 65535 &&
                ((j -= 65536),
                c.push(((j >>> 10) & 1023) | 55296),
                (j = 56320 | (1023 & j))),
              c.push(j),
              (g += D);
          }
          return (function (s) {
            var o = s.length;
            if (o <= 4096) return String.fromCharCode.apply(String, s);
            for (var a = "", c = 0; c < o; )
              a += String.fromCharCode.apply(String, s.slice(c, (c += 4096)));
            return a;
          })(c);
        }
        function checkOffset(s, o, a) {
          if (s % 1 != 0 || s < 0) throw RangeError("offset is not uint");
          if (s + o > a)
            throw RangeError("Trying to access beyond buffer length");
        }
        function checkInt(s, o, a, c, g, w) {
          if (!Buffer.isBuffer(s))
            throw TypeError('"buffer" argument must be a Buffer instance');
          if (o > g || o < w)
            throw RangeError('"value" argument is out of bounds');
          if (a + c > s.length) throw RangeError("Index out of range");
        }
        function checkIEEE754(s, o, a, c, g, w) {
          if (a + c > s.length || a < 0) throw RangeError("Index out of range");
        }
        function writeFloat(s, o, a, c, w) {
          return (
            (o = +o),
            (a >>>= 0),
            w ||
              checkIEEE754(
                s,
                o,
                a,
                4,
                34028234663852886e22,
                -34028234663852886e22
              ),
            g.write(s, o, a, c, 23, 4),
            a + 4
          );
        }
        function writeDouble(s, o, a, c, w) {
          return (
            (o = +o),
            (a >>>= 0),
            w ||
              checkIEEE754(
                s,
                o,
                a,
                8,
                17976931348623157e292,
                -17976931348623157e292
              ),
            g.write(s, o, a, c, 52, 8),
            a + 8
          );
        }
        (o.lW = Buffer),
          (o.h2 = 50),
          (Buffer.TYPED_ARRAY_SUPPORT = (function () {
            try {
              var s = new Uint8Array(1),
                o = {
                  foo: function () {
                    return 42;
                  },
                };
              return (
                Object.setPrototypeOf(o, Uint8Array.prototype),
                Object.setPrototypeOf(s, o),
                42 === s.foo()
              );
            } catch (s) {
              return !1;
            }
          })()),
          Buffer.TYPED_ARRAY_SUPPORT ||
            "undefined" == typeof console ||
            "function" != typeof console.error ||
            console.error(
              "This browser lacks typed array (Uint8Array) support which is required by `buffer` v5.x. Use `buffer` v4.x if you require old browser support."
            ),
          Object.defineProperty(Buffer.prototype, "parent", {
            enumerable: !0,
            get: function () {
              if (Buffer.isBuffer(this)) return this.buffer;
            },
          }),
          Object.defineProperty(Buffer.prototype, "offset", {
            enumerable: !0,
            get: function () {
              if (Buffer.isBuffer(this)) return this.byteOffset;
            },
          }),
          (Buffer.poolSize = 8192),
          (Buffer.from = function (s, o, a) {
            return from(s, o, a);
          }),
          Object.setPrototypeOf(Buffer.prototype, Uint8Array.prototype),
          Object.setPrototypeOf(Buffer, Uint8Array),
          (Buffer.alloc = function (s, o, a) {
            return (assertSize(s), s <= 0)
              ? createBuffer(s)
              : void 0 !== o
              ? "string" == typeof a
                ? createBuffer(s).fill(o, a)
                : createBuffer(s).fill(o)
              : createBuffer(s);
          }),
          (Buffer.allocUnsafe = function (s) {
            return allocUnsafe(s);
          }),
          (Buffer.allocUnsafeSlow = function (s) {
            return allocUnsafe(s);
          }),
          (Buffer.isBuffer = function (s) {
            return null != s && !0 === s._isBuffer && s !== Buffer.prototype;
          }),
          (Buffer.compare = function (s, o) {
            if (
              (isInstance(s, Uint8Array) &&
                (s = Buffer.from(s, s.offset, s.byteLength)),
              isInstance(o, Uint8Array) &&
                (o = Buffer.from(o, o.offset, o.byteLength)),
              !Buffer.isBuffer(s) || !Buffer.isBuffer(o))
            )
              throw TypeError(
                'The "buf1", "buf2" arguments must be one of type Buffer or Uint8Array'
              );
            if (s === o) return 0;
            for (
              var a = s.length, c = o.length, g = 0, w = Math.min(a, c);
              g < w;
              ++g
            )
              if (s[g] !== o[g]) {
                (a = s[g]), (c = o[g]);
                break;
              }
            return a < c ? -1 : c < a ? 1 : 0;
          }),
          (Buffer.isEncoding = function (s) {
            switch (String(s).toLowerCase()) {
              case "hex":
              case "utf8":
              case "utf-8":
              case "ascii":
              case "latin1":
              case "binary":
              case "base64":
              case "ucs2":
              case "ucs-2":
              case "utf16le":
              case "utf-16le":
                return !0;
              default:
                return !1;
            }
          }),
          (Buffer.concat = function (s, o) {
            if (!Array.isArray(s))
              throw TypeError('"list" argument must be an Array of Buffers');
            if (0 === s.length) return Buffer.alloc(0);
            if (void 0 === o)
              for (a = 0, o = 0; a < s.length; ++a) o += s[a].length;
            var a,
              c = Buffer.allocUnsafe(o),
              g = 0;
            for (a = 0; a < s.length; ++a) {
              var w = s[a];
              if (isInstance(w, Uint8Array))
                g + w.length > c.length
                  ? Buffer.from(w).copy(c, g)
                  : Uint8Array.prototype.set.call(c, w, g);
              else if (Buffer.isBuffer(w)) w.copy(c, g);
              else throw TypeError('"list" argument must be an Array of Buffers');
              g += w.length;
            }
            return c;
          }),
          (Buffer.byteLength = byteLength),
          (Buffer.prototype._isBuffer = !0),
          (Buffer.prototype.swap16 = function () {
            var s = this.length;
            if (s % 2 != 0)
              throw RangeError("Buffer size must be a multiple of 16-bits");
            for (var o = 0; o < s; o += 2) swap(this, o, o + 1);
            return this;
          }),
          (Buffer.prototype.swap32 = function () {
            var s = this.length;
            if (s % 4 != 0)
              throw RangeError("Buffer size must be a multiple of 32-bits");
            for (var o = 0; o < s; o += 4)
              swap(this, o, o + 3), swap(this, o + 1, o + 2);
            return this;
          }),
          (Buffer.prototype.swap64 = function () {
            var s = this.length;
            if (s % 8 != 0)
              throw RangeError("Buffer size must be a multiple of 64-bits");
            for (var o = 0; o < s; o += 8)
              swap(this, o, o + 7),
                swap(this, o + 1, o + 6),
                swap(this, o + 2, o + 5),
                swap(this, o + 3, o + 4);
            return this;
          }),
          (Buffer.prototype.toString = function () {
            var s = this.length;
            return 0 === s
              ? ""
              : 0 == arguments.length
              ? utf8Slice(this, 0, s)
              : slowToString.apply(this, arguments);
          }),
          (Buffer.prototype.toLocaleString = Buffer.prototype.toString),
          (Buffer.prototype.equals = function (s) {
            if (!Buffer.isBuffer(s)) throw TypeError("Argument must be a Buffer");
            return this === s || 0 === Buffer.compare(this, s);
          }),
          (Buffer.prototype.inspect = function () {
            var s = "",
              a = o.h2;
            return (
              (s = this.toString("hex", 0, a)
                .replace(/(.{2})/g, "$1 ")
                .trim()),
              this.length > a && (s += " ... "),
              "<Buffer " + s + ">"
            );
          }),
          w && (Buffer.prototype[w] = Buffer.prototype.inspect),
          (Buffer.prototype.compare = function (s, o, a, c, g) {
            if (
              (isInstance(s, Uint8Array) &&
                (s = Buffer.from(s, s.offset, s.byteLength)),
              !Buffer.isBuffer(s))
            )
              throw TypeError(
                'The "target" argument must be one of type Buffer or Uint8Array. Received type ' +
                  typeof s
              );
            if (
              (void 0 === o && (o = 0),
              void 0 === a && (a = s ? s.length : 0),
              void 0 === c && (c = 0),
              void 0 === g && (g = this.length),
              o < 0 || a > s.length || c < 0 || g > this.length)
            )
              throw RangeError("out of range index");
            if (c >= g && o >= a) return 0;
            if (c >= g) return -1;
            if (o >= a) return 1;
            if (((o >>>= 0), (a >>>= 0), (c >>>= 0), (g >>>= 0), this === s))
              return 0;
            for (
              var w = g - c,
                k = a - o,
                x = Math.min(w, k),
                P = this.slice(c, g),
                A = s.slice(o, a),
                j = 0;
              j < x;
              ++j
            )
              if (P[j] !== A[j]) {
                (w = P[j]), (k = A[j]);
                break;
              }
            return w < k ? -1 : k < w ? 1 : 0;
          }),
          (Buffer.prototype.includes = function (s, o, a) {
            return -1 !== this.indexOf(s, o, a);
          }),
          (Buffer.prototype.indexOf = function (s, o, a) {
            return bidirectionalIndexOf(this, s, o, a, !0);
          }),
          (Buffer.prototype.lastIndexOf = function (s, o, a) {
            return bidirectionalIndexOf(this, s, o, a, !1);
          }),
          (Buffer.prototype.write = function (s, o, a, c) {
            if (void 0 === o) (c = "utf8"), (a = this.length), (o = 0);
            else if (void 0 === a && "string" == typeof o)
              (c = o), (a = this.length), (o = 0);
            else if (isFinite(o))
              (o >>>= 0),
                isFinite(a)
                  ? ((a >>>= 0), void 0 === c && (c = "utf8"))
                  : ((c = a), (a = void 0));
            else
              throw Error(
                "Buffer.write(string, encoding, offset[, length]) is no longer supported"
              );
            var g,
              w,
              k,
              x,
              P,
              A,
              j,
              D,
              z = this.length - o;
            if (
              ((void 0 === a || a > z) && (a = z),
              (s.length > 0 && (a < 0 || o < 0)) || o > this.length)
            )
              throw RangeError("Attempt to write outside buffer bounds");
            c || (c = "utf8");
            for (var $ = !1; ; )
              switch (c) {
                case "hex":
                  return (function (s, o, a, c) {
                    a = Number(a) || 0;
                    var g = s.length - a;
                    c ? (c = Number(c)) > g && (c = g) : (c = g);
                    var w = o.length;
                    c > w / 2 && (c = w / 2);
                    for (var k = 0; k < c; ++k) {
                      var x = parseInt(o.substr(2 * k, 2), 16);
                      if (x != x) break;
                      s[a + k] = x;
                    }
                    return k;
                  })(this, s, o, a);
                case "utf8":
                case "utf-8":
                  return (
                    (g = o),
                    (w = a),
                    blitBuffer(utf8ToBytes(s, this.length - g), this, g, w)
                  );
                case "ascii":
                case "latin1":
                case "binary":
                  return (
                    (k = o),
                    (x = a),
                    blitBuffer(
                      (function (s) {
                        for (var o = [], a = 0; a < s.length; ++a)
                          o.push(255 & s.charCodeAt(a));
                        return o;
                      })(s),
                      this,
                      k,
                      x
                    )
                  );
                case "base64":
                  return (
                    (P = o), (A = a), blitBuffer(base64ToBytes(s), this, P, A)
                  );
                case "ucs2":
                case "ucs-2":
                case "utf16le":
                case "utf-16le":
                  return (
                    (j = o),
                    (D = a),
                    blitBuffer(
                      (function (s, o) {
                        for (
                          var a, c, g = [], w = 0;
                          w < s.length && !((o -= 2) < 0);
                          ++w
                        )
                          (c = (a = s.charCodeAt(w)) >> 8),
                            g.push(a % 256),
                            g.push(c);
                        return g;
                      })(s, this.length - j),
                      this,
                      j,
                      D
                    )
                  );
                default:
                  if ($) throw TypeError("Unknown encoding: " + c);
                  (c = ("" + c).toLowerCase()), ($ = !0);
              }
          }),
          (Buffer.prototype.toJSON = function () {
            return {
              type: "Buffer",
              data: Array.prototype.slice.call(this._arr || this, 0),
            };
          }),
          (Buffer.prototype.slice = function (s, o) {
            var a = this.length;
            (s = ~~s),
              (o = void 0 === o ? a : ~~o),
              s < 0 ? (s += a) < 0 && (s = 0) : s > a && (s = a),
              o < 0 ? (o += a) < 0 && (o = 0) : o > a && (o = a),
              o < s && (o = s);
            var c = this.subarray(s, o);
            return Object.setPrototypeOf(c, Buffer.prototype), c;
          }),
          (Buffer.prototype.readUintLE = Buffer.prototype.readUIntLE =
            function (s, o, a) {
              (s >>>= 0), (o >>>= 0), a || checkOffset(s, o, this.length);
              for (var c = this[s], g = 1, w = 0; ++w < o && (g *= 256); )
                c += this[s + w] * g;
              return c;
            }),
          (Buffer.prototype.readUintBE = Buffer.prototype.readUIntBE =
            function (s, o, a) {
              (s >>>= 0), (o >>>= 0), a || checkOffset(s, o, this.length);
              for (var c = this[s + --o], g = 1; o > 0 && (g *= 256); )
                c += this[s + --o] * g;
              return c;
            }),
          (Buffer.prototype.readUint8 = Buffer.prototype.readUInt8 =
            function (s, o) {
              return (s >>>= 0), o || checkOffset(s, 1, this.length), this[s];
            }),
          (Buffer.prototype.readUint16LE = Buffer.prototype.readUInt16LE =
            function (s, o) {
              return (
                (s >>>= 0),
                o || checkOffset(s, 2, this.length),
                this[s] | (this[s + 1] << 8)
              );
            }),
          (Buffer.prototype.readUint16BE = Buffer.prototype.readUInt16BE =
            function (s, o) {
              return (
                (s >>>= 0),
                o || checkOffset(s, 2, this.length),
                (this[s] << 8) | this[s + 1]
              );
            }),
          (Buffer.prototype.readUint32LE = Buffer.prototype.readUInt32LE =
            function (s, o) {
              return (
                (s >>>= 0),
                o || checkOffset(s, 4, this.length),
                (this[s] | (this[s + 1] << 8) | (this[s + 2] << 16)) +
                  16777216 * this[s + 3]
              );
            }),
          (Buffer.prototype.readUint32BE = Buffer.prototype.readUInt32BE =
            function (s, o) {
              return (
                (s >>>= 0),
                o || checkOffset(s, 4, this.length),
                16777216 * this[s] +
                  ((this[s + 1] << 16) | (this[s + 2] << 8) | this[s + 3])
              );
            }),
          (Buffer.prototype.readIntLE = function (s, o, a) {
            (s >>>= 0), (o >>>= 0), a || checkOffset(s, o, this.length);
            for (var c = this[s], g = 1, w = 0; ++w < o && (g *= 256); )
              c += this[s + w] * g;
            return c >= (g *= 128) && (c -= Math.pow(2, 8 * o)), c;
          }),
          (Buffer.prototype.readIntBE = function (s, o, a) {
            (s >>>= 0), (o >>>= 0), a || checkOffset(s, o, this.length);
            for (var c = o, g = 1, w = this[s + --c]; c > 0 && (g *= 256); )
              w += this[s + --c] * g;
            return w >= (g *= 128) && (w -= Math.pow(2, 8 * o)), w;
          }),
          (Buffer.prototype.readInt8 = function (s, o) {
            return ((s >>>= 0),
            o || checkOffset(s, 1, this.length),
            128 & this[s])
              ? -((255 - this[s] + 1) * 1)
              : this[s];
          }),
          (Buffer.prototype.readInt16LE = function (s, o) {
            (s >>>= 0), o || checkOffset(s, 2, this.length);
            var a = this[s] | (this[s + 1] << 8);
            return 32768 & a ? 4294901760 | a : a;
          }),
          (Buffer.prototype.readInt16BE = function (s, o) {
            (s >>>= 0), o || checkOffset(s, 2, this.length);
            var a = this[s + 1] | (this[s] << 8);
            return 32768 & a ? 4294901760 | a : a;
          }),
          (Buffer.prototype.readInt32LE = function (s, o) {
            return (
              (s >>>= 0),
              o || checkOffset(s, 4, this.length),
              this[s] |
                (this[s + 1] << 8) |
                (this[s + 2] << 16) |
                (this[s + 3] << 24)
            );
          }),
          (Buffer.prototype.readInt32BE = function (s, o) {
            return (
              (s >>>= 0),
              o || checkOffset(s, 4, this.length),
              (this[s] << 24) |
                (this[s + 1] << 16) |
                (this[s + 2] << 8) |
                this[s + 3]
            );
          }),
          (Buffer.prototype.readFloatLE = function (s, o) {
            return (
              (s >>>= 0),
              o || checkOffset(s, 4, this.length),
              g.read(this, s, !0, 23, 4)
            );
          }),
          (Buffer.prototype.readFloatBE = function (s, o) {
            return (
              (s >>>= 0),
              o || checkOffset(s, 4, this.length),
              g.read(this, s, !1, 23, 4)
            );
          }),
          (Buffer.prototype.readDoubleLE = function (s, o) {
            return (
              (s >>>= 0),
              o || checkOffset(s, 8, this.length),
              g.read(this, s, !0, 52, 8)
            );
          }),
          (Buffer.prototype.readDoubleBE = function (s, o) {
            return (
              (s >>>= 0),
              o || checkOffset(s, 8, this.length),
              g.read(this, s, !1, 52, 8)
            );
          }),
          (Buffer.prototype.writeUintLE = Buffer.prototype.writeUIntLE =
            function (s, o, a, c) {
              if (((s = +s), (o >>>= 0), (a >>>= 0), !c)) {
                var g = Math.pow(2, 8 * a) - 1;
                checkInt(this, s, o, a, g, 0);
              }
              var w = 1,
                k = 0;
              for (this[o] = 255 & s; ++k < a && (w *= 256); )
                this[o + k] = (s / w) & 255;
              return o + a;
            }),
          (Buffer.prototype.writeUintBE = Buffer.prototype.writeUIntBE =
            function (s, o, a, c) {
              if (((s = +s), (o >>>= 0), (a >>>= 0), !c)) {
                var g = Math.pow(2, 8 * a) - 1;
                checkInt(this, s, o, a, g, 0);
              }
              var w = a - 1,
                k = 1;
              for (this[o + w] = 255 & s; --w >= 0 && (k *= 256); )
                this[o + w] = (s / k) & 255;
              return o + a;
            }),
          (Buffer.prototype.writeUint8 = Buffer.prototype.writeUInt8 =
            function (s, o, a) {
              return (
                (s = +s),
                (o >>>= 0),
                a || checkInt(this, s, o, 1, 255, 0),
                (this[o] = 255 & s),
                o + 1
              );
            }),
          (Buffer.prototype.writeUint16LE = Buffer.prototype.writeUInt16LE =
            function (s, o, a) {
              return (
                (s = +s),
                (o >>>= 0),
                a || checkInt(this, s, o, 2, 65535, 0),
                (this[o] = 255 & s),
                (this[o + 1] = s >>> 8),
                o + 2
              );
            }),
          (Buffer.prototype.writeUint16BE = Buffer.prototype.writeUInt16BE =
            function (s, o, a) {
              return (
                (s = +s),
                (o >>>= 0),
                a || checkInt(this, s, o, 2, 65535, 0),
                (this[o] = s >>> 8),
                (this[o + 1] = 255 & s),
                o + 2
              );
            }),
          (Buffer.prototype.writeUint32LE = Buffer.prototype.writeUInt32LE =
            function (s, o, a) {
              return (
                (s = +s),
                (o >>>= 0),
                a || checkInt(this, s, o, 4, 4294967295, 0),
                (this[o + 3] = s >>> 24),
                (this[o + 2] = s >>> 16),
                (this[o + 1] = s >>> 8),
                (this[o] = 255 & s),
                o + 4
              );
            }),
          (Buffer.prototype.writeUint32BE = Buffer.prototype.writeUInt32BE =
            function (s, o, a) {
              return (
                (s = +s),
                (o >>>= 0),
                a || checkInt(this, s, o, 4, 4294967295, 0),
                (this[o] = s >>> 24),
                (this[o + 1] = s >>> 16),
                (this[o + 2] = s >>> 8),
                (this[o + 3] = 255 & s),
                o + 4
              );
            }),
          (Buffer.prototype.writeIntLE = function (s, o, a, c) {
            if (((s = +s), (o >>>= 0), !c)) {
              var g = Math.pow(2, 8 * a - 1);
              checkInt(this, s, o, a, g - 1, -g);
            }
            var w = 0,
              k = 1,
              x = 0;
            for (this[o] = 255 & s; ++w < a && (k *= 256); )
              s < 0 && 0 === x && 0 !== this[o + w - 1] && (x = 1),
                (this[o + w] = (((s / k) >> 0) - x) & 255);
            return o + a;
          }),
          (Buffer.prototype.writeIntBE = function (s, o, a, c) {
            if (((s = +s), (o >>>= 0), !c)) {
              var g = Math.pow(2, 8 * a - 1);
              checkInt(this, s, o, a, g - 1, -g);
            }
            var w = a - 1,
              k = 1,
              x = 0;
            for (this[o + w] = 255 & s; --w >= 0 && (k *= 256); )
              s < 0 && 0 === x && 0 !== this[o + w + 1] && (x = 1),
                (this[o + w] = (((s / k) >> 0) - x) & 255);
            return o + a;
          }),
          (Buffer.prototype.writeInt8 = function (s, o, a) {
            return (
              (s = +s),
              (o >>>= 0),
              a || checkInt(this, s, o, 1, 127, -128),
              s < 0 && (s = 255 + s + 1),
              (this[o] = 255 & s),
              o + 1
            );
          }),
          (Buffer.prototype.writeInt16LE = function (s, o, a) {
            return (
              (s = +s),
              (o >>>= 0),
              a || checkInt(this, s, o, 2, 32767, -32768),
              (this[o] = 255 & s),
              (this[o + 1] = s >>> 8),
              o + 2
            );
          }),
          (Buffer.prototype.writeInt16BE = function (s, o, a) {
            return (
              (s = +s),
              (o >>>= 0),
              a || checkInt(this, s, o, 2, 32767, -32768),
              (this[o] = s >>> 8),
              (this[o + 1] = 255 & s),
              o + 2
            );
          }),
          (Buffer.prototype.writeInt32LE = function (s, o, a) {
            return (
              (s = +s),
              (o >>>= 0),
              a || checkInt(this, s, o, 4, 2147483647, -2147483648),
              (this[o] = 255 & s),
              (this[o + 1] = s >>> 8),
              (this[o + 2] = s >>> 16),
              (this[o + 3] = s >>> 24),
              o + 4
            );
          }),
          (Buffer.prototype.writeInt32BE = function (s, o, a) {
            return (
              (s = +s),
              (o >>>= 0),
              a || checkInt(this, s, o, 4, 2147483647, -2147483648),
              s < 0 && (s = 4294967295 + s + 1),
              (this[o] = s >>> 24),
              (this[o + 1] = s >>> 16),
              (this[o + 2] = s >>> 8),
              (this[o + 3] = 255 & s),
              o + 4
            );
          }),
          (Buffer.prototype.writeFloatLE = function (s, o, a) {
            return writeFloat(this, s, o, !0, a);
          }),
          (Buffer.prototype.writeFloatBE = function (s, o, a) {
            return writeFloat(this, s, o, !1, a);
          }),
          (Buffer.prototype.writeDoubleLE = function (s, o, a) {
            return writeDouble(this, s, o, !0, a);
          }),
          (Buffer.prototype.writeDoubleBE = function (s, o, a) {
            return writeDouble(this, s, o, !1, a);
          }),
          (Buffer.prototype.copy = function (s, o, a, c) {
            if (!Buffer.isBuffer(s))
              throw TypeError("argument should be a Buffer");
            if (
              (a || (a = 0),
              c || 0 === c || (c = this.length),
              o >= s.length && (o = s.length),
              o || (o = 0),
              c > 0 && c < a && (c = a),
              c === a || 0 === s.length || 0 === this.length)
            )
              return 0;
            if (o < 0) throw RangeError("targetStart out of bounds");
            if (a < 0 || a >= this.length) throw RangeError("Index out of range");
            if (c < 0) throw RangeError("sourceEnd out of bounds");
            c > this.length && (c = this.length),
              s.length - o < c - a && (c = s.length - o + a);
            var g = c - a;
            return (
              this === s && "function" == typeof Uint8Array.prototype.copyWithin
                ? this.copyWithin(o, a, c)
                : Uint8Array.prototype.set.call(s, this.subarray(a, c), o),
              g
            );
          }),
          (Buffer.prototype.fill = function (s, o, a, c) {
            if ("string" == typeof s) {
              if (
                ("string" == typeof o
                  ? ((c = o), (o = 0), (a = this.length))
                  : "string" == typeof a && ((c = a), (a = this.length)),
                void 0 !== c && "string" != typeof c)
              )
                throw TypeError("encoding must be a string");
              if ("string" == typeof c && !Buffer.isEncoding(c))
                throw TypeError("Unknown encoding: " + c);
              if (1 === s.length) {
                var g,
                  w = s.charCodeAt(0);
                (("utf8" === c && w < 128) || "latin1" === c) && (s = w);
              }
            } else
              "number" == typeof s
                ? (s &= 255)
                : "boolean" == typeof s && (s = Number(s));
            if (o < 0 || this.length < o || this.length < a)
              throw RangeError("Out of range index");
            if (a <= o) return this;
            if (
              ((o >>>= 0),
              (a = void 0 === a ? this.length : a >>> 0),
              s || (s = 0),
              "number" == typeof s)
            )
              for (g = o; g < a; ++g) this[g] = s;
            else {
              var k = Buffer.isBuffer(s) ? s : Buffer.from(s, c),
                x = k.length;
              if (0 === x)
                throw TypeError(
                  'The value "' + s + '" is invalid for argument "value"'
                );
              for (g = 0; g < a - o; ++g) this[g + o] = k[g % x];
            }
            return this;
          });
        var k = /[^+/0-9A-Za-z-_]/g;
        function utf8ToBytes(s, o) {
          o = o || 1 / 0;
          for (var a, c = s.length, g = null, w = [], k = 0; k < c; ++k) {
            if ((a = s.charCodeAt(k)) > 55295 && a < 57344) {
              if (!g) {
                if (a > 56319 || k + 1 === c) {
                  (o -= 3) > -1 && w.push(239, 191, 189);
                  continue;
                }
                g = a;
                continue;
              }
              if (a < 56320) {
                (o -= 3) > -1 && w.push(239, 191, 189), (g = a);
                continue;
              }
              a = (((g - 55296) << 10) | (a - 56320)) + 65536;
            } else g && (o -= 3) > -1 && w.push(239, 191, 189);
            if (((g = null), a < 128)) {
              if ((o -= 1) < 0) break;
              w.push(a);
            } else if (a < 2048) {
              if ((o -= 2) < 0) break;
              w.push((a >> 6) | 192, (63 & a) | 128);
            } else if (a < 65536) {
              if ((o -= 3) < 0) break;
              w.push((a >> 12) | 224, ((a >> 6) & 63) | 128, (63 & a) | 128);
            } else if (a < 1114112) {
              if ((o -= 4) < 0) break;
              w.push(
                (a >> 18) | 240,
                ((a >> 12) & 63) | 128,
                ((a >> 6) & 63) | 128,
                (63 & a) | 128
              );
            } else throw Error("Invalid code point");
          }
          return w;
        }
        function base64ToBytes(s) {
          return c.toByteArray(
            (function (s) {
              if ((s = (s = s.split("=")[0]).trim().replace(k, "")).length < 2)
                return "";
              for (; s.length % 4 != 0; ) s += "=";
              return s;
            })(s)
          );
        }
        function blitBuffer(s, o, a, c) {
          for (var g = 0; g < c && !(g + a >= o.length) && !(g >= s.length); ++g)
            o[g + a] = s[g];
          return g;
        }
        function isInstance(s, o) {
          return (
            s instanceof o ||
            (null != s &&
              null != s.constructor &&
              null != s.constructor.name &&
              s.constructor.name === o.name)
          );
        }
        var x = (function () {
          for (var s = "0123456789abcdef", o = Array(256), a = 0; a < 16; ++a)
            for (var c = 16 * a, g = 0; g < 16; ++g) o[c + g] = s[a] + s[g];
          return o;
        })();
      },
      34061: function (s, o, a) {
        "use strict";
        let c;
        let g = a(26434),
          { stdout: w, stderr: k } = a(8555),
          { stringReplaceAll: x, stringEncaseCRLFWithFirstIndex: P } = a(33559),
          { isArray: A } = Array,
          j = ["ansi", "ansi", "ansi256", "ansi16m"],
          D = Object.create(null),
          applyOptions = (s, o = {}) => {
            if (
              o.level &&
              !(Number.isInteger(o.level) && o.level >= 0 && o.level <= 3)
            )
              throw Error("The `level` option should be an integer from 0 to 3");
            let a = w ? w.level : 0;
            s.level = void 0 === o.level ? a : o.level;
          };
        let ChalkClass = class ChalkClass {
          constructor(s) {
            return chalkFactory(s);
          }
        };
        let chalkFactory = (s) => {
          let o = {};
          return (
            applyOptions(o, s),
            (o.template = (...s) => chalkTag(o.template, ...s)),
            Object.setPrototypeOf(o, Chalk.prototype),
            Object.setPrototypeOf(o.template, o),
            (o.template.constructor = () => {
              throw Error(
                "`chalk.constructor()` is deprecated. Use `new chalk.Instance()` instead."
              );
            }),
            (o.template.Instance = ChalkClass),
            o.template
          );
        };
        function Chalk(s) {
          return chalkFactory(s);
        }
        for (let [s, o] of Object.entries(g))
          D[s] = {
            get() {
              let a = createBuilder(
                this,
                createStyler(o.open, o.close, this._styler),
                this._isEmpty
              );
              return Object.defineProperty(this, s, { value: a }), a;
            },
          };
        D.visible = {
          get() {
            let s = createBuilder(this, this._styler, !0);
            return Object.defineProperty(this, "visible", { value: s }), s;
          },
        };
        let z = ["rgb", "hex", "keyword", "hsl", "hsv", "hwb", "ansi", "ansi256"];
        for (let s of z)
          D[s] = {
            get() {
              let { level: o } = this;
              return function (...a) {
                let c = createStyler(
                  g.color[j[o]][s](...a),
                  g.color.close,
                  this._styler
                );
                return createBuilder(this, c, this._isEmpty);
              };
            },
          };
        for (let s of z) {
          let o = "bg" + s[0].toUpperCase() + s.slice(1);
          D[o] = {
            get() {
              let { level: o } = this;
              return function (...a) {
                let c = createStyler(
                  g.bgColor[j[o]][s](...a),
                  g.bgColor.close,
                  this._styler
                );
                return createBuilder(this, c, this._isEmpty);
              };
            },
          };
        }
        let $ = Object.defineProperties(() => {}, {
            ...D,
            level: {
              enumerable: !0,
              get() {
                return this._generator.level;
              },
              set(s) {
                this._generator.level = s;
              },
            },
          }),
          createStyler = (s, o, a) => {
            let c, g;
            return (
              void 0 === a
                ? ((c = s), (g = o))
                : ((c = a.openAll + s), (g = o + a.closeAll)),
              { open: s, close: o, openAll: c, closeAll: g, parent: a }
            );
          },
          createBuilder = (s, o, a) => {
            let builder = (...s) =>
              A(s[0]) && A(s[0].raw)
                ? applyStyle(builder, chalkTag(builder, ...s))
                : applyStyle(builder, 1 === s.length ? "" + s[0] : s.join(" "));
            return (
              Object.setPrototypeOf(builder, $),
              (builder._generator = s),
              (builder._styler = o),
              (builder._isEmpty = a),
              builder
            );
          },
          applyStyle = (s, o) => {
            if (s.level <= 0 || !o) return s._isEmpty ? "" : o;
            let a = s._styler;
            if (void 0 === a) return o;
            let { openAll: c, closeAll: g } = a;
            if (-1 !== o.indexOf("\x1b"))
              for (; void 0 !== a; ) (o = x(o, a.close, a.open)), (a = a.parent);
            let w = o.indexOf("\n");
            return -1 !== w && (o = P(o, g, c, w)), c + o + g;
          },
          chalkTag = (s, ...o) => {
            let [g] = o;
            if (!A(g) || !A(g.raw)) return o.join(" ");
            let w = o.slice(1),
              k = [g.raw[0]];
            for (let s = 1; s < g.length; s++)
              k.push(
                String(w[s - 1]).replace(/[{}\\]/g, "\\$&"),
                String(g.raw[s])
              );
            return void 0 === c && (c = a(79515)), c(s, k.join(""));
          };
        Object.defineProperties(Chalk.prototype, D);
        let W = chalkFactory(void 0);
        (W.supportsColor = w),
          (W.stderr = chalkFactory({ level: k ? k.level : 0 })),
          (W.stderr.supportsColor = k),
          (s.exports = W);
      },
      79515: function (s) {
        "use strict";
        let o =
            /(?:\\(u(?:[a-f\d]{4}|\{[a-f\d]{1,6}\})|x[a-f\d]{2}|.))|(?:\{(~)?(\w+(?:\([^)]*\))?(?:\.\w+(?:\([^)]*\))?)*)(?:[ \t]|(?=\r?\n)))|(\})|((?:.|[\r\n\f])+?)/gi,
          a = /(?:^|\.)(\w+)(?:\(([^)]*)\))?/g,
          c = /^(['"])((?:\\.|(?!\1)[^\\])*)\1$/,
          g = /\\(u(?:[a-f\d]{4}|{[a-f\d]{1,6}})|x[a-f\d]{2}|.)|([^\\])/gi,
          w = new Map([
            ["n", "\n"],
            ["r", "\r"],
            ["t", "	"],
            ["b", "\b"],
            ["f", "\f"],
            ["v", "\v"],
            ["0", "\x00"],
            ["\\", "\\"],
            ["e", "\x1b"],
            ["a", "\x07"],
          ]);
        function unescape(s) {
          let o = "u" === s[0],
            a = "{" === s[1];
          return (o && !a && 5 === s.length) || ("x" === s[0] && 3 === s.length)
            ? String.fromCharCode(parseInt(s.slice(1), 16))
            : o && a
            ? String.fromCodePoint(parseInt(s.slice(2, -1), 16))
            : w.get(s) || s;
        }
        function buildStyle(s, o) {
          let a = {};
          for (let s of o)
            for (let o of s.styles) a[o[0]] = s.inverse ? null : o.slice(1);
          let c = s;
          for (let [s, o] of Object.entries(a))
            if (Array.isArray(o)) {
              if (!(s in c)) throw Error(`Unknown Chalk style: ${s}`);
              c = o.length > 0 ? c[s](...o) : c[s];
            }
          return c;
        }
        s.exports = (s, w) => {
          let k = [],
            x = [],
            P = [];
          if (
            (w.replace(o, (o, w, A, j, D, z) => {
              if (w) P.push(unescape(w));
              else if (j) {
                let o = P.join("");
                (P = []),
                  x.push(0 === k.length ? o : buildStyle(s, k)(o)),
                  k.push({
                    inverse: A,
                    styles: (function (s) {
                      let o;
                      a.lastIndex = 0;
                      let w = [];
                      for (; null !== (o = a.exec(s)); ) {
                        let s = o[1];
                        if (o[2]) {
                          let a = (function (s, o) {
                            let a;
                            let w = [],
                              k = o.trim().split(/\s*,\s*/g);
                            for (let o of k) {
                              let k = Number(o);
                              if (Number.isNaN(k)) {
                                if ((a = o.match(c)))
                                  w.push(
                                    a[2].replace(g, (s, o, a) =>
                                      o ? unescape(o) : a
                                    )
                                  );
                                else
                                  throw Error(
                                    `Invalid Chalk template style argument: ${o} (in style '${s}')`
                                  );
                              } else w.push(k);
                            }
                            return w;
                          })(s, o[2]);
                          w.push([s].concat(a));
                        } else w.push([s]);
                      }
                      return w;
                    })(j),
                  });
              } else if (D) {
                if (0 === k.length)
                  throw Error("Found extraneous } in Chalk template literal");
                x.push(buildStyle(s, k)(P.join(""))), (P = []), k.pop();
              } else P.push(z);
            }),
            x.push(P.join("")),
            k.length > 0)
          ) {
            let s = `Chalk template literal is missing ${
              k.length
            } closing bracket${1 === k.length ? "" : "s"} (\`}\`)`;
            throw Error(s);
          }
          return x.join("");
        };
      },
      33559: function (s) {
        "use strict";
        s.exports = {
          stringReplaceAll: (s, o, a) => {
            let c = s.indexOf(o);
            if (-1 === c) return s;
            let g = o.length,
              w = 0,
              k = "";
            do
              (k += s.substr(w, c - w) + o + a),
                (w = c + g),
                (c = s.indexOf(o, w));
            while (-1 !== c);
            return k + s.substr(w);
          },
          stringEncaseCRLFWithFirstIndex: (s, o, a, c) => {
            let g = 0,
              w = "";
            do {
              let k = "\r" === s[c - 1];
              (w +=
                s.substr(g, (k ? c - 1 : c) - g) + o + (k ? "\r\n" : "\n") + a),
                (g = c + 1),
                (c = s.indexOf("\n", g));
            } while (-1 !== c);
            return w + s.substr(g);
          },
        };
      },
      48168: function (s, o, a) {
        let c = a(8874),
          g = {};
        for (let s of Object.keys(c)) g[c[s]] = s;
        let w = {
          rgb: { channels: 3, labels: "rgb" },
          hsl: { channels: 3, labels: "hsl" },
          hsv: { channels: 3, labels: "hsv" },
          hwb: { channels: 3, labels: "hwb" },
          cmyk: { channels: 4, labels: "cmyk" },
          xyz: { channels: 3, labels: "xyz" },
          lab: { channels: 3, labels: "lab" },
          lch: { channels: 3, labels: "lch" },
          hex: { channels: 1, labels: ["hex"] },
          keyword: { channels: 1, labels: ["keyword"] },
          ansi16: { channels: 1, labels: ["ansi16"] },
          ansi256: { channels: 1, labels: ["ansi256"] },
          hcg: { channels: 3, labels: ["h", "c", "g"] },
          apple: { channels: 3, labels: ["r16", "g16", "b16"] },
          gray: { channels: 1, labels: ["gray"] },
        };
        for (let o of ((s.exports = w), Object.keys(w))) {
          if (!("channels" in w[o]))
            throw Error("missing channels property: " + o);
          if (!("labels" in w[o]))
            throw Error("missing channel labels property: " + o);
          if (w[o].labels.length !== w[o].channels)
            throw Error("channel and label counts mismatch: " + o);
          let { channels: s, labels: a } = w[o];
          delete w[o].channels,
            delete w[o].labels,
            Object.defineProperty(w[o], "channels", { value: s }),
            Object.defineProperty(w[o], "labels", { value: a });
        }
        (w.rgb.hsl = function (s) {
          let o;
          let a = s[0] / 255,
            c = s[1] / 255,
            g = s[2] / 255,
            w = Math.min(a, c, g),
            k = Math.max(a, c, g),
            x = k - w;
          k === w
            ? (o = 0)
            : a === k
            ? (o = (c - g) / x)
            : c === k
            ? (o = 2 + (g - a) / x)
            : g === k && (o = 4 + (a - c) / x),
            (o = Math.min(60 * o, 360)) < 0 && (o += 360);
          let P = (w + k) / 2;
          return [
            o,
            100 * (k === w ? 0 : P <= 0.5 ? x / (k + w) : x / (2 - k - w)),
            100 * P,
          ];
        }),
          (w.rgb.hsv = function (s) {
            let o, a, c, g, w;
            let k = s[0] / 255,
              x = s[1] / 255,
              P = s[2] / 255,
              A = Math.max(k, x, P),
              j = A - Math.min(k, x, P),
              diffc = function (s) {
                return (A - s) / 6 / j + 0.5;
              };
            return (
              0 === j
                ? ((g = 0), (w = 0))
                : ((w = j / A),
                  (o = diffc(k)),
                  (a = diffc(x)),
                  (c = diffc(P)),
                  k === A
                    ? (g = c - a)
                    : x === A
                    ? (g = 1 / 3 + o - c)
                    : P === A && (g = 2 / 3 + a - o),
                  g < 0 ? (g += 1) : g > 1 && (g -= 1)),
              [360 * g, 100 * w, 100 * A]
            );
          }),
          (w.rgb.hwb = function (s) {
            let o = s[0],
              a = s[1],
              c = s[2],
              g = w.rgb.hsl(s)[0],
              k = (1 / 255) * Math.min(o, Math.min(a, c));
            return [
              g,
              100 * k,
              100 * (c = 1 - (1 / 255) * Math.max(o, Math.max(a, c))),
            ];
          }),
          (w.rgb.cmyk = function (s) {
            let o = s[0] / 255,
              a = s[1] / 255,
              c = s[2] / 255,
              g = Math.min(1 - o, 1 - a, 1 - c);
            return [
              100 * ((1 - o - g) / (1 - g) || 0),
              100 * ((1 - a - g) / (1 - g) || 0),
              100 * ((1 - c - g) / (1 - g) || 0),
              100 * g,
            ];
          }),
          (w.rgb.keyword = function (s) {
            let o;
            let a = g[s];
            if (a) return a;
            let w = 1 / 0;
            for (let a of Object.keys(c)) {
              let g = c[a],
                k = (s[0] - g[0]) ** 2 + (s[1] - g[1]) ** 2 + (s[2] - g[2]) ** 2;
              k < w && ((w = k), (o = a));
            }
            return o;
          }),
          (w.keyword.rgb = function (s) {
            return c[s];
          }),
          (w.rgb.xyz = function (s) {
            let o = s[0] / 255,
              a = s[1] / 255,
              c = s[2] / 255;
            (o = o > 0.04045 ? ((o + 0.055) / 1.055) ** 2.4 : o / 12.92),
              (a = a > 0.04045 ? ((a + 0.055) / 1.055) ** 2.4 : a / 12.92),
              (c = c > 0.04045 ? ((c + 0.055) / 1.055) ** 2.4 : c / 12.92);
            let g = 0.4124 * o + 0.3576 * a + 0.1805 * c,
              w = 0.2126 * o + 0.7152 * a + 0.0722 * c,
              k = 0.0193 * o + 0.1192 * a + 0.9505 * c;
            return [100 * g, 100 * w, 100 * k];
          }),
          (w.rgb.lab = function (s) {
            let o = w.rgb.xyz(s),
              a = o[0],
              c = o[1],
              g = o[2];
            (a /= 95.047),
              (c /= 100),
              (g /= 108.883),
              (a = a > 0.008856 ? a ** (1 / 3) : 7.787 * a + 16 / 116),
              (c = c > 0.008856 ? c ** (1 / 3) : 7.787 * c + 16 / 116),
              (g = g > 0.008856 ? g ** (1 / 3) : 7.787 * g + 16 / 116);
            let k = 116 * c - 16,
              x = 500 * (a - c),
              P = 200 * (c - g);
            return [k, x, P];
          }),
          (w.hsl.rgb = function (s) {
            let o, a, c;
            let g = s[0] / 360,
              w = s[1] / 100,
              k = s[2] / 100;
            if (0 === w) return [(c = 255 * k), c, c];
            o = k < 0.5 ? k * (1 + w) : k + w - k * w;
            let x = 2 * k - o,
              P = [0, 0, 0];
            for (let s = 0; s < 3; s++)
              (a = g + -((1 / 3) * (s - 1))) < 0 && a++,
                a > 1 && a--,
                (c =
                  6 * a < 1
                    ? x + (o - x) * 6 * a
                    : 2 * a < 1
                    ? o
                    : 3 * a < 2
                    ? x + (o - x) * (2 / 3 - a) * 6
                    : x),
                (P[s] = 255 * c);
            return P;
          }),
          (w.hsl.hsv = function (s) {
            let o = s[0],
              a = s[1] / 100,
              c = s[2] / 100,
              g = a,
              w = Math.max(c, 0.01);
            (c *= 2), (a *= c <= 1 ? c : 2 - c), (g *= w <= 1 ? w : 2 - w);
            let k = (c + a) / 2,
              x = 0 === c ? (2 * g) / (w + g) : (2 * a) / (c + a);
            return [o, 100 * x, 100 * k];
          }),
          (w.hsv.rgb = function (s) {
            let o = s[0] / 60,
              a = s[1] / 100,
              c = s[2] / 100,
              g = Math.floor(o) % 6,
              w = o - Math.floor(o),
              k = 255 * c * (1 - a),
              x = 255 * c * (1 - a * w),
              P = 255 * c * (1 - a * (1 - w));
            switch (((c *= 255), g)) {
              case 0:
                return [c, P, k];
              case 1:
                return [x, c, k];
              case 2:
                return [k, c, P];
              case 3:
                return [k, x, c];
              case 4:
                return [P, k, c];
              case 5:
                return [c, k, x];
            }
          }),
          (w.hsv.hsl = function (s) {
            let o, a;
            let c = s[0],
              g = s[1] / 100,
              w = s[2] / 100,
              k = Math.max(w, 0.01);
            a = (2 - g) * w;
            let x = (2 - g) * k;
            return [
              c,
              100 * ((g * k) / (x <= 1 ? x : 2 - x) || 0),
              100 * (a /= 2),
            ];
          }),
          (w.hwb.rgb = function (s) {
            let o, a, c, g;
            let w = s[0] / 360,
              k = s[1] / 100,
              x = s[2] / 100,
              P = k + x;
            P > 1 && ((k /= P), (x /= P));
            let A = Math.floor(6 * w),
              j = 1 - x;
            (o = 6 * w - A), (1 & A) != 0 && (o = 1 - o);
            let D = k + o * (j - k);
            switch (A) {
              default:
              case 6:
              case 0:
                (a = j), (c = D), (g = k);
                break;
              case 1:
                (a = D), (c = j), (g = k);
                break;
              case 2:
                (a = k), (c = j), (g = D);
                break;
              case 3:
                (a = k), (c = D), (g = j);
                break;
              case 4:
                (a = D), (c = k), (g = j);
                break;
              case 5:
                (a = j), (c = k), (g = D);
            }
            return [255 * a, 255 * c, 255 * g];
          }),
          (w.cmyk.rgb = function (s) {
            let o = s[0] / 100,
              a = s[1] / 100,
              c = s[2] / 100,
              g = s[3] / 100,
              w = 1 - Math.min(1, o * (1 - g) + g),
              k = 1 - Math.min(1, a * (1 - g) + g),
              x = 1 - Math.min(1, c * (1 - g) + g);
            return [255 * w, 255 * k, 255 * x];
          }),
          (w.xyz.rgb = function (s) {
            let o, a, c;
            let g = s[0] / 100,
              w = s[1] / 100,
              k = s[2] / 100;
            return (
              (o =
                (o = 3.2406 * g + -1.5372 * w + -0.4986 * k) > 0.0031308
                  ? 1.055 * o ** (1 / 2.4) - 0.055
                  : 12.92 * o),
              (a =
                (a = -0.9689 * g + 1.8758 * w + 0.0415 * k) > 0.0031308
                  ? 1.055 * a ** (1 / 2.4) - 0.055
                  : 12.92 * a),
              (c =
                (c = 0.0557 * g + -0.204 * w + 1.057 * k) > 0.0031308
                  ? 1.055 * c ** (1 / 2.4) - 0.055
                  : 12.92 * c),
              [
                255 * (o = Math.min(Math.max(0, o), 1)),
                255 * (a = Math.min(Math.max(0, a), 1)),
                255 * (c = Math.min(Math.max(0, c), 1)),
              ]
            );
          }),
          (w.xyz.lab = function (s) {
            let o = s[0],
              a = s[1],
              c = s[2];
            (o /= 95.047),
              (a /= 100),
              (c /= 108.883),
              (o = o > 0.008856 ? o ** (1 / 3) : 7.787 * o + 16 / 116),
              (a = a > 0.008856 ? a ** (1 / 3) : 7.787 * a + 16 / 116),
              (c = c > 0.008856 ? c ** (1 / 3) : 7.787 * c + 16 / 116);
            let g = 116 * a - 16,
              w = 500 * (o - a),
              k = 200 * (a - c);
            return [g, w, k];
          }),
          (w.lab.xyz = function (s) {
            let o, a, c;
            let g = s[0],
              w = s[1],
              k = s[2];
            (o = w / 500 + (a = (g + 16) / 116)), (c = a - k / 200);
            let x = a ** 3,
              P = o ** 3,
              A = c ** 3;
            return (
              (a = (x > 0.008856 ? x : (a - 16 / 116) / 7.787) * 100),
              [
                (o = (P > 0.008856 ? P : (o - 16 / 116) / 7.787) * 95.047),
                a,
                (c = (A > 0.008856 ? A : (c - 16 / 116) / 7.787) * 108.883),
              ]
            );
          }),
          (w.lab.lch = function (s) {
            let o;
            let a = s[0],
              c = s[1],
              g = s[2],
              w = Math.atan2(g, c);
            (o = (360 * w) / 2 / Math.PI) < 0 && (o += 360);
            let k = Math.sqrt(c * c + g * g);
            return [a, k, o];
          }),
          (w.lch.lab = function (s) {
            let o = s[0],
              a = s[1],
              c = s[2],
              g = (c / 360) * 2 * Math.PI,
              w = a * Math.cos(g),
              k = a * Math.sin(g);
            return [o, w, k];
          }),
          (w.rgb.ansi16 = function (s, o = null) {
            let [a, c, g] = s,
              k = null === o ? w.rgb.hsv(s)[2] : o;
            if (0 === (k = Math.round(k / 50))) return 30;
            let x =
              30 +
              ((Math.round(g / 255) << 2) |
                (Math.round(c / 255) << 1) |
                Math.round(a / 255));
            return 2 === k && (x += 60), x;
          }),
          (w.hsv.ansi16 = function (s) {
            return w.rgb.ansi16(w.hsv.rgb(s), s[2]);
          }),
          (w.rgb.ansi256 = function (s) {
            let o = s[0],
              a = s[1],
              c = s[2];
            if (o === a && a === c)
              return o < 8
                ? 16
                : o > 248
                ? 231
                : Math.round(((o - 8) / 247) * 24) + 232;
            let g =
              16 +
              36 * Math.round((o / 255) * 5) +
              6 * Math.round((a / 255) * 5) +
              Math.round((c / 255) * 5);
            return g;
          }),
          (w.ansi16.rgb = function (s) {
            let o = s % 10;
            if (0 === o || 7 === o)
              return s > 50 && (o += 3.5), [(o = (o / 10.5) * 255), o, o];
            let a = (~~(s > 50) + 1) * 0.5,
              c = (1 & o) * a * 255,
              g = ((o >> 1) & 1) * a * 255,
              w = ((o >> 2) & 1) * a * 255;
            return [c, g, w];
          }),
          (w.ansi256.rgb = function (s) {
            let o;
            if (s >= 232) {
              let o = (s - 232) * 10 + 8;
              return [o, o, o];
            }
            s -= 16;
            let a = (Math.floor(s / 36) / 5) * 255,
              c = (Math.floor((o = s % 36) / 6) / 5) * 255;
            return [a, c, ((o % 6) / 5) * 255];
          }),
          (w.rgb.hex = function (s) {
            let o =
                ((255 & Math.round(s[0])) << 16) +
                ((255 & Math.round(s[1])) << 8) +
                (255 & Math.round(s[2])),
              a = o.toString(16).toUpperCase();
            return "000000".substring(a.length) + a;
          }),
          (w.hex.rgb = function (s) {
            let o = s.toString(16).match(/[a-f0-9]{6}|[a-f0-9]{3}/i);
            if (!o) return [0, 0, 0];
            let a = o[0];
            3 === o[0].length &&
              (a = a
                .split("")
                .map((s) => s + s)
                .join(""));
            let c = parseInt(a, 16);
            return [(c >> 16) & 255, (c >> 8) & 255, 255 & c];
          }),
          (w.rgb.hcg = function (s) {
            let o = s[0] / 255,
              a = s[1] / 255,
              c = s[2] / 255,
              g = Math.max(Math.max(o, a), c),
              w = Math.min(Math.min(o, a), c),
              k = g - w;
            return [
              360 *
                (((k <= 0
                  ? 0
                  : g === o
                  ? ((a - c) / k) % 6
                  : g === a
                  ? 2 + (c - o) / k
                  : 4 + (o - a) / k) /
                  6) %
                  1),
              100 * k,
              100 * (k < 1 ? w / (1 - k) : 0),
            ];
          }),
          (w.hsl.hcg = function (s) {
            let o = s[1] / 100,
              a = s[2] / 100,
              c = a < 0.5 ? 2 * o * a : 2 * o * (1 - a),
              g = 0;
            return (
              c < 1 && (g = (a - 0.5 * c) / (1 - c)), [s[0], 100 * c, 100 * g]
            );
          }),
          (w.hsv.hcg = function (s) {
            let o = s[1] / 100,
              a = s[2] / 100,
              c = o * a,
              g = 0;
            return c < 1 && (g = (a - c) / (1 - c)), [s[0], 100 * c, 100 * g];
          }),
          (w.hcg.rgb = function (s) {
            let o = s[0] / 360,
              a = s[1] / 100,
              c = s[2] / 100;
            if (0 === a) return [255 * c, 255 * c, 255 * c];
            let g = [0, 0, 0],
              w = (o % 1) * 6,
              k = w % 1,
              x = 1 - k,
              P = 0;
            switch (Math.floor(w)) {
              case 0:
                (g[0] = 1), (g[1] = k), (g[2] = 0);
                break;
              case 1:
                (g[0] = x), (g[1] = 1), (g[2] = 0);
                break;
              case 2:
                (g[0] = 0), (g[1] = 1), (g[2] = k);
                break;
              case 3:
                (g[0] = 0), (g[1] = x), (g[2] = 1);
                break;
              case 4:
                (g[0] = k), (g[1] = 0), (g[2] = 1);
                break;
              default:
                (g[0] = 1), (g[1] = 0), (g[2] = x);
            }
            return (
              (P = (1 - a) * c),
              [(a * g[0] + P) * 255, (a * g[1] + P) * 255, (a * g[2] + P) * 255]
            );
          }),
          (w.hcg.hsv = function (s) {
            let o = s[1] / 100,
              a = s[2] / 100,
              c = o + a * (1 - o),
              g = 0;
            return c > 0 && (g = o / c), [s[0], 100 * g, 100 * c];
          }),
          (w.hcg.hsl = function (s) {
            let o = s[1] / 100,
              a = s[2] / 100,
              c = a * (1 - o) + 0.5 * o,
              g = 0;
            return (
              c > 0 && c < 0.5
                ? (g = o / (2 * c))
                : c >= 0.5 && c < 1 && (g = o / (2 * (1 - c))),
              [s[0], 100 * g, 100 * c]
            );
          }),
          (w.hcg.hwb = function (s) {
            let o = s[1] / 100,
              a = s[2] / 100,
              c = o + a * (1 - o);
            return [s[0], (c - o) * 100, (1 - c) * 100];
          }),
          (w.hwb.hcg = function (s) {
            let o = s[1] / 100,
              a = s[2] / 100,
              c = 1 - a,
              g = c - o,
              w = 0;
            return g < 1 && (w = (c - g) / (1 - g)), [s[0], 100 * g, 100 * w];
          }),
          (w.apple.rgb = function (s) {
            return [
              (s[0] / 65535) * 255,
              (s[1] / 65535) * 255,
              (s[2] / 65535) * 255,
            ];
          }),
          (w.rgb.apple = function (s) {
            return [
              (s[0] / 255) * 65535,
              (s[1] / 255) * 65535,
              (s[2] / 255) * 65535,
            ];
          }),
          (w.gray.rgb = function (s) {
            return [(s[0] / 100) * 255, (s[0] / 100) * 255, (s[0] / 100) * 255];
          }),
          (w.gray.hsl = function (s) {
            return [0, 0, s[0]];
          }),
          (w.gray.hsv = w.gray.hsl),
          (w.gray.hwb = function (s) {
            return [0, 100, s[0]];
          }),
          (w.gray.cmyk = function (s) {
            return [0, 0, 0, s[0]];
          }),
          (w.gray.lab = function (s) {
            return [s[0], 0, 0];
          }),
          (w.gray.hex = function (s) {
            let o = 255 & Math.round((s[0] / 100) * 255),
              a = ((o << 16) + (o << 8) + o).toString(16).toUpperCase();
            return "000000".substring(a.length) + a;
          }),
          (w.rgb.gray = function (s) {
            let o = (s[0] + s[1] + s[2]) / 3;
            return [(o / 255) * 100];
          });
      },
      12085: function (s, o, a) {
        let c = a(48168),
          g = a(4111),
          w = {},
          k = Object.keys(c);
        k.forEach((s) => {
          (w[s] = {}),
            Object.defineProperty(w[s], "channels", { value: c[s].channels }),
            Object.defineProperty(w[s], "labels", { value: c[s].labels });
          let o = g(s),
            a = Object.keys(o);
          a.forEach((a) => {
            let c = o[a];
            (w[s][a] = (function (s) {
              let wrappedFn = function (...o) {
                let a = o[0];
                if (null == a) return a;
                a.length > 1 && (o = a);
                let c = s(o);
                if ("object" == typeof c)
                  for (let s = c.length, o = 0; o < s; o++)
                    c[o] = Math.round(c[o]);
                return c;
              };
              return (
                "conversion" in s && (wrappedFn.conversion = s.conversion),
                wrappedFn
              );
            })(c)),
              (w[s][a].raw = (function (s) {
                let wrappedFn = function (...o) {
                  let a = o[0];
                  return null == a ? a : (a.length > 1 && (o = a), s(o));
                };
                return (
                  "conversion" in s && (wrappedFn.conversion = s.conversion),
                  wrappedFn
                );
              })(c));
          });
        }),
          (s.exports = w);
      },
      4111: function (s, o, a) {
        let c = a(48168);
        s.exports = function (s) {
          let o = (function (s) {
              let o = (function () {
                  let s = {},
                    o = Object.keys(c);
                  for (let a = o.length, c = 0; c < a; c++)
                    s[o[c]] = { distance: -1, parent: null };
                  return s;
                })(),
                a = [s];
              for (o[s].distance = 0; a.length; ) {
                let s = a.pop(),
                  g = Object.keys(c[s]);
                for (let c = g.length, w = 0; w < c; w++) {
                  let c = g[w],
                    k = o[c];
                  -1 === k.distance &&
                    ((k.distance = o[s].distance + 1),
                    (k.parent = s),
                    a.unshift(c));
                }
              }
              return o;
            })(s),
            a = {},
            g = Object.keys(o);
          for (let s = g.length, w = 0; w < s; w++) {
            let s = g[w],
              k = o[s];
            null !== k.parent &&
              (a[s] = (function (s, o) {
                let a = [o[s].parent, s],
                  g = c[o[s].parent][s],
                  w = o[s].parent;
                for (; o[w].parent; )
                  a.unshift(o[w].parent),
                    (g = (function (s, o) {
                      return function (a) {
                        return o(s(a));
                      };
                    })(c[o[w].parent][w], g)),
                    (w = o[w].parent);
                return (g.conversion = a), g;
              })(s, o));
          }
          return a;
        };
      },
      8874: function (s) {
        "use strict";
        s.exports = {
          aliceblue: [240, 248, 255],
          antiquewhite: [250, 235, 215],
          aqua: [0, 255, 255],
          aquamarine: [127, 255, 212],
          azure: [240, 255, 255],
          beige: [245, 245, 220],
          bisque: [255, 228, 196],
          black: [0, 0, 0],
          blanchedalmond: [255, 235, 205],
          blue: [0, 0, 255],
          blueviolet: [138, 43, 226],
          brown: [165, 42, 42],
          burlywood: [222, 184, 135],
          cadetblue: [95, 158, 160],
          chartreuse: [127, 255, 0],
          chocolate: [210, 105, 30],
          coral: [255, 127, 80],
          cornflowerblue: [100, 149, 237],
          cornsilk: [255, 248, 220],
          crimson: [220, 20, 60],
          cyan: [0, 255, 255],
          darkblue: [0, 0, 139],
          darkcyan: [0, 139, 139],
          darkgoldenrod: [184, 134, 11],
          darkgray: [169, 169, 169],
          darkgreen: [0, 100, 0],
          darkgrey: [169, 169, 169],
          darkkhaki: [189, 183, 107],
          darkmagenta: [139, 0, 139],
          darkolivegreen: [85, 107, 47],
          darkorange: [255, 140, 0],
          darkorchid: [153, 50, 204],
          darkred: [139, 0, 0],
          darksalmon: [233, 150, 122],
          darkseagreen: [143, 188, 143],
          darkslateblue: [72, 61, 139],
          darkslategray: [47, 79, 79],
          darkslategrey: [47, 79, 79],
          darkturquoise: [0, 206, 209],
          darkviolet: [148, 0, 211],
          deeppink: [255, 20, 147],
          deepskyblue: [0, 191, 255],
          dimgray: [105, 105, 105],
          dimgrey: [105, 105, 105],
          dodgerblue: [30, 144, 255],
          firebrick: [178, 34, 34],
          floralwhite: [255, 250, 240],
          forestgreen: [34, 139, 34],
          fuchsia: [255, 0, 255],
          gainsboro: [220, 220, 220],
          ghostwhite: [248, 248, 255],
          gold: [255, 215, 0],
          goldenrod: [218, 165, 32],
          gray: [128, 128, 128],
          green: [0, 128, 0],
          greenyellow: [173, 255, 47],
          grey: [128, 128, 128],
          honeydew: [240, 255, 240],
          hotpink: [255, 105, 180],
          indianred: [205, 92, 92],
          indigo: [75, 0, 130],
          ivory: [255, 255, 240],
          khaki: [240, 230, 140],
          lavender: [230, 230, 250],
          lavenderblush: [255, 240, 245],
          lawngreen: [124, 252, 0],
          lemonchiffon: [255, 250, 205],
          lightblue: [173, 216, 230],
          lightcoral: [240, 128, 128],
          lightcyan: [224, 255, 255],
          lightgoldenrodyellow: [250, 250, 210],
          lightgray: [211, 211, 211],
          lightgreen: [144, 238, 144],
          lightgrey: [211, 211, 211],
          lightpink: [255, 182, 193],
          lightsalmon: [255, 160, 122],
          lightseagreen: [32, 178, 170],
          lightskyblue: [135, 206, 250],
          lightslategray: [119, 136, 153],
          lightslategrey: [119, 136, 153],
          lightsteelblue: [176, 196, 222],
          lightyellow: [255, 255, 224],
          lime: [0, 255, 0],
          limegreen: [50, 205, 50],
          linen: [250, 240, 230],
          magenta: [255, 0, 255],
          maroon: [128, 0, 0],
          mediumaquamarine: [102, 205, 170],
          mediumblue: [0, 0, 205],
          mediumorchid: [186, 85, 211],
          mediumpurple: [147, 112, 219],
          mediumseagreen: [60, 179, 113],
          mediumslateblue: [123, 104, 238],
          mediumspringgreen: [0, 250, 154],
          mediumturquoise: [72, 209, 204],
          mediumvioletred: [199, 21, 133],
          midnightblue: [25, 25, 112],
          mintcream: [245, 255, 250],
          mistyrose: [255, 228, 225],
          moccasin: [255, 228, 181],
          navajowhite: [255, 222, 173],
          navy: [0, 0, 128],
          oldlace: [253, 245, 230],
          olive: [128, 128, 0],
          olivedrab: [107, 142, 35],
          orange: [255, 165, 0],
          orangered: [255, 69, 0],
          orchid: [218, 112, 214],
          palegoldenrod: [238, 232, 170],
          palegreen: [152, 251, 152],
          paleturquoise: [175, 238, 238],
          palevioletred: [219, 112, 147],
          papayawhip: [255, 239, 213],
          peachpuff: [255, 218, 185],
          peru: [205, 133, 63],
          pink: [255, 192, 203],
          plum: [221, 160, 221],
          powderblue: [176, 224, 230],
          purple: [128, 0, 128],
          rebeccapurple: [102, 51, 153],
          red: [255, 0, 0],
          rosybrown: [188, 143, 143],
          royalblue: [65, 105, 225],
          saddlebrown: [139, 69, 19],
          salmon: [250, 128, 114],
          sandybrown: [244, 164, 96],
          seagreen: [46, 139, 87],
          seashell: [255, 245, 238],
          sienna: [160, 82, 45],
          silver: [192, 192, 192],
          skyblue: [135, 206, 235],
          slateblue: [106, 90, 205],
          slategray: [112, 128, 144],
          slategrey: [112, 128, 144],
          snow: [255, 250, 250],
          springgreen: [0, 255, 127],
          steelblue: [70, 130, 180],
          tan: [210, 180, 140],
          teal: [0, 128, 128],
          thistle: [216, 191, 216],
          tomato: [255, 99, 71],
          turquoise: [64, 224, 208],
          violet: [238, 130, 238],
          wheat: [245, 222, 179],
          white: [255, 255, 255],
          whitesmoke: [245, 245, 245],
          yellow: [255, 255, 0],
          yellowgreen: [154, 205, 50],
        };
      },
      78249: function (s, o, a) {
        var c;
        s.exports =
          c ||
          (function (s, o) {
            if (
              ("undefined" != typeof window &&
                window.crypto &&
                (c = window.crypto),
              "undefined" != typeof self && self.crypto && (c = self.crypto),
              "undefined" != typeof globalThis &&
                globalThis.crypto &&
                (c = globalThis.crypto),
              !c &&
                "undefined" != typeof window &&
                window.msCrypto &&
                (c = window.msCrypto),
              !c && void 0 !== a.g && a.g.crypto && (c = a.g.crypto),
              !c)
            )
              try {
                c = a(42480);
              } catch (s) {}
            var c,
              cryptoSecureRandomInt = function () {
                if (c) {
                  if ("function" == typeof c.getRandomValues)
                    try {
                      return c.getRandomValues(new Uint32Array(1))[0];
                    } catch (s) {}
                  if ("function" == typeof c.randomBytes)
                    try {
                      return c.randomBytes(4).readInt32LE();
                    } catch (s) {}
                }
                throw Error(
                  "Native crypto module could not be used to get secure random number."
                );
              },
              g =
                Object.create ||
                (function () {
                  function F() {}
                  return function (s) {
                    var o;
                    return (
                      (F.prototype = s), (o = new F()), (F.prototype = null), o
                    );
                  };
                })(),
              w = {},
              k = (w.lib = {}),
              x = (k.Base = {
                extend: function (s) {
                  var o = g(this);
                  return (
                    s && o.mixIn(s),
                    (o.hasOwnProperty("init") && this.init !== o.init) ||
                      (o.init = function () {
                        o.$super.init.apply(this, arguments);
                      }),
                    (o.init.prototype = o),
                    (o.$super = this),
                    o
                  );
                },
                create: function () {
                  var s = this.extend();
                  return s.init.apply(s, arguments), s;
                },
                init: function () {},
                mixIn: function (s) {
                  for (var o in s) s.hasOwnProperty(o) && (this[o] = s[o]);
                  s.hasOwnProperty("toString") && (this.toString = s.toString);
                },
                clone: function () {
                  return this.init.prototype.extend(this);
                },
              }),
              P = (k.WordArray = x.extend({
                init: function (s, o) {
                  (s = this.words = s || []),
                    void 0 != o
                      ? (this.sigBytes = o)
                      : (this.sigBytes = 4 * s.length);
                },
                toString: function (s) {
                  return (s || j).stringify(this);
                },
                concat: function (s) {
                  var o = this.words,
                    a = s.words,
                    c = this.sigBytes,
                    g = s.sigBytes;
                  if ((this.clamp(), c % 4))
                    for (var w = 0; w < g; w++) {
                      var k = (a[w >>> 2] >>> (24 - (w % 4) * 8)) & 255;
                      o[(c + w) >>> 2] |= k << (24 - ((c + w) % 4) * 8);
                    }
                  else
                    for (var x = 0; x < g; x += 4) o[(c + x) >>> 2] = a[x >>> 2];
                  return (this.sigBytes += g), this;
                },
                clamp: function () {
                  var o = this.words,
                    a = this.sigBytes;
                  (o[a >>> 2] &= 4294967295 << (32 - (a % 4) * 8)),
                    (o.length = s.ceil(a / 4));
                },
                clone: function () {
                  var s = x.clone.call(this);
                  return (s.words = this.words.slice(0)), s;
                },
                random: function (s) {
                  for (var o = [], a = 0; a < s; a += 4)
                    o.push(cryptoSecureRandomInt());
                  return new P.init(o, s);
                },
              })),
              A = (w.enc = {}),
              j = (A.Hex = {
                stringify: function (s) {
                  for (
                    var o = s.words, a = s.sigBytes, c = [], g = 0;
                    g < a;
                    g++
                  ) {
                    var w = (o[g >>> 2] >>> (24 - (g % 4) * 8)) & 255;
                    c.push((w >>> 4).toString(16)), c.push((15 & w).toString(16));
                  }
                  return c.join("");
                },
                parse: function (s) {
                  for (var o = s.length, a = [], c = 0; c < o; c += 2)
                    a[c >>> 3] |=
                      parseInt(s.substr(c, 2), 16) << (24 - (c % 8) * 4);
                  return new P.init(a, o / 2);
                },
              }),
              D = (A.Latin1 = {
                stringify: function (s) {
                  for (
                    var o = s.words, a = s.sigBytes, c = [], g = 0;
                    g < a;
                    g++
                  ) {
                    var w = (o[g >>> 2] >>> (24 - (g % 4) * 8)) & 255;
                    c.push(String.fromCharCode(w));
                  }
                  return c.join("");
                },
                parse: function (s) {
                  for (var o = s.length, a = [], c = 0; c < o; c++)
                    a[c >>> 2] |= (255 & s.charCodeAt(c)) << (24 - (c % 4) * 8);
                  return new P.init(a, o);
                },
              }),
              z = (A.Utf8 = {
                stringify: function (s) {
                  try {
                    return decodeURIComponent(escape(D.stringify(s)));
                  } catch (s) {
                    throw Error("Malformed UTF-8 data");
                  }
                },
                parse: function (s) {
                  return D.parse(unescape(encodeURIComponent(s)));
                },
              }),
              $ = (k.BufferedBlockAlgorithm = x.extend({
                reset: function () {
                  (this._data = new P.init()), (this._nDataBytes = 0);
                },
                _append: function (s) {
                  "string" == typeof s && (s = z.parse(s)),
                    this._data.concat(s),
                    (this._nDataBytes += s.sigBytes);
                },
                _process: function (o) {
                  var a,
                    c = this._data,
                    g = c.words,
                    w = c.sigBytes,
                    k = this.blockSize,
                    x = w / (4 * k),
                    A =
                      (x = o
                        ? s.ceil(x)
                        : s.max((0 | x) - this._minBufferSize, 0)) * k,
                    j = s.min(4 * A, w);
                  if (A) {
                    for (var D = 0; D < A; D += k) this._doProcessBlock(g, D);
                    (a = g.splice(0, A)), (c.sigBytes -= j);
                  }
                  return new P.init(a, j);
                },
                clone: function () {
                  var s = x.clone.call(this);
                  return (s._data = this._data.clone()), s;
                },
                _minBufferSize: 0,
              }));
            k.Hasher = $.extend({
              cfg: x.extend(),
              init: function (s) {
                (this.cfg = this.cfg.extend(s)), this.reset();
              },
              reset: function () {
                $.reset.call(this), this._doReset();
              },
              update: function (s) {
                return this._append(s), this._process(), this;
              },
              finalize: function (s) {
                return s && this._append(s), this._doFinalize();
              },
              blockSize: 16,
              _createHelper: function (s) {
                return function (o, a) {
                  return new s.init(a).finalize(o);
                };
              },
              _createHmacHelper: function (s) {
                return function (o, a) {
                  return new W.HMAC.init(s, a).finalize(o);
                };
              },
            });
            var W = (w.algo = {});
            return w;
          })(Math);
      },
      52153: function (s, o, a) {
        var c, g, w, k, x, P, A, j, D, z;
        s.exports =
          ((c = a(78249)),
          (g = Math),
          (k = (w = c.lib).WordArray),
          (x = w.Hasher),
          (P = c.algo),
          (A = []),
          (j = []),
          (function () {
            function getFractionalBits(s) {
              return ((s - (0 | s)) * 4294967296) | 0;
            }
            for (var s = 2, o = 0; o < 64; )
              (function (s) {
                for (var o = g.sqrt(s), a = 2; a <= o; a++)
                  if (!(s % a)) return !1;
                return !0;
              })(s) &&
                (o < 8 && (A[o] = getFractionalBits(g.pow(s, 0.5))),
                (j[o] = getFractionalBits(g.pow(s, 1 / 3))),
                o++),
                s++;
          })(),
          (D = []),
          (z = P.SHA256 =
            x.extend({
              _doReset: function () {
                this._hash = new k.init(A.slice(0));
              },
              _doProcessBlock: function (s, o) {
                for (
                  var a = this._hash.words,
                    c = a[0],
                    g = a[1],
                    w = a[2],
                    k = a[3],
                    x = a[4],
                    P = a[5],
                    A = a[6],
                    z = a[7],
                    $ = 0;
                  $ < 64;
                  $++
                ) {
                  if ($ < 16) D[$] = 0 | s[o + $];
                  else {
                    var W = D[$ - 15],
                      G =
                        ((W << 25) | (W >>> 7)) ^
                        ((W << 14) | (W >>> 18)) ^
                        (W >>> 3),
                      V = D[$ - 2],
                      K =
                        ((V << 15) | (V >>> 17)) ^
                        ((V << 13) | (V >>> 19)) ^
                        (V >>> 10);
                    D[$] = G + D[$ - 7] + K + D[$ - 16];
                  }
                  var X = (x & P) ^ (~x & A),
                    Z = (c & g) ^ (c & w) ^ (g & w),
                    Y =
                      ((c << 30) | (c >>> 2)) ^
                      ((c << 19) | (c >>> 13)) ^
                      ((c << 10) | (c >>> 22)),
                    ee =
                      z +
                      (((x << 26) | (x >>> 6)) ^
                        ((x << 21) | (x >>> 11)) ^
                        ((x << 7) | (x >>> 25))) +
                      X +
                      j[$] +
                      D[$],
                    et = Y + Z;
                  (z = A),
                    (A = P),
                    (P = x),
                    (x = (k + ee) | 0),
                    (k = w),
                    (w = g),
                    (g = c),
                    (c = (ee + et) | 0);
                }
                (a[0] = (a[0] + c) | 0),
                  (a[1] = (a[1] + g) | 0),
                  (a[2] = (a[2] + w) | 0),
                  (a[3] = (a[3] + k) | 0),
                  (a[4] = (a[4] + x) | 0),
                  (a[5] = (a[5] + P) | 0),
                  (a[6] = (a[6] + A) | 0),
                  (a[7] = (a[7] + z) | 0);
              },
              _doFinalize: function () {
                var s = this._data,
                  o = s.words,
                  a = 8 * this._nDataBytes,
                  c = 8 * s.sigBytes;
                return (
                  (o[c >>> 5] |= 128 << (24 - (c % 32))),
                  (o[(((c + 64) >>> 9) << 4) + 14] = g.floor(a / 4294967296)),
                  (o[(((c + 64) >>> 9) << 4) + 15] = a),
                  (s.sigBytes = 4 * o.length),
                  this._process(),
                  this._hash
                );
              },
              clone: function () {
                var s = x.clone.call(this);
                return (s._hash = this._hash.clone()), s;
              },
            })),
          (c.SHA256 = x._createHelper(z)),
          (c.HmacSHA256 = x._createHmacHelper(z)),
          c.SHA256);
      },
      80645: function (s, o) {
        /*! ieee754. BSD-3-Clause License. Feross Aboukhadijeh <https://feross.org/opensource> */ (o.read =
          function (s, o, a, c, g) {
            var w,
              k,
              x = 8 * g - c - 1,
              P = (1 << x) - 1,
              A = P >> 1,
              j = -7,
              D = a ? g - 1 : 0,
              z = a ? -1 : 1,
              $ = s[o + D];
            for (
              D += z, w = $ & ((1 << -j) - 1), $ >>= -j, j += x;
              j > 0;
              w = 256 * w + s[o + D], D += z, j -= 8
            );
            for (
              k = w & ((1 << -j) - 1), w >>= -j, j += c;
              j > 0;
              k = 256 * k + s[o + D], D += z, j -= 8
            );
            if (0 === w) w = 1 - A;
            else {
              if (w === P) return k ? NaN : ($ ? -1 : 1) * (1 / 0);
              (k += Math.pow(2, c)), (w -= A);
            }
            return ($ ? -1 : 1) * k * Math.pow(2, w - c);
          }),
          (o.write = function (s, o, a, c, g, w) {
            var k,
              x,
              P,
              A = 8 * w - g - 1,
              j = (1 << A) - 1,
              D = j >> 1,
              z = 23 === g ? 5960464477539062e-23 : 0,
              $ = c ? 0 : w - 1,
              W = c ? 1 : -1,
              G = o < 0 || (0 === o && 1 / o < 0) ? 1 : 0;
            for (
              isNaN((o = Math.abs(o))) || o === 1 / 0
                ? ((x = isNaN(o) ? 1 : 0), (k = j))
                : ((k = Math.floor(Math.log(o) / Math.LN2)),
                  o * (P = Math.pow(2, -k)) < 1 && (k--, (P *= 2)),
                  k + D >= 1 ? (o += z / P) : (o += z * Math.pow(2, 1 - D)),
                  o * P >= 2 && (k++, (P /= 2)),
                  k + D >= j
                    ? ((x = 0), (k = j))
                    : k + D >= 1
                    ? ((x = (o * P - 1) * Math.pow(2, g)), (k += D))
                    : ((x = o * Math.pow(2, D - 1) * Math.pow(2, g)), (k = 0)));
              g >= 8;
              s[a + $] = 255 & x, $ += W, x /= 256, g -= 8
            );
            for (
              k = (k << g) | x, A += g;
              A > 0;
              s[a + $] = 255 & k, $ += W, k /= 256, A -= 8
            );
            s[a + $ - W] |= 128 * G;
          });
      },
      67987: function (s, o, a) {
        var c, g;
        void 0 !==
          (g =
            "function" ==
            typeof (c = function (s) {
              "use strict";
              var o,
                a,
                merge = function (s) {
                  for (var o, a = 1, c = arguments.length; a < c; a++)
                    for (o in arguments[a])
                      Object.prototype.hasOwnProperty.call(arguments[a], o) &&
                        (s[o] = arguments[a][o]);
                  return s;
                },
                c = {
                  template: "[%t] %l:",
                  levelFormatter: function (s) {
                    return s.toUpperCase();
                  },
                  nameFormatter: function (s) {
                    return s || "root";
                  },
                  timestampFormatter: function (s) {
                    return s
                      .toTimeString()
                      .replace(/.*(\d{2}:\d{2}:\d{2}).*/, "$1");
                  },
                  format: void 0,
                },
                g = {},
                w = {
                  reg: function (s) {
                    if (!s || !s.getLogger)
                      throw TypeError("Argument is not a root logger");
                    o = s;
                  },
                  apply: function (s, a) {
                    if (!s || !s.setLevel)
                      throw TypeError("Argument is not a logger");
                    var w = s.methodFactory,
                      k = s.name || "",
                      x = g[k] || g[""] || c;
                    return (
                      g[k] ||
                        (s.methodFactory = function (s, o, a) {
                          var c = w(s, o, a),
                            x = g[a] || g[""],
                            P = -1 !== x.template.indexOf("%t"),
                            A = -1 !== x.template.indexOf("%l"),
                            j = -1 !== x.template.indexOf("%n");
                          return function () {
                            for (
                              var o = "",
                                w = arguments.length,
                                D = Array(w),
                                z = 0;
                              z < w;
                              z++
                            )
                              D[z] = arguments[z];
                            if (k || !g[a]) {
                              var $ = x.timestampFormatter(new Date()),
                                W = x.levelFormatter(s),
                                G = x.nameFormatter(a);
                              x.format
                                ? (o += x.format(W, G, $))
                                : ((o += x.template),
                                  P && (o = o.replace(/%t/, $)),
                                  A && (o = o.replace(/%l/, W)),
                                  j && (o = o.replace(/%n/, G))),
                                D.length && "string" == typeof D[0]
                                  ? (D[0] = o + " " + D[0])
                                  : D.unshift(o);
                            }
                            c.apply(void 0, D);
                          };
                        }),
                      (a = a || {}).template && (a.format = void 0),
                      (g[k] = merge({}, x, a)),
                      s.setLevel(s.getLevel()),
                      o ||
                        s.warn(
                          "It is necessary to call the function reg() of loglevel-plugin-prefix before calling apply. From the next release, it will throw an error. See more: https://github.com/kutuluk/loglevel-plugin-prefix/blob/master/README.md"
                        ),
                      s
                    );
                  },
                };
              return (
                s &&
                  ((a = s.prefix),
                  (w.noConflict = function () {
                    return s.prefix === w && (s.prefix = a), w;
                  })),
                w
              );
            })
              ? c.call(o, a, o, s)
              : c) && (s.exports = g);
      },
      2043: function (s, o, a) {
        var c, g;
        void 0 !==
          (g =
            "function" ==
            typeof (c = function () {
              "use strict";
              var noop = function () {},
                s = "undefined",
                o =
                  typeof window !== s &&
                  typeof window.navigator !== s &&
                  /Trident\/|MSIE /.test(window.navigator.userAgent),
                a = ["trace", "debug", "info", "warn", "error"];
              function bindMethod(s, o) {
                var a = s[o];
                if ("function" == typeof a.bind) return a.bind(s);
                try {
                  return Function.prototype.bind.call(a, s);
                } catch (o) {
                  return function () {
                    return Function.prototype.apply.apply(a, [s, arguments]);
                  };
                }
              }
              function traceForIE() {
                console.log &&
                  (console.log.apply
                    ? console.log.apply(console, arguments)
                    : Function.prototype.apply.apply(console.log, [
                        console,
                        arguments,
                      ])),
                  console.trace && console.trace();
              }
              function replaceLoggingMethods(s, o) {
                for (var c = 0; c < a.length; c++) {
                  var g = a[c];
                  this[g] = c < s ? noop : this.methodFactory(g, s, o);
                }
                this.log = this.debug;
              }
              function enableLoggingWhenConsoleArrives(o, a, c) {
                return function () {
                  typeof console !== s &&
                    (replaceLoggingMethods.call(this, a, c),
                    this[o].apply(this, arguments));
                };
              }
              function defaultMethodFactory(a, c, g) {
                var w;
                return (
                  "debug" === (w = a) && (w = "log"),
                  (typeof console !== s &&
                    ("trace" === w && o
                      ? traceForIE
                      : void 0 !== console[w]
                      ? bindMethod(console, w)
                      : void 0 !== console.log
                      ? bindMethod(console, "log")
                      : noop)) ||
                    enableLoggingWhenConsoleArrives.apply(this, arguments)
                );
              }
              function Logger(o, c, g) {
                var w,
                  k = this;
                c = null == c ? "WARN" : c;
                var x = "loglevel";
                function getPersistedLevel() {
                  var o;
                  if (typeof window !== s && x) {
                    try {
                      o = window.localStorage[x];
                    } catch (s) {}
                    if (typeof o === s)
                      try {
                        var a = window.document.cookie,
                          c = a.indexOf(encodeURIComponent(x) + "=");
                        -1 !== c && (o = /^([^;]+)/.exec(a.slice(c))[1]);
                      } catch (s) {}
                    return void 0 === k.levels[o] && (o = void 0), o;
                  }
                }
                "string" == typeof o
                  ? (x += ":" + o)
                  : "symbol" == typeof o && (x = void 0),
                  (k.name = o),
                  (k.levels = {
                    TRACE: 0,
                    DEBUG: 1,
                    INFO: 2,
                    WARN: 3,
                    ERROR: 4,
                    SILENT: 5,
                  }),
                  (k.methodFactory = g || defaultMethodFactory),
                  (k.getLevel = function () {
                    return w;
                  }),
                  (k.setLevel = function (c, g) {
                    if (
                      ("string" == typeof c &&
                        void 0 !== k.levels[c.toUpperCase()] &&
                        (c = k.levels[c.toUpperCase()]),
                      "number" == typeof c && c >= 0 && c <= k.levels.SILENT)
                    ) {
                      if (
                        ((w = c),
                        !1 !== g &&
                          (function (o) {
                            var c = (a[o] || "silent").toUpperCase();
                            if (typeof window !== s && x) {
                              try {
                                window.localStorage[x] = c;
                                return;
                              } catch (s) {}
                              try {
                                window.document.cookie =
                                  encodeURIComponent(x) + "=" + c + ";";
                              } catch (s) {}
                            }
                          })(c),
                        replaceLoggingMethods.call(k, c, o),
                        typeof console === s && c < k.levels.SILENT)
                      )
                        return "No console available for logging";
                    } else throw "log.setLevel() called with invalid level: " + c;
                  }),
                  (k.setDefaultLevel = function (s) {
                    (c = s), getPersistedLevel() || k.setLevel(s, !1);
                  }),
                  (k.resetLevel = function () {
                    k.setLevel(c, !1),
                      (function () {
                        if (typeof window !== s && x) {
                          try {
                            window.localStorage.removeItem(x);
                            return;
                          } catch (s) {}
                          try {
                            window.document.cookie =
                              encodeURIComponent(x) +
                              "=; expires=Thu, 01 Jan 1970 00:00:00 UTC";
                          } catch (s) {}
                        }
                      })();
                  }),
                  (k.enableAll = function (s) {
                    k.setLevel(k.levels.TRACE, s);
                  }),
                  (k.disableAll = function (s) {
                    k.setLevel(k.levels.SILENT, s);
                  });
                var P = getPersistedLevel();
                null == P && (P = c), k.setLevel(P, !1);
              }
              var c = new Logger(),
                g = {};
              c.getLogger = function (s) {
                if (("symbol" != typeof s && "string" != typeof s) || "" === s)
                  throw TypeError(
                    "You must supply a name when creating a logger."
                  );
                var o = g[s];
                return (
                  o || (o = g[s] = new Logger(s, c.getLevel(), c.methodFactory)),
                  o
                );
              };
              var w = typeof window !== s ? window.log : void 0;
              return (
                (c.noConflict = function () {
                  return (
                    typeof window !== s && window.log === c && (window.log = w), c
                  );
                }),
                (c.getLoggers = function () {
                  return g;
                }),
                (c.default = c),
                c
              );
            })
              ? c.call(o, a, o, s)
              : c) && (s.exports = g);
      },
      29548: function (s, o, a) {
        "use strict";
        var c = a(64836);
        Object.defineProperty(o, "__esModule", { value: !0 }),
          (o.BroadcastChannel = function () {
            var s =
              arguments.length > 0 && void 0 !== arguments[0]
                ? arguments[0]
                : "nextauth.message";
            return {
              receive: function (o) {
                var handler = function (a) {
                  if (a.key === s) {
                    var c,
                      g = JSON.parse(
                        null !== (c = a.newValue) && void 0 !== c ? c : "{}"
                      );
                    (null == g ? void 0 : g.event) === "session" &&
                      null != g &&
                      g.data &&
                      o(g);
                  }
                };
                return (
                  window.addEventListener("storage", handler),
                  function () {
                    return window.removeEventListener("storage", handler);
                  }
                );
              },
              post: function (o) {
                if ("undefined" != typeof window)
                  try {
                    localStorage.setItem(
                      s,
                      JSON.stringify(
                        _objectSpread(
                          _objectSpread({}, o),
                          {},
                          { timestamp: now() }
                        )
                      )
                    );
                  } catch (s) {}
              },
            };
          }),
          (o.apiBaseUrl = apiBaseUrl),
          (o.fetchData = function (s, o, a) {
            return _fetchData.apply(this, arguments);
          }),
          (o.now = now);
        var g = c(a(64687)),
          w = c(a(38416)),
          k = c(a(17156));
        function ownKeys(s, o) {
          var a = Object.keys(s);
          if (Object.getOwnPropertySymbols) {
            var c = Object.getOwnPropertySymbols(s);
            o &&
              (c = c.filter(function (o) {
                return Object.getOwnPropertyDescriptor(s, o).enumerable;
              })),
              a.push.apply(a, c);
          }
          return a;
        }
        function _objectSpread(s) {
          for (var o = 1; o < arguments.length; o++) {
            var a = null != arguments[o] ? arguments[o] : {};
            o % 2
              ? ownKeys(Object(a), !0).forEach(function (o) {
                  (0, w.default)(s, o, a[o]);
                })
              : Object.getOwnPropertyDescriptors
              ? Object.defineProperties(s, Object.getOwnPropertyDescriptors(a))
              : ownKeys(Object(a)).forEach(function (o) {
                  Object.defineProperty(
                    s,
                    o,
                    Object.getOwnPropertyDescriptor(a, o)
                  );
                });
          }
          return s;
        }
        function _fetchData() {
          return (_fetchData = (0, k.default)(
            g.default.mark(function _callee(s, o, a) {
              var c,
                w,
                k,
                x,
                P,
                A,
                j,
                D,
                z,
                $ = arguments;
              return g.default.wrap(
                function (g) {
                  for (;;)
                    switch ((g.prev = g.next)) {
                      case 0:
                        return (
                          (w = (c = $.length > 3 && void 0 !== $[3] ? $[3] : {})
                            .ctx),
                          (x =
                            void 0 === (k = c.req)
                              ? null == w
                                ? void 0
                                : w.req
                              : k),
                          (P = "".concat(apiBaseUrl(o), "/").concat(s)),
                          (g.prev = 2),
                          (j = {
                            headers: _objectSpread(
                              { "Content-Type": "application/json" },
                              null != x &&
                                null !== (A = x.headers) &&
                                void 0 !== A &&
                                A.cookie
                                ? { cookie: x.headers.cookie }
                                : {}
                            ),
                          }),
                          null != x &&
                            x.body &&
                            ((j.body = JSON.stringify(x.body)),
                            (j.method = "POST")),
                          (g.next = 7),
                          fetch(P, j)
                        );
                      case 7:
                        return (D = g.sent), (g.next = 10), D.json();
                      case 10:
                        if (((z = g.sent), D.ok)) {
                          g.next = 13;
                          break;
                        }
                        throw z;
                      case 13:
                        return g.abrupt(
                          "return",
                          Object.keys(z).length > 0 ? z : null
                        );
                      case 16:
                        return (
                          (g.prev = 16),
                          (g.t0 = g.catch(2)),
                          a.error("CLIENT_FETCH_ERROR", { error: g.t0, url: P }),
                          g.abrupt("return", null)
                        );
                      case 20:
                      case "end":
                        return g.stop();
                    }
                },
                _callee,
                null,
                [[2, 16]]
              );
            })
          )).apply(this, arguments);
        }
        function apiBaseUrl(s) {
          return "undefined" == typeof window
            ? "".concat(s.baseUrlServer).concat(s.basePathServer)
            : s.basePath;
        }
        function now() {
          return Math.floor(Date.now() / 1e3);
        }
      },
      36925: function (s, o, a) {
        "use strict";
        var c = a(64836);
        Object.defineProperty(o, "__esModule", { value: !0 }),
          (o.UnsupportedStrategy =
            o.UnknownError =
            o.OAuthCallbackError =
            o.MissingSecret =
            o.MissingAuthorize =
            o.MissingAdapterMethods =
            o.MissingAdapter =
            o.MissingAPIRoute =
            o.InvalidCallbackUrl =
            o.AccountNotLinkedError =
              void 0),
          (o.adapterErrorHandler = function (s, o) {
            if (s)
              return Object.keys(s).reduce(function (a, c) {
                return (
                  (a[c] = (0, w.default)(
                    g.default.mark(function _callee2() {
                      var a,
                        w,
                        k,
                        x,
                        P,
                        A = arguments;
                      return g.default.wrap(
                        function (g) {
                          for (;;)
                            switch ((g.prev = g.next)) {
                              case 0:
                                for (
                                  g.prev = 0, w = Array((a = A.length)), k = 0;
                                  k < a;
                                  k++
                                )
                                  w[k] = A[k];
                                return (
                                  o.debug("adapter_".concat(c), { args: w }),
                                  (x = s[c]),
                                  (g.next = 6),
                                  x.apply(void 0, w)
                                );
                              case 6:
                                return g.abrupt("return", g.sent);
                              case 9:
                                throw (
                                  ((g.prev = 9),
                                  (g.t0 = g.catch(0)),
                                  o.error("adapter_error_".concat(c), g.t0),
                                  ((P = new $(g.t0)).name = "".concat(
                                    capitalize(c),
                                    "Error"
                                  )),
                                  P)
                                );
                              case 15:
                              case "end":
                                return g.stop();
                            }
                        },
                        _callee2,
                        null,
                        [[0, 9]]
                      );
                    })
                  )),
                  a
                );
              }, {});
          }),
          (o.capitalize = capitalize),
          (o.eventsErrorHandler = function (s, o) {
            return Object.keys(s).reduce(function (a, c) {
              return (
                (a[c] = (0, w.default)(
                  g.default.mark(function _callee() {
                    var a,
                      w = arguments;
                    return g.default.wrap(
                      function (g) {
                        for (;;)
                          switch ((g.prev = g.next)) {
                            case 0:
                              return (
                                (g.prev = 0),
                                (a = s[c]),
                                (g.next = 4),
                                a.apply(void 0, w)
                              );
                            case 4:
                              return g.abrupt("return", g.sent);
                            case 7:
                              (g.prev = 7),
                                (g.t0 = g.catch(0)),
                                o.error(
                                  "".concat(upperSnake(c), "_EVENT_ERROR"),
                                  g.t0
                                );
                            case 10:
                            case "end":
                              return g.stop();
                          }
                      },
                      _callee,
                      null,
                      [[0, 7]]
                    );
                  })
                )),
                a
              );
            }, {});
          }),
          (o.upperSnake = upperSnake);
        var g = c(a(64687)),
          w = c(a(17156)),
          k = c(a(66115)),
          x = c(a(38416)),
          P = c(a(56690)),
          A = c(a(89728)),
          j = c(a(61655)),
          D = c(a(94993)),
          z = c(a(73808));
        function _createSuper(s) {
          var o = (function () {
            if (
              "undefined" == typeof Reflect ||
              !Reflect.construct ||
              Reflect.construct.sham
            )
              return !1;
            if ("function" == typeof Proxy) return !0;
            try {
              return (
                Boolean.prototype.valueOf.call(
                  Reflect.construct(Boolean, [], function () {})
                ),
                !0
              );
            } catch (s) {
              return !1;
            }
          })();
          return function () {
            var a,
              c = (0, z.default)(s);
            if (o) {
              var g = (0, z.default)(this).constructor;
              a = Reflect.construct(c, arguments, g);
            } else a = c.apply(this, arguments);
            return (0, D.default)(this, a);
          };
        }
        var $ = (function (s) {
          (0, j.default)(UnknownError, s);
          var o = _createSuper(UnknownError);
          function UnknownError(s) {
            var a, c;
            return (
              (0, P.default)(this, UnknownError),
              ((c = o.call(
                this,
                null !== (a = null == s ? void 0 : s.message) && void 0 !== a
                  ? a
                  : s
              )).name = "UnknownError"),
              (c.code = s.code),
              s instanceof Error && (c.stack = s.stack),
              c
            );
          }
          return (
            (0, A.default)(UnknownError, [
              {
                key: "toJSON",
                value: function () {
                  return {
                    name: this.name,
                    message: this.message,
                    stack: this.stack,
                  };
                },
              },
            ]),
            UnknownError
          );
        })((0, c(a(33496)).default)(Error));
        o.UnknownError = $;
        var W = (function (s) {
          (0, j.default)(OAuthCallbackError, s);
          var o = _createSuper(OAuthCallbackError);
          function OAuthCallbackError() {
            var s;
            (0, P.default)(this, OAuthCallbackError);
            for (var a = arguments.length, c = Array(a), g = 0; g < a; g++)
              c[g] = arguments[g];
            return (
              (s = o.call.apply(o, [this].concat(c))),
              (0, x.default)((0, k.default)(s), "name", "OAuthCallbackError"),
              s
            );
          }
          return (0, A.default)(OAuthCallbackError);
        })($);
        o.OAuthCallbackError = W;
        var G = (function (s) {
          (0, j.default)(AccountNotLinkedError, s);
          var o = _createSuper(AccountNotLinkedError);
          function AccountNotLinkedError() {
            var s;
            (0, P.default)(this, AccountNotLinkedError);
            for (var a = arguments.length, c = Array(a), g = 0; g < a; g++)
              c[g] = arguments[g];
            return (
              (s = o.call.apply(o, [this].concat(c))),
              (0, x.default)((0, k.default)(s), "name", "AccountNotLinkedError"),
              s
            );
          }
          return (0, A.default)(AccountNotLinkedError);
        })($);
        o.AccountNotLinkedError = G;
        var V = (function (s) {
          (0, j.default)(MissingAPIRoute, s);
          var o = _createSuper(MissingAPIRoute);
          function MissingAPIRoute() {
            var s;
            (0, P.default)(this, MissingAPIRoute);
            for (var a = arguments.length, c = Array(a), g = 0; g < a; g++)
              c[g] = arguments[g];
            return (
              (s = o.call.apply(o, [this].concat(c))),
              (0, x.default)((0, k.default)(s), "name", "MissingAPIRouteError"),
              (0, x.default)(
                (0, k.default)(s),
                "code",
                "MISSING_NEXTAUTH_API_ROUTE_ERROR"
              ),
              s
            );
          }
          return (0, A.default)(MissingAPIRoute);
        })($);
        o.MissingAPIRoute = V;
        var K = (function (s) {
          (0, j.default)(MissingSecret, s);
          var o = _createSuper(MissingSecret);
          function MissingSecret() {
            var s;
            (0, P.default)(this, MissingSecret);
            for (var a = arguments.length, c = Array(a), g = 0; g < a; g++)
              c[g] = arguments[g];
            return (
              (s = o.call.apply(o, [this].concat(c))),
              (0, x.default)((0, k.default)(s), "name", "MissingSecretError"),
              (0, x.default)((0, k.default)(s), "code", "NO_SECRET"),
              s
            );
          }
          return (0, A.default)(MissingSecret);
        })($);
        o.MissingSecret = K;
        var X = (function (s) {
          (0, j.default)(MissingAuthorize, s);
          var o = _createSuper(MissingAuthorize);
          function MissingAuthorize() {
            var s;
            (0, P.default)(this, MissingAuthorize);
            for (var a = arguments.length, c = Array(a), g = 0; g < a; g++)
              c[g] = arguments[g];
            return (
              (s = o.call.apply(o, [this].concat(c))),
              (0, x.default)((0, k.default)(s), "name", "MissingAuthorizeError"),
              (0, x.default)(
                (0, k.default)(s),
                "code",
                "CALLBACK_CREDENTIALS_HANDLER_ERROR"
              ),
              s
            );
          }
          return (0, A.default)(MissingAuthorize);
        })($);
        o.MissingAuthorize = X;
        var Z = (function (s) {
          (0, j.default)(MissingAdapter, s);
          var o = _createSuper(MissingAdapter);
          function MissingAdapter() {
            var s;
            (0, P.default)(this, MissingAdapter);
            for (var a = arguments.length, c = Array(a), g = 0; g < a; g++)
              c[g] = arguments[g];
            return (
              (s = o.call.apply(o, [this].concat(c))),
              (0, x.default)((0, k.default)(s), "name", "MissingAdapterError"),
              (0, x.default)(
                (0, k.default)(s),
                "code",
                "EMAIL_REQUIRES_ADAPTER_ERROR"
              ),
              s
            );
          }
          return (0, A.default)(MissingAdapter);
        })($);
        o.MissingAdapter = Z;
        var Y = (function (s) {
          (0, j.default)(MissingAdapterMethods, s);
          var o = _createSuper(MissingAdapterMethods);
          function MissingAdapterMethods() {
            var s;
            (0, P.default)(this, MissingAdapterMethods);
            for (var a = arguments.length, c = Array(a), g = 0; g < a; g++)
              c[g] = arguments[g];
            return (
              (s = o.call.apply(o, [this].concat(c))),
              (0, x.default)(
                (0, k.default)(s),
                "name",
                "MissingAdapterMethodsError"
              ),
              (0, x.default)(
                (0, k.default)(s),
                "code",
                "MISSING_ADAPTER_METHODS_ERROR"
              ),
              s
            );
          }
          return (0, A.default)(MissingAdapterMethods);
        })($);
        o.MissingAdapterMethods = Y;
        var ee = (function (s) {
          (0, j.default)(UnsupportedStrategy, s);
          var o = _createSuper(UnsupportedStrategy);
          function UnsupportedStrategy() {
            var s;
            (0, P.default)(this, UnsupportedStrategy);
            for (var a = arguments.length, c = Array(a), g = 0; g < a; g++)
              c[g] = arguments[g];
            return (
              (s = o.call.apply(o, [this].concat(c))),
              (0, x.default)(
                (0, k.default)(s),
                "name",
                "UnsupportedStrategyError"
              ),
              (0, x.default)(
                (0, k.default)(s),
                "code",
                "CALLBACK_CREDENTIALS_JWT_ERROR"
              ),
              s
            );
          }
          return (0, A.default)(UnsupportedStrategy);
        })($);
        o.UnsupportedStrategy = ee;
        var et = (function (s) {
          (0, j.default)(InvalidCallbackUrl, s);
          var o = _createSuper(InvalidCallbackUrl);
          function InvalidCallbackUrl() {
            var s;
            (0, P.default)(this, InvalidCallbackUrl);
            for (var a = arguments.length, c = Array(a), g = 0; g < a; g++)
              c[g] = arguments[g];
            return (
              (s = o.call.apply(o, [this].concat(c))),
              (0, x.default)((0, k.default)(s), "name", "InvalidCallbackUrl"),
              (0, x.default)(
                (0, k.default)(s),
                "code",
                "INVALID_CALLBACK_URL_ERROR"
              ),
              s
            );
          }
          return (0, A.default)(InvalidCallbackUrl);
        })($);
        function upperSnake(s) {
          return s.replace(/([A-Z])/g, "_$1").toUpperCase();
        }
        function capitalize(s) {
          return "".concat(s[0].toUpperCase()).concat(s.slice(1));
        }
        o.InvalidCallbackUrl = et;
      },
      33299: function (s, o, a) {
        "use strict";
        var c,
          g,
          w,
          k,
          x,
          P = a(34155),
          A = a(64836),
          j = a(18698);
        Object.defineProperty(o, "__esModule", { value: !0 });
        var D = {
          SessionContext: !0,
          useSession: !0,
          getSession: !0,
          getCsrfToken: !0,
          getProviders: !0,
          signIn: !0,
          signOut: !0,
          SessionProvider: !0,
        };
        (o.SessionContext = void 0),
          (o.SessionProvider = function (s) {
            if (!ei)
              throw Error("React Context is unavailable in Server Components");
            var o,
              a,
              c,
              g,
              w,
              k,
              x = s.children,
              P = s.basePath,
              A = s.refetchInterval,
              j = s.refetchWhenOffline;
            P && (et.basePath = P);
            var D = void 0 !== s.session;
            et._lastSync = D ? (0, Z.now)() : 0;
            var $ = V.useState(function () {
                return D && (et._session = s.session), s.session;
              }),
              K = (0, G.default)($, 2),
              X = K[0],
              ee = K[1],
              es = V.useState(!D),
              eo = (0, G.default)(es, 2),
              ea = eo[0],
              eu = eo[1];
            V.useEffect(function () {
              return (
                (et._getSession = (0, W.default)(
                  z.default.mark(function _callee() {
                    var s,
                      o,
                      a = arguments;
                    return z.default.wrap(
                      function (c) {
                        for (;;)
                          switch ((c.prev = c.next)) {
                            case 0:
                              if (
                                ((s = (
                                  a.length > 0 && void 0 !== a[0] ? a[0] : {}
                                ).event),
                                (c.prev = 1),
                                !(
                                  (o = "storage" === s) || void 0 === et._session
                                ))
                              ) {
                                c.next = 10;
                                break;
                              }
                              return (
                                (et._lastSync = (0, Z.now)()),
                                (c.next = 7),
                                getSession({ broadcast: !o })
                              );
                            case 7:
                              return (
                                (et._session = c.sent),
                                ee(et._session),
                                c.abrupt("return")
                              );
                            case 10:
                              if (
                                !(
                                  !s ||
                                  null === et._session ||
                                  (0, Z.now)() < et._lastSync
                                )
                              ) {
                                c.next = 12;
                                break;
                              }
                              return c.abrupt("return");
                            case 12:
                              return (
                                (et._lastSync = (0, Z.now)()),
                                (c.next = 15),
                                getSession()
                              );
                            case 15:
                              (et._session = c.sent),
                                ee(et._session),
                                (c.next = 22);
                              break;
                            case 19:
                              (c.prev = 19),
                                (c.t0 = c.catch(1)),
                                en.error("CLIENT_SESSION_ERROR", c.t0);
                            case 22:
                              return (c.prev = 22), eu(!1), c.finish(22);
                            case 25:
                            case "end":
                              return c.stop();
                          }
                      },
                      _callee,
                      null,
                      [[1, 19, 22, 25]]
                    );
                  })
                )),
                et._getSession(),
                function () {
                  (et._lastSync = 0),
                    (et._session = void 0),
                    (et._getSession = function () {});
                }
              );
            }, []),
              V.useEffect(function () {
                var s = er.receive(function () {
                  return et._getSession({ event: "storage" });
                });
                return function () {
                  return s();
                };
              }, []),
              V.useEffect(
                function () {
                  var o = s.refetchOnWindowFocus,
                    a = void 0 === o || o,
                    visibilityHandler = function () {
                      a &&
                        "visible" === document.visibilityState &&
                        et._getSession({ event: "visibilitychange" });
                    };
                  return (
                    document.addEventListener(
                      "visibilitychange",
                      visibilityHandler,
                      !1
                    ),
                    function () {
                      return document.removeEventListener(
                        "visibilitychange",
                        visibilityHandler,
                        !1
                      );
                    }
                  );
                },
                [s.refetchOnWindowFocus]
              );
            var el =
                ((o = V.useState(
                  "undefined" != typeof navigator && navigator.onLine
                )),
                (c = (a = (0, G.default)(o, 2))[0]),
                (g = a[1]),
                (w = function () {
                  return g(!0);
                }),
                (k = function () {
                  return g(!1);
                }),
                V.useEffect(function () {
                  return (
                    window.addEventListener("online", w),
                    window.addEventListener("offline", k),
                    function () {
                      window.removeEventListener("online", w),
                        window.removeEventListener("offline", k);
                    }
                  );
                }, []),
                c),
              ec = !1 !== j || el;
            V.useEffect(
              function () {
                if (A && ec) {
                  var s = setInterval(function () {
                    et._session && et._getSession({ event: "poll" });
                  }, 1e3 * A);
                  return function () {
                    return clearInterval(s);
                  };
                }
              },
              [A, ec]
            );
            var eh = V.useMemo(
              function () {
                return {
                  data: X,
                  status: ea
                    ? "loading"
                    : X
                    ? "authenticated"
                    : "unauthenticated",
                  update: function (s) {
                    return (0, W.default)(
                      z.default.mark(function _callee2() {
                        var o;
                        return z.default.wrap(function (a) {
                          for (;;)
                            switch ((a.prev = a.next)) {
                              case 0:
                                if (!(ea || !X)) {
                                  a.next = 2;
                                  break;
                                }
                                return a.abrupt("return");
                              case 2:
                                return (
                                  eu(!0),
                                  (a.t0 = Z.fetchData),
                                  (a.t1 = et),
                                  (a.t2 = en),
                                  (a.next = 8),
                                  getCsrfToken()
                                );
                              case 8:
                                return (
                                  (a.t3 = a.sent),
                                  (a.t4 = s),
                                  (a.t5 = { csrfToken: a.t3, data: a.t4 }),
                                  (a.t6 = { body: a.t5 }),
                                  (a.t7 = { req: a.t6 }),
                                  (a.next = 15),
                                  (0, a.t0)("session", a.t1, a.t2, a.t7)
                                );
                              case 15:
                                return (
                                  (o = a.sent),
                                  eu(!1),
                                  o &&
                                    (ee(o),
                                    er.post({
                                      event: "session",
                                      data: { trigger: "getSession" },
                                    })),
                                  a.abrupt("return", o)
                                );
                              case 19:
                              case "end":
                                return a.stop();
                            }
                        }, _callee2);
                      })
                    )();
                  },
                };
              },
              [X, ea]
            );
            return (0, Y.jsx)(ei.Provider, { value: eh, children: x });
          }),
          (o.getCsrfToken = getCsrfToken),
          (o.getProviders = getProviders),
          (o.getSession = getSession),
          (o.signIn = function (s, o, a) {
            return _signIn.apply(this, arguments);
          }),
          (o.signOut = function (s) {
            return _signOut.apply(this, arguments);
          }),
          (o.useSession = function (s) {
            if (!ei)
              throw Error("React Context is unavailable in Server Components");
            var o = V.useContext(ei),
              a = null != s ? s : {},
              c = a.required,
              g = a.onUnauthenticated,
              w = c && "unauthenticated" === o.status;
            return (V.useEffect(
              function () {
                if (w) {
                  var s = "/api/auth/signin?".concat(
                    new URLSearchParams({
                      error: "SessionRequired",
                      callbackUrl: window.location.href,
                    })
                  );
                  g ? g() : (window.location.href = s);
                }
              },
              [w, g]
            ),
            w)
              ? { data: o.data, update: o.update, status: "loading" }
              : o;
          });
        var z = A(a(64687)),
          $ = A(a(38416)),
          W = A(a(17156)),
          G = A(a(27424)),
          V = _interopRequireWildcard(a(67294)),
          K = _interopRequireWildcard(a(26553)),
          X = A(a(30762)),
          Z = a(29548),
          Y = a(85893),
          ee = a(527);
        function _getRequireWildcardCache(s) {
          if ("function" != typeof WeakMap) return null;
          var o = new WeakMap(),
            a = new WeakMap();
          return (_getRequireWildcardCache = function (s) {
            return s ? a : o;
          })(s);
        }
        function _interopRequireWildcard(s, o) {
          if (!o && s && s.__esModule) return s;
          if (null === s || ("object" !== j(s) && "function" != typeof s))
            return { default: s };
          var a = _getRequireWildcardCache(o);
          if (a && a.has(s)) return a.get(s);
          var c = {},
            g = Object.defineProperty && Object.getOwnPropertyDescriptor;
          for (var w in s)
            if ("default" !== w && Object.prototype.hasOwnProperty.call(s, w)) {
              var k = g ? Object.getOwnPropertyDescriptor(s, w) : null;
              k && (k.get || k.set)
                ? Object.defineProperty(c, w, k)
                : (c[w] = s[w]);
            }
          return (c.default = s), a && a.set(s, c), c;
        }
        function ownKeys(s, o) {
          var a = Object.keys(s);
          if (Object.getOwnPropertySymbols) {
            var c = Object.getOwnPropertySymbols(s);
            o &&
              (c = c.filter(function (o) {
                return Object.getOwnPropertyDescriptor(s, o).enumerable;
              })),
              a.push.apply(a, c);
          }
          return a;
        }
        function _objectSpread(s) {
          for (var o = 1; o < arguments.length; o++) {
            var a = null != arguments[o] ? arguments[o] : {};
            o % 2
              ? ownKeys(Object(a), !0).forEach(function (o) {
                  (0, $.default)(s, o, a[o]);
                })
              : Object.getOwnPropertyDescriptors
              ? Object.defineProperties(s, Object.getOwnPropertyDescriptors(a))
              : ownKeys(Object(a)).forEach(function (o) {
                  Object.defineProperty(
                    s,
                    o,
                    Object.getOwnPropertyDescriptor(a, o)
                  );
                });
          }
          return s;
        }
        Object.keys(ee).forEach(function (s) {
          !(
            "default" === s ||
            "__esModule" === s ||
            Object.prototype.hasOwnProperty.call(D, s)
          ) &&
            ((s in o && o[s] === ee[s]) ||
              Object.defineProperty(o, s, {
                enumerable: !0,
                get: function () {
                  return ee[s];
                },
              }));
        });
        var et = {
            baseUrl: (0, X.default)(
              null !== (c = P.env.NEXTAUTH_URL) && void 0 !== c
                ? c
                : P.env.VERCEL_URL
            ).origin,
            basePath: (0, X.default)(P.env.NEXTAUTH_URL).path,
            baseUrlServer: (0, X.default)(
              null !==
                (g =
                  null !== (w = P.env.NEXTAUTH_URL_INTERNAL) && void 0 !== w
                    ? w
                    : P.env.NEXTAUTH_URL) && void 0 !== g
                ? g
                : P.env.VERCEL_URL
            ).origin,
            basePathServer: (0, X.default)(
              null !== (k = P.env.NEXTAUTH_URL_INTERNAL) && void 0 !== k
                ? k
                : P.env.NEXTAUTH_URL
            ).path,
            _lastSync: 0,
            _session: void 0,
            _getSession: function () {},
          },
          er = (0, Z.BroadcastChannel)(),
          en = (0, K.proxyLogger)(K.default, et.basePath),
          ei =
            null === (x = V.createContext) || void 0 === x
              ? void 0
              : x.call(V, void 0);
        function getSession(s) {
          return _getSession2.apply(this, arguments);
        }
        function _getSession2() {
          return (_getSession2 = (0, W.default)(
            z.default.mark(function _callee3(s) {
              var o, a;
              return z.default.wrap(function (c) {
                for (;;)
                  switch ((c.prev = c.next)) {
                    case 0:
                      return (c.next = 2), (0, Z.fetchData)("session", et, en, s);
                    case 2:
                      return (
                        (a = c.sent),
                        (null === (o = null == s ? void 0 : s.broadcast) ||
                          void 0 === o ||
                          o) &&
                          er.post({
                            event: "session",
                            data: { trigger: "getSession" },
                          }),
                        c.abrupt("return", a)
                      );
                    case 5:
                    case "end":
                      return c.stop();
                  }
              }, _callee3);
            })
          )).apply(this, arguments);
        }
        function getCsrfToken(s) {
          return _getCsrfToken.apply(this, arguments);
        }
        function _getCsrfToken() {
          return (_getCsrfToken = (0, W.default)(
            z.default.mark(function _callee4(s) {
              var o;
              return z.default.wrap(function (a) {
                for (;;)
                  switch ((a.prev = a.next)) {
                    case 0:
                      return (a.next = 2), (0, Z.fetchData)("csrf", et, en, s);
                    case 2:
                      return (
                        (o = a.sent),
                        a.abrupt("return", null == o ? void 0 : o.csrfToken)
                      );
                    case 4:
                    case "end":
                      return a.stop();
                  }
              }, _callee4);
            })
          )).apply(this, arguments);
        }
        function getProviders() {
          return _getProviders.apply(this, arguments);
        }
        function _getProviders() {
          return (_getProviders = (0, W.default)(
            z.default.mark(function _callee5() {
              return z.default.wrap(function (s) {
                for (;;)
                  switch ((s.prev = s.next)) {
                    case 0:
                      return (s.next = 2), (0, Z.fetchData)("providers", et, en);
                    case 2:
                      return s.abrupt("return", s.sent);
                    case 3:
                    case "end":
                      return s.stop();
                  }
              }, _callee5);
            })
          )).apply(this, arguments);
        }
        function _signIn() {
          return (_signIn = (0, W.default)(
            z.default.mark(function _callee6(s, o, a) {
              var c, g, w, k, x, P, A, j, D, $, W, G, V, K, X, Y, ee;
              return z.default.wrap(function (z) {
                for (;;)
                  switch ((z.prev = z.next)) {
                    case 0:
                      return (
                        (w =
                          void 0 === (g = (c = null != o ? o : {}).callbackUrl)
                            ? window.location.href
                            : g),
                        (x = void 0 === (k = c.redirect) || k),
                        (P = (0, Z.apiBaseUrl)(et)),
                        (z.next = 4),
                        getProviders()
                      );
                    case 4:
                      if ((A = z.sent)) {
                        z.next = 8;
                        break;
                      }
                      return (
                        (window.location.href = "".concat(P, "/error")),
                        z.abrupt("return")
                      );
                    case 8:
                      if (!(!s || !(s in A))) {
                        z.next = 11;
                        break;
                      }
                      return (
                        (window.location.href = ""
                          .concat(P, "/signin?")
                          .concat(new URLSearchParams({ callbackUrl: w }))),
                        z.abrupt("return")
                      );
                    case 11:
                      return (
                        (j = "credentials" === A[s].type),
                        (D = "email" === A[s].type),
                        ($ = j || D),
                        (W = ""
                          .concat(P, "/")
                          .concat(j ? "callback" : "signin", "/")
                          .concat(s)),
                        (G = ""
                          .concat(W)
                          .concat(a ? "?".concat(new URLSearchParams(a)) : "")),
                        (z.t0 = fetch),
                        (z.t1 = G),
                        (z.t2 = {
                          "Content-Type": "application/x-www-form-urlencoded",
                        }),
                        (z.t3 = URLSearchParams),
                        (z.t4 = _objectSpread),
                        (z.t5 = _objectSpread({}, o)),
                        (z.t6 = {}),
                        (z.next = 25),
                        getCsrfToken()
                      );
                    case 25:
                      return (
                        (z.t7 = z.sent),
                        (z.t8 = w),
                        (z.t9 = { csrfToken: z.t7, callbackUrl: z.t8, json: !0 }),
                        (z.t10 = (0, z.t4)(z.t5, z.t6, z.t9)),
                        (z.t11 = new z.t3(z.t10)),
                        (z.t12 = { method: "post", headers: z.t2, body: z.t11 }),
                        (z.next = 33),
                        (0, z.t0)(z.t1, z.t12)
                      );
                    case 33:
                      return (V = z.sent), (z.next = 36), V.json();
                    case 36:
                      if (((K = z.sent), !(x || !$))) {
                        z.next = 42;
                        break;
                      }
                      return (
                        (Y = null !== (X = K.url) && void 0 !== X ? X : w),
                        (window.location.href = Y),
                        Y.includes("#") && window.location.reload(),
                        z.abrupt("return")
                      );
                    case 42:
                      if (
                        ((ee = new URL(K.url).searchParams.get("error")), !V.ok)
                      ) {
                        z.next = 46;
                        break;
                      }
                      return (z.next = 46), et._getSession({ event: "storage" });
                    case 46:
                      return z.abrupt("return", {
                        error: ee,
                        status: V.status,
                        ok: V.ok,
                        url: ee ? null : K.url,
                      });
                    case 47:
                    case "end":
                      return z.stop();
                  }
              }, _callee6);
            })
          )).apply(this, arguments);
        }
        function _signOut() {
          return (_signOut = (0, W.default)(
            z.default.mark(function _callee7(s) {
              var o, a, c, g, w, k, x, P, A;
              return z.default.wrap(function (j) {
                for (;;)
                  switch ((j.prev = j.next)) {
                    case 0:
                      return (
                        (c =
                          void 0 === (a = (null != s ? s : {}).callbackUrl)
                            ? window.location.href
                            : a),
                        (g = (0, Z.apiBaseUrl)(et)),
                        (j.t0 = {
                          "Content-Type": "application/x-www-form-urlencoded",
                        }),
                        (j.t1 = URLSearchParams),
                        (j.next = 6),
                        getCsrfToken()
                      );
                    case 6:
                      return (
                        (j.t2 = j.sent),
                        (j.t3 = c),
                        (j.t4 = { csrfToken: j.t2, callbackUrl: j.t3, json: !0 }),
                        (j.t5 = new j.t1(j.t4)),
                        (w = { method: "post", headers: j.t0, body: j.t5 }),
                        (j.next = 13),
                        fetch("".concat(g, "/signout"), w)
                      );
                    case 13:
                      return (k = j.sent), (j.next = 16), k.json();
                    case 16:
                      if (
                        ((x = j.sent),
                        er.post({
                          event: "session",
                          data: { trigger: "signout" },
                        }),
                        !(
                          null === (o = null == s ? void 0 : s.redirect) ||
                          void 0 === o ||
                          o
                        ))
                      ) {
                        j.next = 23;
                        break;
                      }
                      return (
                        (A = null !== (P = x.url) && void 0 !== P ? P : c),
                        (window.location.href = A),
                        A.includes("#") && window.location.reload(),
                        j.abrupt("return")
                      );
                    case 23:
                      return (j.next = 25), et._getSession({ event: "storage" });
                    case 25:
                      return j.abrupt("return", x);
                    case 26:
                    case "end":
                      return j.stop();
                  }
              }, _callee7);
            })
          )).apply(this, arguments);
        }
        o.SessionContext = ei;
      },
      527: function (s, o) {
        "use strict";
        Object.defineProperty(o, "__esModule", { value: !0 });
      },
      26553: function (s, o, a) {
        "use strict";
        var c = a(64836);
        Object.defineProperty(o, "__esModule", { value: !0 }),
          (o.default = void 0),
          (o.proxyLogger = function () {
            var s =
                arguments.length > 0 && void 0 !== arguments[0]
                  ? arguments[0]
                  : k,
              o = arguments.length > 1 ? arguments[1] : void 0;
            try {
              if ("undefined" == typeof window) return s;
              var a = {},
                _loop = function (s) {
                  a[s] = function (a, c) {
                    k[s](a, c),
                      "error" === s && (c = formatError(c)),
                      (c.client = !0);
                    var w = "".concat(o, "/_log"),
                      x = new URLSearchParams(
                        (function (s) {
                          for (var o = 1; o < arguments.length; o++) {
                            var a = null != arguments[o] ? arguments[o] : {};
                            o % 2
                              ? ownKeys(Object(a), !0).forEach(function (o) {
                                  (0, g.default)(s, o, a[o]);
                                })
                              : Object.getOwnPropertyDescriptors
                              ? Object.defineProperties(
                                  s,
                                  Object.getOwnPropertyDescriptors(a)
                                )
                              : ownKeys(Object(a)).forEach(function (o) {
                                  Object.defineProperty(
                                    s,
                                    o,
                                    Object.getOwnPropertyDescriptor(a, o)
                                  );
                                });
                          }
                          return s;
                        })({ level: s, code: a }, c)
                      );
                    return navigator.sendBeacon
                      ? navigator.sendBeacon(w, x)
                      : fetch(w, { method: "POST", body: x, keepalive: !0 });
                  };
                };
              for (var c in s) _loop(c);
              return a;
            } catch (s) {
              return k;
            }
          }),
          (o.setLogger = function () {
            var s =
                arguments.length > 0 && void 0 !== arguments[0]
                  ? arguments[0]
                  : {},
              o = arguments.length > 1 ? arguments[1] : void 0;
            o || (k.debug = function () {}),
              s.error && (k.error = s.error),
              s.warn && (k.warn = s.warn),
              s.debug && (k.debug = s.debug);
          });
        var g = c(a(38416)),
          w = a(36925);
        function ownKeys(s, o) {
          var a = Object.keys(s);
          if (Object.getOwnPropertySymbols) {
            var c = Object.getOwnPropertySymbols(s);
            o &&
              (c = c.filter(function (o) {
                return Object.getOwnPropertyDescriptor(s, o).enumerable;
              })),
              a.push.apply(a, c);
          }
          return a;
        }
        function formatError(s) {
          var o;
          return s instanceof Error && !(s instanceof w.UnknownError)
            ? { message: s.message, stack: s.stack, name: s.name }
            : (null != s &&
                s.error &&
                ((s.error = formatError(s.error)),
                (s.message =
                  null !== (o = s.message) && void 0 !== o
                    ? o
                    : s.error.message)),
              s);
        }
        var k = {
          error: function (s, o) {
            (o = formatError(o)),
              console.error(
                "[next-auth][error][".concat(s, "]"),
                "\nhttps://next-auth.js.org/errors#".concat(s.toLowerCase()),
                o.message,
                o
              );
          },
          warn: function (s) {
            console.warn(
              "[next-auth][warn][".concat(s, "]"),
              "\nhttps://next-auth.js.org/warnings#".concat(s.toLowerCase())
            );
          },
          debug: function (s, o) {
            console.log("[next-auth][debug][".concat(s, "]"), o);
          },
        };
        o.default = k;
      },
      30762: function (s, o) {
        "use strict";
        Object.defineProperty(o, "__esModule", { value: !0 }),
          (o.default = function (s) {
            var o;
            let a = new URL("http://localhost:3000/api/auth");
            s && !s.startsWith("http") && (s = `https://${s}`);
            let c = new URL(null !== (o = s) && void 0 !== o ? o : a),
              g = ("/" === c.pathname ? a.pathname : c.pathname).replace(
                /\/$/,
                ""
              ),
              w = `${c.origin}${g}`;
            return {
              origin: c.origin,
              host: c.host,
              path: g,
              base: w,
              toString: () => w,
            };
          });
      },
      6840: function (s, o, a) {
        (window.__NEXT_P = window.__NEXT_P || []).push([
          "/_app",
          function () {
            return a(80541);
          },
        ]);
      },
      1342: function (s, o, a) {
        "use strict";
        Object.defineProperty(o, "__esModule", { value: !0 }),
          (function (s, o) {
            for (var a in o)
              Object.defineProperty(s, a, { enumerable: !0, get: o[a] });
          })(o, {
            noSSR: function () {
              return noSSR;
            },
            default: function () {
              return dynamic;
            },
          });
        let c = a(38754),
          g = (a(67294), c._(a(24304)));
        function convertModule(s) {
          return { default: (null == s ? void 0 : s.default) || s };
        }
        function noSSR(s, o) {
          return delete o.webpack, delete o.modules, s(o);
        }
        function dynamic(s, o) {
          let a = g.default,
            c = {
              loading: (s) => {
                let { error: o, isLoading: a, pastDelay: c } = s;
                return null;
              },
            };
          s instanceof Promise
            ? (c.loader = () => s)
            : "function" == typeof s
            ? (c.loader = s)
            : "object" == typeof s && (c = { ...c, ...s }),
            (c = { ...c, ...o });
          let w = c.loader;
          return (c.loadableGenerated &&
            ((c = { ...c, ...c.loadableGenerated }), delete c.loadableGenerated),
          "boolean" != typeof c.ssr || c.ssr)
            ? a({
                ...c,
                loader: () =>
                  null != w
                    ? w().then(convertModule)
                    : Promise.resolve(convertModule(() => null)),
              })
            : (delete c.webpack, delete c.modules, noSSR(a, c));
        }
        ("function" == typeof o.default ||
          ("object" == typeof o.default && null !== o.default)) &&
          void 0 === o.default.__esModule &&
          (Object.defineProperty(o.default, "__esModule", { value: !0 }),
          Object.assign(o.default, o),
          (s.exports = o.default));
      },
      30043: function (s, o, a) {
        "use strict";
        Object.defineProperty(o, "__esModule", { value: !0 }),
          Object.defineProperty(o, "LoadableContext", {
            enumerable: !0,
            get: function () {
              return w;
            },
          });
        let c = a(38754),
          g = c._(a(67294)),
          w = g.default.createContext(null);
      },
      24304: function (s, o, a) {
        "use strict";
        /**
  @copyright (c) 2017-present James Kyle <me@thejameskyle.com>
   MIT License
   Permission is hereby granted, free of charge, to any person obtaining
  a copy of this software and associated documentation files (the
  "Software"), to deal in the Software without restriction, including
  without limitation the rights to use, copy, modify, merge, publish,
  distribute, sublicense, and/or sell copies of the Software, and to
  permit persons to whom the Software is furnished to do so, subject to
  the following conditions:
   The above copyright notice and this permission notice shall be
  included in all copies or substantial portions of the Software.
   THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND,
  EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF
  MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND
  NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE
  LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION
  OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION
  WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE
  */ Object.defineProperty(o, "__esModule", { value: !0 }),
          Object.defineProperty(o, "default", {
            enumerable: !0,
            get: function () {
              return A;
            },
          });
        let c = a(38754),
          g = c._(a(67294)),
          w = a(30043),
          k = [],
          x = [],
          P = !1;
        function load(s) {
          let o = s(),
            a = { loading: !0, loaded: null, error: null };
          return (
            (a.promise = o
              .then((s) => ((a.loading = !1), (a.loaded = s), s))
              .catch((s) => {
                throw ((a.loading = !1), (a.error = s), s);
              })),
            a
          );
        }
        let LoadableSubscription = class LoadableSubscription {
          promise() {
            return this._res.promise;
          }
          retry() {
            this._clearTimeouts(),
              (this._res = this._loadFn(this._opts.loader)),
              (this._state = { pastDelay: !1, timedOut: !1 });
            let { _res: s, _opts: o } = this;
            s.loading &&
              ("number" == typeof o.delay &&
                (0 === o.delay
                  ? (this._state.pastDelay = !0)
                  : (this._delay = setTimeout(() => {
                      this._update({ pastDelay: !0 });
                    }, o.delay))),
              "number" == typeof o.timeout &&
                (this._timeout = setTimeout(() => {
                  this._update({ timedOut: !0 });
                }, o.timeout))),
              this._res.promise
                .then(() => {
                  this._update({}), this._clearTimeouts();
                })
                .catch((s) => {
                  this._update({}), this._clearTimeouts();
                }),
              this._update({});
          }
          _update(s) {
            (this._state = {
              ...this._state,
              error: this._res.error,
              loaded: this._res.loaded,
              loading: this._res.loading,
              ...s,
            }),
              this._callbacks.forEach((s) => s());
          }
          _clearTimeouts() {
            clearTimeout(this._delay), clearTimeout(this._timeout);
          }
          getCurrentValue() {
            return this._state;
          }
          subscribe(s) {
            return (
              this._callbacks.add(s),
              () => {
                this._callbacks.delete(s);
              }
            );
          }
          constructor(s, o) {
            (this._loadFn = s),
              (this._opts = o),
              (this._callbacks = new Set()),
              (this._delay = null),
              (this._timeout = null),
              this.retry();
          }
        };
        function Loadable(s) {
          return (function (s, o) {
            let a = Object.assign(
                {
                  loader: null,
                  loading: null,
                  delay: 200,
                  timeout: null,
                  webpack: null,
                  modules: null,
                },
                o
              ),
              c = null;
            function init() {
              if (!c) {
                let o = new LoadableSubscription(s, a);
                c = {
                  getCurrentValue: o.getCurrentValue.bind(o),
                  subscribe: o.subscribe.bind(o),
                  retry: o.retry.bind(o),
                  promise: o.promise.bind(o),
                };
              }
              return c.promise();
            }
            if (!P) {
              let s = a.webpack ? a.webpack() : a.modules;
              s &&
                x.push((o) => {
                  for (let a of s) if (o.includes(a)) return init();
                });
            }
            function LoadableComponent(s, o) {
              !(function () {
                init();
                let s = g.default.useContext(w.LoadableContext);
                s &&
                  Array.isArray(a.modules) &&
                  a.modules.forEach((o) => {
                    s(o);
                  });
              })();
              let k = g.default.useSyncExternalStore(
                c.subscribe,
                c.getCurrentValue,
                c.getCurrentValue
              );
              return (
                g.default.useImperativeHandle(o, () => ({ retry: c.retry }), []),
                g.default.useMemo(() => {
                  var o;
                  return k.loading || k.error
                    ? g.default.createElement(a.loading, {
                        isLoading: k.loading,
                        pastDelay: k.pastDelay,
                        timedOut: k.timedOut,
                        error: k.error,
                        retry: c.retry,
                      })
                    : k.loaded
                    ? g.default.createElement(
                        (o = k.loaded) && o.default ? o.default : o,
                        s
                      )
                    : null;
                }, [s, k])
              );
            }
            return (
              (LoadableComponent.preload = () => init()),
              (LoadableComponent.displayName = "LoadableComponent"),
              g.default.forwardRef(LoadableComponent)
            );
          })(load, s);
        }
        function flushInitializers(s, o) {
          let a = [];
          for (; s.length; ) {
            let c = s.pop();
            a.push(c(o));
          }
          return Promise.all(a).then(() => {
            if (s.length) return flushInitializers(s, o);
          });
        }
        (Loadable.preloadAll = () =>
          new Promise((s, o) => {
            flushInitializers(k).then(s, o);
          })),
          (Loadable.preloadReady = (s) => (
            void 0 === s && (s = []),
            new Promise((o) => {
              let res = () => ((P = !0), o());
              flushInitializers(x, s).then(res, res);
            })
          )),
          (window.__NEXT_PRELOADREADY = Loadable.preloadReady);
        let A = Loadable;
      },
      597: function (s, o, a) {
        var c = a(34155);
        a(91479);
        var g = a(67294),
          w = g && "object" == typeof g && "default" in g ? g : { default: g };
        function _defineProperties(s, o) {
          for (var a = 0; a < o.length; a++) {
            var c = o[a];
            (c.enumerable = c.enumerable || !1),
              (c.configurable = !0),
              "value" in c && (c.writable = !0),
              Object.defineProperty(s, c.key, c);
          }
        }
        var k = void 0 !== c && c.env && !0,
          isString = function (s) {
            return "[object String]" === Object.prototype.toString.call(s);
          },
          x = (function () {
            function StyleSheet(s) {
              var o = void 0 === s ? {} : s,
                a = o.name,
                c = void 0 === a ? "stylesheet" : a,
                g = o.optimizeForSpeed,
                w = void 0 === g ? k : g;
              invariant$1(isString(c), "`name` must be a string"),
                (this._name = c),
                (this._deletedRulePlaceholder = "#" + c + "-deleted-rule____{}"),
                invariant$1(
                  "boolean" == typeof w,
                  "`optimizeForSpeed` must be a boolean"
                ),
                (this._optimizeForSpeed = w),
                (this._serverSheet = void 0),
                (this._tags = []),
                (this._injected = !1),
                (this._rulesCount = 0);
              var x = document.querySelector('meta[property="csp-nonce"]');
              this._nonce = x ? x.getAttribute("content") : null;
            }
            var s,
              o = StyleSheet.prototype;
            return (
              (o.setOptimizeForSpeed = function (s) {
                invariant$1(
                  "boolean" == typeof s,
                  "`setOptimizeForSpeed` accepts a boolean"
                ),
                  invariant$1(
                    0 === this._rulesCount,
                    "optimizeForSpeed cannot be when rules have already been inserted"
                  ),
                  this.flush(),
                  (this._optimizeForSpeed = s),
                  this.inject();
              }),
              (o.isOptimizeForSpeed = function () {
                return this._optimizeForSpeed;
              }),
              (o.inject = function () {
                var s = this;
                if (
                  (invariant$1(!this._injected, "sheet already injected"),
                  (this._injected = !0),
                  this._optimizeForSpeed)
                ) {
                  (this._tags[0] = this.makeStyleTag(this._name)),
                    (this._optimizeForSpeed = "insertRule" in this.getSheet()),
                    this._optimizeForSpeed ||
                      (k ||
                        console.warn(
                          "StyleSheet: optimizeForSpeed mode not supported falling back to standard mode."
                        ),
                      this.flush(),
                      (this._injected = !0));
                  return;
                }
                this._serverSheet = {
                  cssRules: [],
                  insertRule: function (o, a) {
                    return (
                      "number" == typeof a
                        ? (s._serverSheet.cssRules[a] = { cssText: o })
                        : s._serverSheet.cssRules.push({ cssText: o }),
                      a
                    );
                  },
                  deleteRule: function (o) {
                    s._serverSheet.cssRules[o] = null;
                  },
                };
              }),
              (o.getSheetForTag = function (s) {
                if (s.sheet) return s.sheet;
                for (var o = 0; o < document.styleSheets.length; o++)
                  if (document.styleSheets[o].ownerNode === s)
                    return document.styleSheets[o];
              }),
              (o.getSheet = function () {
                return this.getSheetForTag(this._tags[this._tags.length - 1]);
              }),
              (o.insertRule = function (s, o) {
                if (
                  (invariant$1(isString(s), "`insertRule` accepts only strings"),
                  this._optimizeForSpeed)
                ) {
                  var a = this.getSheet();
                  "number" != typeof o && (o = a.cssRules.length);
                  try {
                    a.insertRule(s, o);
                  } catch (o) {
                    return (
                      k ||
                        console.warn(
                          "StyleSheet: illegal rule: \n\n" +
                            s +
                            "\n\nSee https://stackoverflow.com/q/20007992 for more info"
                        ),
                      -1
                    );
                  }
                } else {
                  var c = this._tags[o];
                  this._tags.push(this.makeStyleTag(this._name, s, c));
                }
                return this._rulesCount++;
              }),
              (o.replaceRule = function (s, o) {
                if (this._optimizeForSpeed) {
                  var a = this.getSheet();
                  if (
                    (o.trim() || (o = this._deletedRulePlaceholder),
                    !a.cssRules[s])
                  )
                    return s;
                  a.deleteRule(s);
                  try {
                    a.insertRule(o, s);
                  } catch (c) {
                    k ||
                      console.warn(
                        "StyleSheet: illegal rule: \n\n" +
                          o +
                          "\n\nSee https://stackoverflow.com/q/20007992 for more info"
                      ),
                      a.insertRule(this._deletedRulePlaceholder, s);
                  }
                } else {
                  var c = this._tags[s];
                  invariant$1(c, "old rule at index `" + s + "` not found"),
                    (c.textContent = o);
                }
                return s;
              }),
              (o.deleteRule = function (s) {
                if (this._optimizeForSpeed) this.replaceRule(s, "");
                else {
                  var o = this._tags[s];
                  invariant$1(o, "rule at index `" + s + "` not found"),
                    o.parentNode.removeChild(o),
                    (this._tags[s] = null);
                }
              }),
              (o.flush = function () {
                (this._injected = !1),
                  (this._rulesCount = 0),
                  this._tags.forEach(function (s) {
                    return s && s.parentNode.removeChild(s);
                  }),
                  (this._tags = []);
              }),
              (o.cssRules = function () {
                var s = this;
                return this._tags.reduce(function (o, a) {
                  return (
                    a
                      ? (o = o.concat(
                          Array.prototype.map.call(
                            s.getSheetForTag(a).cssRules,
                            function (o) {
                              return o.cssText === s._deletedRulePlaceholder
                                ? null
                                : o;
                            }
                          )
                        ))
                      : o.push(null),
                    o
                  );
                }, []);
              }),
              (o.makeStyleTag = function (s, o, a) {
                o &&
                  invariant$1(
                    isString(o),
                    "makeStyleTag accepts only strings as second parameter"
                  );
                var c = document.createElement("style");
                this._nonce && c.setAttribute("nonce", this._nonce),
                  (c.type = "text/css"),
                  c.setAttribute("data-" + s, ""),
                  o && c.appendChild(document.createTextNode(o));
                var g = document.head || document.getElementsByTagName("head")[0];
                return a ? g.insertBefore(c, a) : g.appendChild(c), c;
              }),
              _defineProperties(StyleSheet.prototype, [
                {
                  key: "length",
                  get: function () {
                    return this._rulesCount;
                  },
                },
              ]),
              s && _defineProperties(StyleSheet, s),
              StyleSheet
            );
          })();
        function invariant$1(s, o) {
          if (!s) throw Error("StyleSheet: " + o + ".");
        }
        var stringHash = function (s) {
            for (var o = 5381, a = s.length; a; )
              o = (33 * o) ^ s.charCodeAt(--a);
            return o >>> 0;
          },
          P = {};
        function computeId(s, o) {
          if (!o) return "jsx-" + s;
          var a = String(o),
            c = s + a;
          return P[c] || (P[c] = "jsx-" + stringHash(s + "-" + a)), P[c];
        }
        function computeSelector(s, o) {
          var a = s + o;
          return (
            P[a] || (P[a] = o.replace(/__jsx-style-dynamic-selector/g, s)), P[a]
          );
        }
        var A = (function () {
            function StyleSheetRegistry(s) {
              var o = void 0 === s ? {} : s,
                a = o.styleSheet,
                c = void 0 === a ? null : a,
                g = o.optimizeForSpeed,
                w = void 0 !== g && g;
              (this._sheet =
                c || new x({ name: "styled-jsx", optimizeForSpeed: w })),
                this._sheet.inject(),
                c &&
                  "boolean" == typeof w &&
                  (this._sheet.setOptimizeForSpeed(w),
                  (this._optimizeForSpeed = this._sheet.isOptimizeForSpeed())),
                (this._fromServer = void 0),
                (this._indices = {}),
                (this._instancesCounts = {});
            }
            var s = StyleSheetRegistry.prototype;
            return (
              (s.add = function (s) {
                var o = this;
                void 0 === this._optimizeForSpeed &&
                  ((this._optimizeForSpeed = Array.isArray(s.children)),
                  this._sheet.setOptimizeForSpeed(this._optimizeForSpeed),
                  (this._optimizeForSpeed = this._sheet.isOptimizeForSpeed())),
                  this._fromServer ||
                    ((this._fromServer = this.selectFromServer()),
                    (this._instancesCounts = Object.keys(this._fromServer).reduce(
                      function (s, o) {
                        return (s[o] = 0), s;
                      },
                      {}
                    )));
                var a = this.getIdAndRules(s),
                  c = a.styleId,
                  g = a.rules;
                if (c in this._instancesCounts) {
                  this._instancesCounts[c] += 1;
                  return;
                }
                var w = g
                  .map(function (s) {
                    return o._sheet.insertRule(s);
                  })
                  .filter(function (s) {
                    return -1 !== s;
                  });
                (this._indices[c] = w), (this._instancesCounts[c] = 1);
              }),
              (s.remove = function (s) {
                var o = this,
                  a = this.getIdAndRules(s).styleId;
                if (
                  ((function (s, o) {
                    if (!s) throw Error("StyleSheetRegistry: " + o + ".");
                  })(
                    a in this._instancesCounts,
                    "styleId: `" + a + "` not found"
                  ),
                  (this._instancesCounts[a] -= 1),
                  this._instancesCounts[a] < 1)
                ) {
                  var c = this._fromServer && this._fromServer[a];
                  c
                    ? (c.parentNode.removeChild(c), delete this._fromServer[a])
                    : (this._indices[a].forEach(function (s) {
                        return o._sheet.deleteRule(s);
                      }),
                      delete this._indices[a]),
                    delete this._instancesCounts[a];
                }
              }),
              (s.update = function (s, o) {
                this.add(o), this.remove(s);
              }),
              (s.flush = function () {
                this._sheet.flush(),
                  this._sheet.inject(),
                  (this._fromServer = void 0),
                  (this._indices = {}),
                  (this._instancesCounts = {});
              }),
              (s.cssRules = function () {
                var s = this,
                  o = this._fromServer
                    ? Object.keys(this._fromServer).map(function (o) {
                        return [o, s._fromServer[o]];
                      })
                    : [],
                  a = this._sheet.cssRules();
                return o.concat(
                  Object.keys(this._indices)
                    .map(function (o) {
                      return [
                        o,
                        s._indices[o]
                          .map(function (s) {
                            return a[s].cssText;
                          })
                          .join(s._optimizeForSpeed ? "" : "\n"),
                      ];
                    })
                    .filter(function (s) {
                      return !!s[1];
                    })
                );
              }),
              (s.styles = function (s) {
                var o, a;
                return (
                  (o = this.cssRules()),
                  void 0 === (a = s) && (a = {}),
                  o.map(function (s) {
                    var o = s[0],
                      c = s[1];
                    return w.default.createElement("style", {
                      id: "__" + o,
                      key: "__" + o,
                      nonce: a.nonce ? a.nonce : void 0,
                      dangerouslySetInnerHTML: { __html: c },
                    });
                  })
                );
              }),
              (s.getIdAndRules = function (s) {
                var o = s.children,
                  a = s.dynamic,
                  c = s.id;
                if (a) {
                  var g = computeId(c, a);
                  return {
                    styleId: g,
                    rules: Array.isArray(o)
                      ? o.map(function (s) {
                          return computeSelector(g, s);
                        })
                      : [computeSelector(g, o)],
                  };
                }
                return {
                  styleId: computeId(c),
                  rules: Array.isArray(o) ? o : [o],
                };
              }),
              (s.selectFromServer = function () {
                return Array.prototype.slice
                  .call(document.querySelectorAll('[id^="__jsx-"]'))
                  .reduce(function (s, o) {
                    return (s[o.id.slice(2)] = o), s;
                  }, {});
              }),
              StyleSheetRegistry
            );
          })(),
          j = g.createContext(null);
        j.displayName = "StyleSheetContext";
        var D = w.default.useInsertionEffect || w.default.useLayoutEffect,
          z = new A();
        function JSXStyle(s) {
          var o = z || g.useContext(j);
          return (
            o &&
              D(
                function () {
                  return (
                    o.add(s),
                    function () {
                      o.remove(s);
                    }
                  );
                },
                [s.id, String(s.dynamic)]
              ),
            null
          );
        }
        (JSXStyle.dynamic = function (s) {
          return s
            .map(function (s) {
              return computeId(s[0], s[1]);
            })
            .join(" ");
        }),
          (o.style = JSXStyle);
      },
      5379: function (s, o, a) {
        "use strict";
        s.exports = a(597).style;
      },
      12687: function (s, o, a) {
        "use strict";
        a.d(o, {
          p: function () {
            return D;
          },
          P: function () {
            return LoadingProvider;
          },
        });
        var c = a(85893),
          g = a(11163),
          w = a(67294),
          k = a(5152),
          x = a.n(k);
        let P = x()(
            () =>
              a
                .e(5424)
                .then(a.bind(a, 15424))
                .then((s) => s.motion.div),
            { loadableGenerated: { webpack: () => [null] }, ssr: !1 }
          ),
          A = x()(
            () =>
              a
                .e(5424)
                .then(a.bind(a, 15424))
                .then((s) => s.AnimatePresence),
            { loadableGenerated: { webpack: () => [null] }, ssr: !1 }
          );
        var j = (0, w.memo)((s) => {
          let { isLoading: o } = s;
          return (0, c.jsx)(A, {
            mode: "wait",
            children:
              void 0 === o ||
              (o &&
                (0, c.jsx)(P, {
                  initial: { opacity: 0 },
                  animate: { opacity: 1 },
                  exit: { opacity: 0 },
                  transition: { duration: 0.5 },
                  className:
                    "app-preloader dark:bg-navy-900 fixed inset-0 z-[9999999] grid h-full w-full place-content-center bg-slate-700 bg-opacity-60",
                  children: (0, c.jsx)("div", {
                    className:
                      "app-preloader-inner relative mx-auto inline-block h-48 w-48 before:absolute before:h-full before:w-full before:rounded-full before:bg-[#ff00a1] before:bg-opacity-60 before:content-[''] after:absolute after:h-full after:w-full after:rounded-full after:bg-[#ff00a1] after:bg-opacity-60 after:content-['']",
                    "aria-label": "Carregando...",
                  }),
                })),
          });
        });
        let D = (0, w.createContext)({}),
          LoadingProvider = (s) => {
            let { children: o } = s,
              a = (0, g.useRouter)(),
              [k, x] = (0, w.useState)(!1);
            return (
              (0, w.useEffect)(() => {
                let handleStart = () => x(!0),
                  handleComplete = () => x(!1);
                return (
                  a.events.on("routeChangeStart", handleStart),
                  a.events.on("routeChangeComplete", handleComplete),
                  a.events.on("routeChangeError", handleComplete),
                  () => {
                    a.events.off("routeChangeStart", handleStart),
                      a.events.off("routeChangeComplete", handleComplete),
                      a.events.off("routeChangeError", handleComplete);
                  }
                );
              }),
              (0, c.jsxs)(D.Provider, {
                value: { loading: k, setLoading: x },
                children: [(0, c.jsx)(j, { isLoading: k }), o],
              })
            );
          };
      },
      53878: function (s, o, a) {
        "use strict";
        a.d(o, {
          L: function () {
            return A;
          },
          O: function () {
            return PaymentProvider;
          },
        });
        var c = a(85893),
          g = a(11163),
          w = a(67294),
          k = a(91444),
          x = a(86606),
          P = new (a.n(x)())("37eb98f56b1f7908db7b", {
            cluster: "sa1",
            authEndpoint: "/api/auth/pusher",
            authTransport: "ajax",
            auth: { headers: { "Content-Type": "application/json" } },
          });
        let A = (0, w.createContext)({}),
          PaymentProvider = (s) => {
            let { children: o } = s,
              a = (0, g.useRouter)(),
              [x, j] = (0, w.useState)(null);
            (0, w.useEffect)(() => {
              j(JSON.parse(localStorage.getItem("lastPayment")));
            }, []);
            let D = (0, w.useCallback)(() => {
                k.Am.success("Pagamento recebido com sucesso!");
                try {
                  window.dataLayer.push({ event: "purchase" }),
                    window.fbq("track", "Purchase"),
                    console.log("fbq");
                } catch (s) {}
                j(null),
                  localStorage.removeItem("lastPayment"),
                  setTimeout(async () => {
                    await a.push("/panel/home"), a.reload();
                  }, 500);
              }, [a]),
              z = (0, w.useCallback)((s) => {
                j(s), localStorage.setItem("lastPayment", JSON.stringify(s));
              }, []);
            return (
              (0, w.useEffect)(() => {
                if (x)
                  return (
                    P.subscribe(x),
                    P.bind("pix_payment", () => {
                      D();
                    }),
                    () => {
                      P.unsubscribe(x);
                    }
                  );
              }, [x, a, D]),
              (0, c.jsx)(A.Provider, {
                value: { listenToPayment: z, handlePaymentReceived: D },
                children: o,
              })
            );
          };
      },
      67686: function (s, o, a) {
        "use strict";
        a.d(o, {
          G: function () {
            return w;
          },
          z: function () {
            return TenantProvider;
          },
        });
        var c = a(85893),
          g = a(67294);
        let w = (0, g.createContext)(null),
          k = null,
          TenantProvider = (s) => {
            let { children: o, value: a } = s,
              [x, P] = (0, g.useState)(a);
            return (
              (0, g.useEffect)(() => {
                a && ((k = a), P(a)), k && P(k);
              }, [a]),
              (0, c.jsx)(w.Provider, { value: x, children: o })
            );
          };
      },
      44833: function (s, o, a) {
        "use strict";
        a.d(o, {
          S: function () {
            return useTenant;
          },
        });
        var c = a(67294),
          g = a(67686);
        let useTenant = () => (0, c.useContext)(g.G);
      },
      33371: function (s, o, a) {
        "use strict";
        a.d(o, {
          k: function () {
            return k.a;
          },
        });
        var c = a(34061),
          g = a.n(c),
          w = a(2043),
          k = a.n(w),
          x = a(67987),
          P = a.n(x);
        let A = {
          TRACE: g().magenta,
          DEBUG: g().cyan,
          INFO: g().blue,
          WARN: g().yellow,
          ERROR: g().red,
        };
        P().reg(k()),
          P().apply(k(), {
            format: (s, o, a) =>
              ""
                .concat(g().gray("[".concat(a, "]")), " ")
                .concat(A[s.toUpperCase()](s), " ")
                .concat(g().green("".concat(o, ":"))),
          });
      },
      80541: function (s, o, a) {
        "use strict";
        a.r(o),
          a.d(o, {
            default: function () {
              return ep;
            },
          });
        var c,
          g,
          w = a(85893),
          k = a(53786),
          x = a.n(k),
          P = a(47911),
          A = a.n(P),
          j = a(5379),
          D = a.n(j),
          z = a(33299);
        a(27967);
        var $ = a(67686),
          W = a(70385),
          G = a(33371);
        function softDelete(s) {
          return this.update({ ...s, data: { deletedAt: new Date() } });
        }
        function softDeleteMany(s) {
          return this.updateMany({ ...s, data: { deletedAt: new Date() } });
        }
        function softRestore(s) {
          return this.update({ ...s, data: { deletedAt: null } });
        }
        function softRestoreMany(s) {
          return this.updateMany({ ...s, data: { deletedAt: null } });
        }
        async function scopedQuery(s) {
          let { args: o, query: a } = s;
          return a({ ...o, where: { deletedAt: null, ...o.where } });
        }
        function createTypedObjectFromEntries(s) {
          return Object.fromEntries(s);
        }
        let V = { models: ["$allModels"] };
        a(52153);
        let K = globalThis,
          X =
            null !== (g = K.prisma) && void 0 !== g && g
              ? new W.PrismaClient()
                  .$extends(void 0)
                  .$extends(void 0)
                  .$extends(void 0)
                  .$extends(void 0)
                  .$extends(
                    ((s) => {
                      let o = { ...V, ...s };
                      createTypedObjectFromEntries(
                        o.models.map((s) => [
                          s,
                          {
                            aggregate: scopedQuery,
                            count: scopedQuery,
                            findFirst: scopedQuery,
                            findFirstOrThrow: scopedQuery,
                            findMany: scopedQuery,
                            groupBy: scopedQuery,
                          },
                        ])
                      ),
                        createTypedObjectFromEntries(
                          o.models.map((s) => [
                            s,
                            {
                              softDelete: softDelete,
                              softDeleteMany: softDeleteMany,
                              softRestore: softRestore,
                              softRestoreMany: softRestoreMany,
                            },
                          ])
                        );
                    })({ models: ["user", "firstDeposit", "revenueShare"] })
                  )
              : new W.PrismaClient();
        a(48764).lW;
        let getCredentials = async (s) =>
          await X.$extends({
            query: {
              $allOperations(o) {
                var a, c;
                let { model: g, operation: w, args: k, query: x } = o,
                  P =
                    null ===
                      (c = W.Prisma.dmmf.datamodel.models.find(
                        (s) => s.name === g
                      )) || void 0 === c
                      ? void 0
                      : null ===
                          (a = c.fields.find((s) => "tenantId" === s.name)) ||
                        void 0 === a
                      ? void 0
                      : a.type;
                return (
                  P
                    ? ((k.where = {
                        ...k.where,
                        tenantId: null == s ? void 0 : s.id,
                      }),
                      "create" === w &&
                        ((k.data = {
                          ...k.data,
                          tenant: { connect: { id: null == s ? void 0 : s.id } },
                        }),
                        delete k.where),
                      "upsert" === w &&
                        (k.create = {
                          ...k.create,
                          tenant: { connect: { id: null == s ? void 0 : s.id } },
                        }))
                    : "create" === w ||
                      "upsert" === w ||
                      (k.where = { ...k.where, id: null == s ? void 0 : s.id }),
                  x(k)
                );
              },
            },
          }).tenant.findUniqueOrThrow({
            where: { id: s.id },
            select: {
              primePagApiKey: !0,
              primePagApiSecret: !0,
              primePagWebhookSecret: !0,
            },
          });
        var Z = a(34155);
        async function syncEnvFieldsWithTenant(s) {
          let o = {};
          s.gtmId || (o.gtmId = "GTM-WVMV74G7");
          let a = await getCredentials(s);
          a.primePagApiKey || (o.primePagApiKey = Z.env.PRIME_PAG_CLIENT_ID),
            a.primePagApiSecret ||
              (o.primePagApiSecret = Z.env.PRIME_PAG_CLIENT_SECRET),
            a.primePagWebhookSecret ||
              (o.primePagWebhookSecret = Z.env.PRIME_PAG_WEBHOOK_SECRET),
            Object.keys(o).length
              ? (G.k.info(
                  "Updating tenant props: ".concat(Object.keys(o).join(", "))
                ),
                await X.tenant.update({ where: { id: s.id }, data: o }))
              : G.k.info("No fields to change");
        }
        async function generateFallbackTenant() {
          let s =
            arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
          return await (null == X
            ? void 0
            : X.tenant.create({
                data: {
                  name: "Fruity Money",
                  description: "Fruity Money",
                  domain: Z.env.NEXTAUTH_URL,
                  email: Z.env.NEXT_PUBLIC_SUPPORT_EMAIL || "",
                  enableFirstDeposit: !1,
                  enableRevenueShare: !1,
                  htmlName:
                    "<h1>" +
                    ("FRUITY MONEY".split(" ").join("<br />") ||
                      "FRUITS<br />MONEYS") +
                    "</h1>",
                  gtmId: "GTM-WVMV74G7",
                  primePagApiKey: Z.env.PRIME_PAG_CLIENT_ID || null,
                  primePagWebhookSecret: Z.env.PRIME_PAG_WEBHOOK_SECRET || null,
                  primePagApiSecret: Z.env.PRIME_PAG_CLIENT_SECRET || null,
                  gameLogo:
                    "true" !== Z.env.NEXT_PUBLIC_IS_NINJA
                      ? "images/logo.png"
                      : "images/ninja_money.png",
                  appLogo:
                    "true" !== Z.env.NEXT_PUBLIC_IS_NINJA
                      ? "/fruit-game/images/logo.png"
                      : "/fruit-game/images/ninja_money.png",
                  welcomeVideo:
                    "true" === Z.env.NEXT_PUBLIC_IS_NINJA
                      ? "/ninjacomojogar.mp4"
                      : "/comojogar.mp4",
                  favicon: "/favicon.png",
                  bundles: {
                    createMany: {
                      data: [
                        {
                          bonus: new W.Prisma.Decimal(0),
                          value: new W.Prisma.Decimal(25),
                        },
                        {
                          bonus: new W.Prisma.Decimal(25),
                          value: new W.Prisma.Decimal(30),
                        },
                        {
                          bonus: new W.Prisma.Decimal(150),
                          value: new W.Prisma.Decimal(50),
                        },
                        {
                          bonus: new W.Prisma.Decimal(300),
                          value: new W.Prisma.Decimal(100),
                        },
                      ],
                    },
                  },
                  minWithdrawal: new W.Prisma.Decimal(200),
                  ...s,
                },
                include: {
                  bundles: {
                    orderBy: { value: "asc" },
                    select: {
                      bonus: !0,
                      value: !0,
                      createdAt: !0,
                      id: !0,
                      tenantId: !0,
                      updatedAt: !0,
                    },
                  },
                  remarketingBundles: {
                    orderBy: { value: "asc" },
                    select: {
                      bonus: !0,
                      value: !0,
                      createdAt: !0,
                      id: !0,
                      tenantId: !0,
                      updatedAt: !0,
                    },
                  },
                  webhooks: !0,
                  upsell: !0,
                },
              }));
        }
        async function getTenant(s) {
          let o = (function (s) {
              let o = "",
                a = !1;
              if (!s) return null;
              {
                o =
                  s && "req" in s
                    ? s.req.headers.host || ""
                    : (null == s ? void 0 : s.headers.host) || "";
                let c = Z.env.NEXTAUTH_URL;
                if (c) {
                  let s = new URL(c).host;
                  o.includes(s) ? ((o = o.replace(s, "")), (a = !0)) : (o = s);
                }
              }
              let c = o.split(".")[0];
              return { tenantId: c, isSlug: a };
            })(s),
            a = {};
          o &&
            o.tenantId &&
            (o.isSlug
              ? (a.slug = o.tenantId)
              : (a.domain = { contains: o.tenantId }));
          let c = await (null == X
            ? void 0
            : X.tenant.findFirst({
                where: a,
                include: {
                  bundles: {
                    orderBy: { value: "asc" },
                    select: {
                      bonus: !0,
                      value: !0,
                      createdAt: !0,
                      id: !0,
                      tenantId: !0,
                      updatedAt: !0,
                    },
                  },
                  remarketingBundles: {
                    orderBy: { value: "asc" },
                    select: {
                      bonus: !0,
                      value: !0,
                      createdAt: !0,
                      id: !0,
                      tenantId: !0,
                      updatedAt: !0,
                    },
                  },
                  webhooks: !0,
                  upsell: !0,
                },
                orderBy: { createdAt: "asc" },
              }));
          return (
            c || (c = await generateFallbackTenant()),
            await syncEnvFieldsWithTenant(c),
            delete c.primePagApiKey,
            delete c.primePagApiSecret,
            delete c.primePagWebhookSecret,
            c
          );
        }
        var Y = a(32161);
        let ee = console;
        var et = a(30081),
          er = a(72379);
        let Removable = class Removable {
          destroy() {
            this.clearGcTimeout();
          }
          scheduleGc() {
            this.clearGcTimeout(),
              (0, Y.PN)(this.cacheTime) &&
                (this.gcTimeout = setTimeout(() => {
                  this.optionalRemove();
                }, this.cacheTime));
          }
          updateCacheTime(s) {
            this.cacheTime = Math.max(
              this.cacheTime || 0,
              null != s ? s : Y.sk ? 1 / 0 : 3e5
            );
          }
          clearGcTimeout() {
            this.gcTimeout &&
              (clearTimeout(this.gcTimeout), (this.gcTimeout = void 0));
          }
        };
        let Query = class Query extends Removable {
          constructor(s) {
            super(),
              (this.abortSignalConsumed = !1),
              (this.defaultOptions = s.defaultOptions),
              this.setOptions(s.options),
              (this.observers = []),
              (this.cache = s.cache),
              (this.logger = s.logger || ee),
              (this.queryKey = s.queryKey),
              (this.queryHash = s.queryHash),
              (this.initialState =
                s.state ||
                (function (s) {
                  let o =
                      "function" == typeof s.initialData
                        ? s.initialData()
                        : s.initialData,
                    a = void 0 !== o,
                    c = a
                      ? "function" == typeof s.initialDataUpdatedAt
                        ? s.initialDataUpdatedAt()
                        : s.initialDataUpdatedAt
                      : 0;
                  return {
                    data: o,
                    dataUpdateCount: 0,
                    dataUpdatedAt: a ? (null != c ? c : Date.now()) : 0,
                    error: null,
                    errorUpdateCount: 0,
                    errorUpdatedAt: 0,
                    fetchFailureCount: 0,
                    fetchFailureReason: null,
                    fetchMeta: null,
                    isInvalidated: !1,
                    status: a ? "success" : "loading",
                    fetchStatus: "idle",
                  };
                })(this.options)),
              (this.state = this.initialState),
              this.scheduleGc();
          }
          get meta() {
            return this.options.meta;
          }
          setOptions(s) {
            (this.options = { ...this.defaultOptions, ...s }),
              this.updateCacheTime(this.options.cacheTime);
          }
          optionalRemove() {
            this.observers.length ||
              "idle" !== this.state.fetchStatus ||
              this.cache.remove(this);
          }
          setData(s, o) {
            let a = (0, Y.oE)(this.state.data, s, this.options);
            return (
              this.dispatch({
                data: a,
                type: "success",
                dataUpdatedAt: null == o ? void 0 : o.updatedAt,
                manual: null == o ? void 0 : o.manual,
              }),
              a
            );
          }
          setState(s, o) {
            this.dispatch({ type: "setState", state: s, setStateOptions: o });
          }
          cancel(s) {
            var o;
            let a = this.promise;
            return (
              null == (o = this.retryer) || o.cancel(s),
              a ? a.then(Y.ZT).catch(Y.ZT) : Promise.resolve()
            );
          }
          destroy() {
            super.destroy(), this.cancel({ silent: !0 });
          }
          reset() {
            this.destroy(), this.setState(this.initialState);
          }
          isActive() {
            return this.observers.some((s) => !1 !== s.options.enabled);
          }
          isDisabled() {
            return this.getObserversCount() > 0 && !this.isActive();
          }
          isStale() {
            return (
              this.state.isInvalidated ||
              !this.state.dataUpdatedAt ||
              this.observers.some((s) => s.getCurrentResult().isStale)
            );
          }
          isStaleByTime(s = 0) {
            return (
              this.state.isInvalidated ||
              !this.state.dataUpdatedAt ||
              !(0, Y.Kp)(this.state.dataUpdatedAt, s)
            );
          }
          onFocus() {
            var s;
            let o = this.observers.find((s) => s.shouldFetchOnWindowFocus());
            o && o.refetch({ cancelRefetch: !1 }),
              null == (s = this.retryer) || s.continue();
          }
          onOnline() {
            var s;
            let o = this.observers.find((s) => s.shouldFetchOnReconnect());
            o && o.refetch({ cancelRefetch: !1 }),
              null == (s = this.retryer) || s.continue();
          }
          addObserver(s) {
            this.observers.includes(s) ||
              (this.observers.push(s),
              this.clearGcTimeout(),
              this.cache.notify({
                type: "observerAdded",
                query: this,
                observer: s,
              }));
          }
          removeObserver(s) {
            this.observers.includes(s) &&
              ((this.observers = this.observers.filter((o) => o !== s)),
              this.observers.length ||
                (this.retryer &&
                  (this.abortSignalConsumed
                    ? this.retryer.cancel({ revert: !0 })
                    : this.retryer.cancelRetry()),
                this.scheduleGc()),
              this.cache.notify({
                type: "observerRemoved",
                query: this,
                observer: s,
              }));
          }
          getObserversCount() {
            return this.observers.length;
          }
          invalidate() {
            this.state.isInvalidated || this.dispatch({ type: "invalidate" });
          }
          fetch(s, o) {
            var a, c, g, w;
            if ("idle" !== this.state.fetchStatus) {
              if (this.state.dataUpdatedAt && null != o && o.cancelRefetch)
                this.cancel({ silent: !0 });
              else if (this.promise)
                return (
                  null == (g = this.retryer) || g.continueRetry(), this.promise
                );
            }
            if ((s && this.setOptions(s), !this.options.queryFn)) {
              let s = this.observers.find((s) => s.options.queryFn);
              s && this.setOptions(s.options);
            }
            let k = (0, Y.G9)(),
              x = { queryKey: this.queryKey, pageParam: void 0, meta: this.meta },
              addSignalProperty = (s) => {
                Object.defineProperty(s, "signal", {
                  enumerable: !0,
                  get: () => {
                    if (k) return (this.abortSignalConsumed = !0), k.signal;
                  },
                });
              };
            addSignalProperty(x);
            let P = {
              fetchOptions: o,
              options: this.options,
              queryKey: this.queryKey,
              state: this.state,
              fetchFn: () =>
                this.options.queryFn
                  ? ((this.abortSignalConsumed = !1), this.options.queryFn(x))
                  : Promise.reject(
                      "Missing queryFn for queryKey '" +
                        this.options.queryHash +
                        "'"
                    ),
            };
            addSignalProperty(P),
              null == (a = this.options.behavior) || a.onFetch(P),
              (this.revertState = this.state),
              ("idle" === this.state.fetchStatus ||
                this.state.fetchMeta !==
                  (null == (c = P.fetchOptions) ? void 0 : c.meta)) &&
                this.dispatch({
                  type: "fetch",
                  meta: null == (w = P.fetchOptions) ? void 0 : w.meta,
                });
            let onError = (s) => {
              if (
                (((0, er.DV)(s) && s.silent) ||
                  this.dispatch({ type: "error", error: s }),
                !(0, er.DV)(s))
              ) {
                var o, a, c, g;
                null == (o = (a = this.cache.config).onError) ||
                  o.call(a, s, this),
                  null == (c = (g = this.cache.config).onSettled) ||
                    c.call(g, this.state.data, s, this);
              }
              this.isFetchingOptimistic || this.scheduleGc(),
                (this.isFetchingOptimistic = !1);
            };
            return (
              (this.retryer = (0, er.Mz)({
                fn: P.fetchFn,
                abort: null == k ? void 0 : k.abort.bind(k),
                onSuccess: (s) => {
                  var o, a, c, g;
                  if (void 0 === s) {
                    onError(Error(this.queryHash + " data is undefined"));
                    return;
                  }
                  this.setData(s),
                    null == (o = (a = this.cache.config).onSuccess) ||
                      o.call(a, s, this),
                    null == (c = (g = this.cache.config).onSettled) ||
                      c.call(g, s, this.state.error, this),
                    this.isFetchingOptimistic || this.scheduleGc(),
                    (this.isFetchingOptimistic = !1);
                },
                onError,
                onFail: (s, o) => {
                  this.dispatch({ type: "failed", failureCount: s, error: o });
                },
                onPause: () => {
                  this.dispatch({ type: "pause" });
                },
                onContinue: () => {
                  this.dispatch({ type: "continue" });
                },
                retry: P.options.retry,
                retryDelay: P.options.retryDelay,
                networkMode: P.options.networkMode,
              })),
              (this.promise = this.retryer.promise),
              this.promise
            );
          }
          dispatch(s) {
            (this.state = ((o) => {
              var a, c;
              switch (s.type) {
                case "failed":
                  return {
                    ...o,
                    fetchFailureCount: s.failureCount,
                    fetchFailureReason: s.error,
                  };
                case "pause":
                  return { ...o, fetchStatus: "paused" };
                case "continue":
                  return { ...o, fetchStatus: "fetching" };
                case "fetch":
                  return {
                    ...o,
                    fetchFailureCount: 0,
                    fetchFailureReason: null,
                    fetchMeta: null != (a = s.meta) ? a : null,
                    fetchStatus: (0, er.Kw)(this.options.networkMode)
                      ? "fetching"
                      : "paused",
                    ...(!o.dataUpdatedAt && { error: null, status: "loading" }),
                  };
                case "success":
                  return {
                    ...o,
                    data: s.data,
                    dataUpdateCount: o.dataUpdateCount + 1,
                    dataUpdatedAt: null != (c = s.dataUpdatedAt) ? c : Date.now(),
                    error: null,
                    isInvalidated: !1,
                    status: "success",
                    ...(!s.manual && {
                      fetchStatus: "idle",
                      fetchFailureCount: 0,
                      fetchFailureReason: null,
                    }),
                  };
                case "error":
                  let g = s.error;
                  if ((0, er.DV)(g) && g.revert && this.revertState)
                    return { ...this.revertState, fetchStatus: "idle" };
                  return {
                    ...o,
                    error: g,
                    errorUpdateCount: o.errorUpdateCount + 1,
                    errorUpdatedAt: Date.now(),
                    fetchFailureCount: o.fetchFailureCount + 1,
                    fetchFailureReason: g,
                    fetchStatus: "idle",
                    status: "error",
                  };
                case "invalidate":
                  return { ...o, isInvalidated: !0 };
                case "setState":
                  return { ...o, ...s.state };
              }
            })(this.state)),
              et.V.batch(() => {
                this.observers.forEach((o) => {
                  o.onQueryUpdate(s);
                }),
                  this.cache.notify({ query: this, type: "updated", action: s });
              });
          }
        };
        var en = a(33989);
        let QueryCache = class QueryCache extends en.l {
          constructor(s) {
            super(),
              (this.config = s || {}),
              (this.queries = []),
              (this.queriesMap = {});
          }
          build(s, o, a) {
            var c;
            let g = o.queryKey,
              w = null != (c = o.queryHash) ? c : (0, Y.Rm)(g, o),
              k = this.get(w);
            return (
              k ||
                ((k = new Query({
                  cache: this,
                  logger: s.getLogger(),
                  queryKey: g,
                  queryHash: w,
                  options: s.defaultQueryOptions(o),
                  state: a,
                  defaultOptions: s.getQueryDefaults(g),
                })),
                this.add(k)),
              k
            );
          }
          add(s) {
            this.queriesMap[s.queryHash] ||
              ((this.queriesMap[s.queryHash] = s),
              this.queries.push(s),
              this.notify({ type: "added", query: s }));
          }
          remove(s) {
            let o = this.queriesMap[s.queryHash];
            o &&
              (s.destroy(),
              (this.queries = this.queries.filter((o) => o !== s)),
              o === s && delete this.queriesMap[s.queryHash],
              this.notify({ type: "removed", query: s }));
          }
          clear() {
            et.V.batch(() => {
              this.queries.forEach((s) => {
                this.remove(s);
              });
            });
          }
          get(s) {
            return this.queriesMap[s];
          }
          getAll() {
            return this.queries;
          }
          find(s, o) {
            let [a] = (0, Y.I6)(s, o);
            return (
              void 0 === a.exact && (a.exact = !0),
              this.queries.find((s) => (0, Y._x)(a, s))
            );
          }
          findAll(s, o) {
            let [a] = (0, Y.I6)(s, o);
            return Object.keys(a).length > 0
              ? this.queries.filter((s) => (0, Y._x)(a, s))
              : this.queries;
          }
          notify(s) {
            et.V.batch(() => {
              this.listeners.forEach(({ listener: o }) => {
                o(s);
              });
            });
          }
          onFocus() {
            et.V.batch(() => {
              this.queries.forEach((s) => {
                s.onFocus();
              });
            });
          }
          onOnline() {
            et.V.batch(() => {
              this.queries.forEach((s) => {
                s.onOnline();
              });
            });
          }
        };
        let Mutation = class Mutation extends Removable {
          constructor(s) {
            super(),
              (this.defaultOptions = s.defaultOptions),
              (this.mutationId = s.mutationId),
              (this.mutationCache = s.mutationCache),
              (this.logger = s.logger || ee),
              (this.observers = []),
              (this.state = s.state || {
                context: void 0,
                data: void 0,
                error: null,
                failureCount: 0,
                failureReason: null,
                isPaused: !1,
                status: "idle",
                variables: void 0,
              }),
              this.setOptions(s.options),
              this.scheduleGc();
          }
          setOptions(s) {
            (this.options = { ...this.defaultOptions, ...s }),
              this.updateCacheTime(this.options.cacheTime);
          }
          get meta() {
            return this.options.meta;
          }
          setState(s) {
            this.dispatch({ type: "setState", state: s });
          }
          addObserver(s) {
            this.observers.includes(s) ||
              (this.observers.push(s),
              this.clearGcTimeout(),
              this.mutationCache.notify({
                type: "observerAdded",
                mutation: this,
                observer: s,
              }));
          }
          removeObserver(s) {
            (this.observers = this.observers.filter((o) => o !== s)),
              this.scheduleGc(),
              this.mutationCache.notify({
                type: "observerRemoved",
                mutation: this,
                observer: s,
              });
          }
          optionalRemove() {
            this.observers.length ||
              ("loading" === this.state.status
                ? this.scheduleGc()
                : this.mutationCache.remove(this));
          }
          continue() {
            var s, o;
            return null !=
              (s = null == (o = this.retryer) ? void 0 : o.continue())
              ? s
              : this.execute();
          }
          async execute() {
            var s, o, a, c, g, w, k, x, P, A, j, D, z, $, W, G, V, K, X, Z;
            let Y = "loading" === this.state.status;
            try {
              if (!Y) {
                this.dispatch({
                  type: "loading",
                  variables: this.options.variables,
                }),
                  await (null == (P = (A = this.mutationCache.config).onMutate)
                    ? void 0
                    : P.call(A, this.state.variables, this));
                let s = await (null == (j = (D = this.options).onMutate)
                  ? void 0
                  : j.call(D, this.state.variables));
                s !== this.state.context &&
                  this.dispatch({
                    type: "loading",
                    context: s,
                    variables: this.state.variables,
                  });
              }
              let z = await (() => {
                var s;
                return (
                  (this.retryer = (0, er.Mz)({
                    fn: () =>
                      this.options.mutationFn
                        ? this.options.mutationFn(this.state.variables)
                        : Promise.reject("No mutationFn found"),
                    onFail: (s, o) => {
                      this.dispatch({
                        type: "failed",
                        failureCount: s,
                        error: o,
                      });
                    },
                    onPause: () => {
                      this.dispatch({ type: "pause" });
                    },
                    onContinue: () => {
                      this.dispatch({ type: "continue" });
                    },
                    retry: null != (s = this.options.retry) ? s : 0,
                    retryDelay: this.options.retryDelay,
                    networkMode: this.options.networkMode,
                  })),
                  this.retryer.promise
                );
              })();
              return (
                await (null == (s = (o = this.mutationCache.config).onSuccess)
                  ? void 0
                  : s.call(o, z, this.state.variables, this.state.context, this)),
                await (null == (a = (c = this.options).onSuccess)
                  ? void 0
                  : a.call(c, z, this.state.variables, this.state.context)),
                await (null == (g = (w = this.mutationCache.config).onSettled)
                  ? void 0
                  : g.call(
                      w,
                      z,
                      null,
                      this.state.variables,
                      this.state.context,
                      this
                    )),
                await (null == (k = (x = this.options).onSettled)
                  ? void 0
                  : k.call(x, z, null, this.state.variables, this.state.context)),
                this.dispatch({ type: "success", data: z }),
                z
              );
            } catch (s) {
              try {
                throw (
                  (await (null == (z = ($ = this.mutationCache.config).onError)
                    ? void 0
                    : z.call(
                        $,
                        s,
                        this.state.variables,
                        this.state.context,
                        this
                      )),
                  await (null == (W = (G = this.options).onError)
                    ? void 0
                    : W.call(G, s, this.state.variables, this.state.context)),
                  await (null == (V = (K = this.mutationCache.config).onSettled)
                    ? void 0
                    : V.call(
                        K,
                        void 0,
                        s,
                        this.state.variables,
                        this.state.context,
                        this
                      )),
                  await (null == (X = (Z = this.options).onSettled)
                    ? void 0
                    : X.call(
                        Z,
                        void 0,
                        s,
                        this.state.variables,
                        this.state.context
                      )),
                  s)
                );
              } finally {
                this.dispatch({ type: "error", error: s });
              }
            }
          }
          dispatch(s) {
            (this.state = ((o) => {
              switch (s.type) {
                case "failed":
                  return {
                    ...o,
                    failureCount: s.failureCount,
                    failureReason: s.error,
                  };
                case "pause":
                  return { ...o, isPaused: !0 };
                case "continue":
                  return { ...o, isPaused: !1 };
                case "loading":
                  return {
                    ...o,
                    context: s.context,
                    data: void 0,
                    failureCount: 0,
                    failureReason: null,
                    error: null,
                    isPaused: !(0, er.Kw)(this.options.networkMode),
                    status: "loading",
                    variables: s.variables,
                  };
                case "success":
                  return {
                    ...o,
                    data: s.data,
                    failureCount: 0,
                    failureReason: null,
                    error: null,
                    status: "success",
                    isPaused: !1,
                  };
                case "error":
                  return {
                    ...o,
                    data: void 0,
                    error: s.error,
                    failureCount: o.failureCount + 1,
                    failureReason: s.error,
                    isPaused: !1,
                    status: "error",
                  };
                case "setState":
                  return { ...o, ...s.state };
              }
            })(this.state)),
              et.V.batch(() => {
                this.observers.forEach((o) => {
                  o.onMutationUpdate(s);
                }),
                  this.mutationCache.notify({
                    mutation: this,
                    type: "updated",
                    action: s,
                  });
              });
          }
        };
        let MutationCache = class MutationCache extends en.l {
          constructor(s) {
            super(),
              (this.config = s || {}),
              (this.mutations = []),
              (this.mutationId = 0);
          }
          build(s, o, a) {
            let c = new Mutation({
              mutationCache: this,
              logger: s.getLogger(),
              mutationId: ++this.mutationId,
              options: s.defaultMutationOptions(o),
              state: a,
              defaultOptions: o.mutationKey
                ? s.getMutationDefaults(o.mutationKey)
                : void 0,
            });
            return this.add(c), c;
          }
          add(s) {
            this.mutations.push(s), this.notify({ type: "added", mutation: s });
          }
          remove(s) {
            (this.mutations = this.mutations.filter((o) => o !== s)),
              this.notify({ type: "removed", mutation: s });
          }
          clear() {
            et.V.batch(() => {
              this.mutations.forEach((s) => {
                this.remove(s);
              });
            });
          }
          getAll() {
            return this.mutations;
          }
          find(s) {
            return (
              void 0 === s.exact && (s.exact = !0),
              this.mutations.find((o) => (0, Y.X7)(s, o))
            );
          }
          findAll(s) {
            return this.mutations.filter((o) => (0, Y.X7)(s, o));
          }
          notify(s) {
            et.V.batch(() => {
              this.listeners.forEach(({ listener: o }) => {
                o(s);
              });
            });
          }
          resumePausedMutations() {
            var s;
            return (
              (this.resuming = (
                null != (s = this.resuming) ? s : Promise.resolve()
              )
                .then(() => {
                  let s = this.mutations.filter((s) => s.state.isPaused);
                  return et.V.batch(() =>
                    s.reduce(
                      (s, o) => s.then(() => o.continue().catch(Y.ZT)),
                      Promise.resolve()
                    )
                  );
                })
                .then(() => {
                  this.resuming = void 0;
                })),
              this.resuming
            );
          }
        };
        var ei = a(15761),
          es = a(96474);
        function getNextPageParam(s, o) {
          return null == s.getNextPageParam
            ? void 0
            : s.getNextPageParam(o[o.length - 1], o);
        }
        let QueryClient = class QueryClient {
          constructor(s = {}) {
            (this.queryCache = s.queryCache || new QueryCache()),
              (this.mutationCache = s.mutationCache || new MutationCache()),
              (this.logger = s.logger || ee),
              (this.defaultOptions = s.defaultOptions || {}),
              (this.queryDefaults = []),
              (this.mutationDefaults = []),
              (this.mountCount = 0);
          }
          mount() {
            this.mountCount++,
              1 === this.mountCount &&
                ((this.unsubscribeFocus = ei.j.subscribe(() => {
                  ei.j.isFocused() &&
                    (this.resumePausedMutations(), this.queryCache.onFocus());
                })),
                (this.unsubscribeOnline = es.N.subscribe(() => {
                  es.N.isOnline() &&
                    (this.resumePausedMutations(), this.queryCache.onOnline());
                })));
          }
          unmount() {
            var s, o;
            this.mountCount--,
              0 === this.mountCount &&
                (null == (s = this.unsubscribeFocus) || s.call(this),
                (this.unsubscribeFocus = void 0),
                null == (o = this.unsubscribeOnline) || o.call(this),
                (this.unsubscribeOnline = void 0));
          }
          isFetching(s, o) {
            let [a] = (0, Y.I6)(s, o);
            return (
              (a.fetchStatus = "fetching"), this.queryCache.findAll(a).length
            );
          }
          isMutating(s) {
            return this.mutationCache.findAll({ ...s, fetching: !0 }).length;
          }
          getQueryData(s, o) {
            var a;
            return null == (a = this.queryCache.find(s, o))
              ? void 0
              : a.state.data;
          }
          ensureQueryData(s, o, a) {
            let c = (0, Y._v)(s, o, a),
              g = this.getQueryData(c.queryKey);
            return g ? Promise.resolve(g) : this.fetchQuery(c);
          }
          getQueriesData(s) {
            return this.getQueryCache()
              .findAll(s)
              .map(({ queryKey: s, state: o }) => {
                let a = o.data;
                return [s, a];
              });
          }
          setQueryData(s, o, a) {
            let c = this.queryCache.find(s),
              g = null == c ? void 0 : c.state.data,
              w = (0, Y.SE)(o, g);
            if (void 0 === w) return;
            let k = (0, Y._v)(s),
              x = this.defaultQueryOptions(k);
            return this.queryCache
              .build(this, x)
              .setData(w, { ...a, manual: !0 });
          }
          setQueriesData(s, o, a) {
            return et.V.batch(() =>
              this.getQueryCache()
                .findAll(s)
                .map(({ queryKey: s }) => [s, this.setQueryData(s, o, a)])
            );
          }
          getQueryState(s, o) {
            var a;
            return null == (a = this.queryCache.find(s, o)) ? void 0 : a.state;
          }
          removeQueries(s, o) {
            let [a] = (0, Y.I6)(s, o),
              c = this.queryCache;
            et.V.batch(() => {
              c.findAll(a).forEach((s) => {
                c.remove(s);
              });
            });
          }
          resetQueries(s, o, a) {
            let [c, g] = (0, Y.I6)(s, o, a),
              w = this.queryCache,
              k = { type: "active", ...c };
            return et.V.batch(
              () => (
                w.findAll(c).forEach((s) => {
                  s.reset();
                }),
                this.refetchQueries(k, g)
              )
            );
          }
          cancelQueries(s, o, a) {
            let [c, g = {}] = (0, Y.I6)(s, o, a);
            void 0 === g.revert && (g.revert = !0);
            let w = et.V.batch(() =>
              this.queryCache.findAll(c).map((s) => s.cancel(g))
            );
            return Promise.all(w).then(Y.ZT).catch(Y.ZT);
          }
          invalidateQueries(s, o, a) {
            let [c, g] = (0, Y.I6)(s, o, a);
            return et.V.batch(() => {
              var s, o;
              if (
                (this.queryCache.findAll(c).forEach((s) => {
                  s.invalidate();
                }),
                "none" === c.refetchType)
              )
                return Promise.resolve();
              let a = {
                ...c,
                type:
                  null != (s = null != (o = c.refetchType) ? o : c.type)
                    ? s
                    : "active",
              };
              return this.refetchQueries(a, g);
            });
          }
          refetchQueries(s, o, a) {
            let [c, g] = (0, Y.I6)(s, o, a),
              w = et.V.batch(() =>
                this.queryCache
                  .findAll(c)
                  .filter((s) => !s.isDisabled())
                  .map((s) => {
                    var o;
                    return s.fetch(void 0, {
                      ...g,
                      cancelRefetch:
                        null == (o = null == g ? void 0 : g.cancelRefetch) || o,
                      meta: { refetchPage: c.refetchPage },
                    });
                  })
              ),
              k = Promise.all(w).then(Y.ZT);
            return (null != g && g.throwOnError) || (k = k.catch(Y.ZT)), k;
          }
          fetchQuery(s, o, a) {
            let c = (0, Y._v)(s, o, a),
              g = this.defaultQueryOptions(c);
            void 0 === g.retry && (g.retry = !1);
            let w = this.queryCache.build(this, g);
            return w.isStaleByTime(g.staleTime)
              ? w.fetch(g)
              : Promise.resolve(w.state.data);
          }
          prefetchQuery(s, o, a) {
            return this.fetchQuery(s, o, a).then(Y.ZT).catch(Y.ZT);
          }
          fetchInfiniteQuery(s, o, a) {
            let c = (0, Y._v)(s, o, a);
            return (
              (c.behavior = {
                onFetch: (s) => {
                  s.fetchFn = () => {
                    var o, a, c, g, w, k, x;
                    let P;
                    let A =
                        null == (o = s.fetchOptions)
                          ? void 0
                          : null == (a = o.meta)
                          ? void 0
                          : a.refetchPage,
                      j =
                        null == (c = s.fetchOptions)
                          ? void 0
                          : null == (g = c.meta)
                          ? void 0
                          : g.fetchMore,
                      D = null == j ? void 0 : j.pageParam,
                      z = (null == j ? void 0 : j.direction) === "forward",
                      $ = (null == j ? void 0 : j.direction) === "backward",
                      W = (null == (w = s.state.data) ? void 0 : w.pages) || [],
                      G =
                        (null == (k = s.state.data) ? void 0 : k.pageParams) ||
                        [],
                      V = G,
                      K = !1,
                      addSignalProperty = (o) => {
                        Object.defineProperty(o, "signal", {
                          enumerable: !0,
                          get: () => {
                            var o, a;
                            return (
                              null != (o = s.signal) && o.aborted
                                ? (K = !0)
                                : null == (a = s.signal) ||
                                  a.addEventListener("abort", () => {
                                    K = !0;
                                  }),
                              s.signal
                            );
                          },
                        });
                      },
                      X =
                        s.options.queryFn ||
                        (() =>
                          Promise.reject(
                            "Missing queryFn for queryKey '" +
                              s.options.queryHash +
                              "'"
                          )),
                      buildNewPages = (s, o, a, c) => (
                        (V = c ? [o, ...V] : [...V, o]), c ? [a, ...s] : [...s, a]
                      ),
                      fetchPage = (o, a, c, g) => {
                        if (K) return Promise.reject("Cancelled");
                        if (void 0 === c && !a && o.length)
                          return Promise.resolve(o);
                        let w = {
                          queryKey: s.queryKey,
                          pageParam: c,
                          meta: s.options.meta,
                        };
                        addSignalProperty(w);
                        let k = X(w),
                          x = Promise.resolve(k).then((s) =>
                            buildNewPages(o, c, s, g)
                          );
                        return x;
                      };
                    if (W.length) {
                      if (z) {
                        let o = void 0 !== D,
                          a = o ? D : getNextPageParam(s.options, W);
                        P = fetchPage(W, o, a);
                      } else if ($) {
                        let o = void 0 !== D,
                          a = o
                            ? D
                            : null == (x = s.options).getPreviousPageParam
                            ? void 0
                            : x.getPreviousPageParam(W[0], W);
                        P = fetchPage(W, o, a, !0);
                      } else {
                        V = [];
                        let o = void 0 === s.options.getNextPageParam,
                          a = !A || !W[0] || A(W[0], 0, W);
                        P = a
                          ? fetchPage([], o, G[0])
                          : Promise.resolve(buildNewPages([], G[0], W[0]));
                        for (let a = 1; a < W.length; a++)
                          P = P.then((c) => {
                            let g = !A || !W[a] || A(W[a], a, W);
                            if (g) {
                              let g = o ? G[a] : getNextPageParam(s.options, c);
                              return fetchPage(c, o, g);
                            }
                            return Promise.resolve(buildNewPages(c, G[a], W[a]));
                          });
                      }
                    } else P = fetchPage([]);
                    let Z = P.then((s) => ({ pages: s, pageParams: V }));
                    return Z;
                  };
                },
              }),
              this.fetchQuery(c)
            );
          }
          prefetchInfiniteQuery(s, o, a) {
            return this.fetchInfiniteQuery(s, o, a).then(Y.ZT).catch(Y.ZT);
          }
          resumePausedMutations() {
            return this.mutationCache.resumePausedMutations();
          }
          getQueryCache() {
            return this.queryCache;
          }
          getMutationCache() {
            return this.mutationCache;
          }
          getLogger() {
            return this.logger;
          }
          getDefaultOptions() {
            return this.defaultOptions;
          }
          setDefaultOptions(s) {
            this.defaultOptions = s;
          }
          setQueryDefaults(s, o) {
            let a = this.queryDefaults.find(
              (o) => (0, Y.yF)(s) === (0, Y.yF)(o.queryKey)
            );
            a
              ? (a.defaultOptions = o)
              : this.queryDefaults.push({ queryKey: s, defaultOptions: o });
          }
          getQueryDefaults(s) {
            if (!s) return;
            let o = this.queryDefaults.find((o) => (0, Y.to)(s, o.queryKey));
            return null == o ? void 0 : o.defaultOptions;
          }
          setMutationDefaults(s, o) {
            let a = this.mutationDefaults.find(
              (o) => (0, Y.yF)(s) === (0, Y.yF)(o.mutationKey)
            );
            a
              ? (a.defaultOptions = o)
              : this.mutationDefaults.push({ mutationKey: s, defaultOptions: o });
          }
          getMutationDefaults(s) {
            if (!s) return;
            let o = this.mutationDefaults.find((o) =>
              (0, Y.to)(s, o.mutationKey)
            );
            return null == o ? void 0 : o.defaultOptions;
          }
          defaultQueryOptions(s) {
            if (null != s && s._defaulted) return s;
            let o = {
              ...this.defaultOptions.queries,
              ...this.getQueryDefaults(null == s ? void 0 : s.queryKey),
              ...s,
              _defaulted: !0,
            };
            return (
              !o.queryHash &&
                o.queryKey &&
                (o.queryHash = (0, Y.Rm)(o.queryKey, o)),
              void 0 === o.refetchOnReconnect &&
                (o.refetchOnReconnect = "always" !== o.networkMode),
              void 0 === o.useErrorBoundary &&
                (o.useErrorBoundary = !!o.suspense),
              o
            );
          }
          defaultMutationOptions(s) {
            return null != s && s._defaulted
              ? s
              : {
                  ...this.defaultOptions.mutations,
                  ...this.getMutationDefaults(null == s ? void 0 : s.mutationKey),
                  ...s,
                  _defaulted: !0,
                };
          }
          clear() {
            this.queryCache.clear(), this.mutationCache.clear();
          }
        };
        var eo = a(85945),
          ea = a(4298),
          eu = a.n(ea),
          el = a(67294),
          ec = a(91444),
          eh = a(12687),
          ed = a(53878),
          ef = a(44833),
          partials_Providers = (s) => {
            let { children: o } = s,
              [a] = (0, el.useState)(() => new QueryClient()),
              c = (0, ef.S)();
            return (0, w.jsx)(eh.P, {
              children: (0, w.jsx)(eo.aH, {
                client: a,
                children: (0, w.jsxs)(ed.O, {
                  children: [
                    o,
                    (0, w.jsx)("div", {
                      id: "sweetalert2-toast-container",
                      className: "absolute",
                    }),
                    (0, w.jsx)(ec.Ix, { limit: 3 }),
                    (null == c ? void 0 : c.tawkTo) &&
                      (0, w.jsx)(eu(), {
                        type: "text/javascript",
                        id: "tawkto-script",
                        dangerouslySetInnerHTML: {
                          __html:
                            '\n              var Tawk_API=Tawk_API||{}, Tawk_LoadStart=new Date();\n            (function(){\n            var s1=document.createElement("script"),s0=document.getElementsByTagName("script")[0];\n            s1.async=true;\n            s1.src="'.concat(
                              c.tawkTo,
                              "\";\n            s1.charset='UTF-8';\n            s1.setAttribute('crossorigin','*');\n            s0.parentNode.insertBefore(s1,s0);\n            })();\n            "
                            ),
                        },
                      }),
                  ],
                }),
              }),
            });
          };
        a(32352);
        var ep =
          (((c = function (s) {
            let {
              Component: o,
              pageProps: { session: a, ...c },
            } = s;
            return (0, w.jsxs)(z.SessionProvider, {
              session: a,
              children: [
                (0, w.jsx)(D(), {
                  id: "f9c9d252a43dca23",
                  dynamic: [
                    x().style.fontFamily,
                    A().style.fontFamily,
                    x().style.fontFamily,
                  ],
                  children: ":root{--font-grotesk:"
                    .concat(A().style.fontFamily, ";--font-space-mono:")
                    .concat(x().style.fontFamily, "}"),
                }),
                (0, w.jsx)($.z, {
                  value: c.tenant,
                  children: (0, w.jsx)("main", {
                    className:
                      D().dynamic([
                        [
                          "f9c9d252a43dca23",
                          [
                            x().style.fontFamily,
                            A().style.fontFamily,
                            x().style.fontFamily,
                          ],
                        ],
                      ]) +
                      " " +
                      "".concat(x().className),
                    children: (0, w.jsx)(partials_Providers, {
                      children: (0, w.jsx)(o, {
                        ...c,
                        className:
                          D().dynamic([
                            [
                              "f9c9d252a43dca23",
                              [
                                x().style.fontFamily,
                                A().style.fontFamily,
                                x().style.fontFamily,
                              ],
                            ],
                          ]) +
                          " " +
                          ((c && null != c.className && c.className) || ""),
                      }),
                    }),
                  }),
                }),
              ],
            });
          }).getInitialProps = async (s) => {
            let o,
              { Component: a, ctx: c } = s,
              g = {};
            return (
              c.req && (o = await getTenant(c)),
              a.getInitialProps && (g = await a.getInitialProps(c)),
              { pageProps: { ...g, tenant: o || null } }
            );
          }),
          c);
      },
      91479: function () {},
      27967: function () {},
      32352: function () {},
      53786: function (s) {
        s.exports = {
          style: {
            fontFamily: "'__Space_Mono_47616e', '__Space_Mono_Fallback_47616e'",
            fontWeight: 400,
            fontStyle: "normal",
          },
          className: "__className_47616e",
        };
      },
      47911: function (s) {
        s.exports = {
          style: {
            fontFamily: "'__grotesk_ca9e5f', '__grotesk_Fallback_ca9e5f'",
          },
          className: "__className_ca9e5f",
          variable: "__variable_ca9e5f",
        };
      },
      5152: function (s, o, a) {
        s.exports = a(1342);
      },
      11163: function (s, o, a) {
        s.exports = a(59974);
      },
      4298: function (s, o, a) {
        s.exports = a(85354);
      },
      34155: function (s) {
        var o,
          a,
          c,
          g = (s.exports = {});
        function defaultSetTimout() {
          throw Error("setTimeout has not been defined");
        }
        function defaultClearTimeout() {
          throw Error("clearTimeout has not been defined");
        }
        function runTimeout(s) {
          if (o === setTimeout) return setTimeout(s, 0);
          if ((o === defaultSetTimout || !o) && setTimeout)
            return (o = setTimeout), setTimeout(s, 0);
          try {
            return o(s, 0);
          } catch (a) {
            try {
              return o.call(null, s, 0);
            } catch (a) {
              return o.call(this, s, 0);
            }
          }
        }
        !(function () {
          try {
            o = "function" == typeof setTimeout ? setTimeout : defaultSetTimout;
          } catch (s) {
            o = defaultSetTimout;
          }
          try {
            a =
              "function" == typeof clearTimeout
                ? clearTimeout
                : defaultClearTimeout;
          } catch (s) {
            a = defaultClearTimeout;
          }
        })();
        var w = [],
          k = !1,
          x = -1;
        function cleanUpNextTick() {
          k &&
            c &&
            ((k = !1),
            c.length ? (w = c.concat(w)) : (x = -1),
            w.length && drainQueue());
        }
        function drainQueue() {
          if (!k) {
            var s = runTimeout(cleanUpNextTick);
            k = !0;
            for (var o = w.length; o; ) {
              for (c = w, w = []; ++x < o; ) c && c[x].run();
              (x = -1), (o = w.length);
            }
            (c = null),
              (k = !1),
              (function (s) {
                if (a === clearTimeout) return clearTimeout(s);
                if ((a === defaultClearTimeout || !a) && clearTimeout)
                  return (a = clearTimeout), clearTimeout(s);
                try {
                  a(s);
                } catch (o) {
                  try {
                    return a.call(null, s);
                  } catch (o) {
                    return a.call(this, s);
                  }
                }
              })(s);
          }
        }
        function Item(s, o) {
          (this.fun = s), (this.array = o);
        }
        function noop() {}
        (g.nextTick = function (s) {
          var o = Array(arguments.length - 1);
          if (arguments.length > 1)
            for (var a = 1; a < arguments.length; a++) o[a - 1] = arguments[a];
          w.push(new Item(s, o)), 1 !== w.length || k || runTimeout(drainQueue);
        }),
          (Item.prototype.run = function () {
            this.fun.apply(null, this.array);
          }),
          (g.title = "browser"),
          (g.browser = !0),
          (g.env = {}),
          (g.argv = []),
          (g.version = ""),
          (g.versions = {}),
          (g.on = noop),
          (g.addListener = noop),
          (g.once = noop),
          (g.off = noop),
          (g.removeListener = noop),
          (g.removeAllListeners = noop),
          (g.emit = noop),
          (g.prependListener = noop),
          (g.prependOnceListener = noop),
          (g.listeners = function (s) {
            return [];
          }),
          (g.binding = function (s) {
            throw Error("process.binding is not supported");
          }),
          (g.cwd = function () {
            return "/";
          }),
          (g.chdir = function (s) {
            throw Error("process.chdir is not supported");
          }),
          (g.umask = function () {
            return 0;
          });
      },
      86606: function (s) {
        /*!
         * Pusher JavaScript Library v8.3.0
         * https://pusher.com/
         *
         * Copyright 2020, Pusher
         * Released under the MIT licence.
         */ window,
          (s.exports = (function (s) {
            var o = {};
            function __nested_webpack_require_669__(a) {
              if (o[a]) return o[a].exports;
              var c = (o[a] = { i: a, l: !1, exports: {} });
              return (
                s[a].call(
                  c.exports,
                  c,
                  c.exports,
                  __nested_webpack_require_669__
                ),
                (c.l = !0),
                c.exports
              );
            }
            return (
              (__nested_webpack_require_669__.m = s),
              (__nested_webpack_require_669__.c = o),
              (__nested_webpack_require_669__.d = function (s, o, a) {
                __nested_webpack_require_669__.o(s, o) ||
                  Object.defineProperty(s, o, { enumerable: !0, get: a });
              }),
              (__nested_webpack_require_669__.r = function (s) {
                "undefined" != typeof Symbol &&
                  Symbol.toStringTag &&
                  Object.defineProperty(s, Symbol.toStringTag, {
                    value: "Module",
                  }),
                  Object.defineProperty(s, "__esModule", { value: !0 });
              }),
              (__nested_webpack_require_669__.t = function (s, o) {
                if (
                  (1 & o && (s = __nested_webpack_require_669__(s)),
                  8 & o || (4 & o && "object" == typeof s && s && s.__esModule))
                )
                  return s;
                var a = Object.create(null);
                if (
                  (__nested_webpack_require_669__.r(a),
                  Object.defineProperty(a, "default", {
                    enumerable: !0,
                    value: s,
                  }),
                  2 & o && "string" != typeof s)
                )
                  for (var c in s)
                    __nested_webpack_require_669__.d(
                      a,
                      c,
                      function (o) {
                        return s[o];
                      }.bind(null, c)
                    );
                return a;
              }),
              (__nested_webpack_require_669__.n = function (s) {
                var o =
                  s && s.__esModule
                    ? function () {
                        return s.default;
                      }
                    : function () {
                        return s;
                      };
                return __nested_webpack_require_669__.d(o, "a", o), o;
              }),
              (__nested_webpack_require_669__.o = function (s, o) {
                return Object.prototype.hasOwnProperty.call(s, o);
              }),
              (__nested_webpack_require_669__.p = ""),
              __nested_webpack_require_669__(
                (__nested_webpack_require_669__.s = 2)
              )
            );
          })([
            function (s, o, a) {
              "use strict";
              var c,
                g =
                  (this && this.__extends) ||
                  ((c = function (s, o) {
                    return (c =
                      Object.setPrototypeOf ||
                      ({ __proto__: [] } instanceof Array &&
                        function (s, o) {
                          s.__proto__ = o;
                        }) ||
                      function (s, o) {
                        for (var a in o) o.hasOwnProperty(a) && (s[a] = o[a]);
                      })(s, o);
                  }),
                  function (s, o) {
                    function __() {
                      this.constructor = s;
                    }
                    c(s, o),
                      (s.prototype =
                        null === o
                          ? Object.create(o)
                          : ((__.prototype = o.prototype), new __()));
                  });
              Object.defineProperty(o, "__esModule", { value: !0 });
              var w = (function () {
                function Coder(s) {
                  void 0 === s && (s = "="), (this._paddingCharacter = s);
                }
                return (
                  (Coder.prototype.encodedLength = function (s) {
                    return this._paddingCharacter
                      ? (((s + 2) / 3) * 4) | 0
                      : ((8 * s + 5) / 6) | 0;
                  }),
                  (Coder.prototype.encode = function (s) {
                    for (var o = "", a = 0; a < s.length - 2; a += 3) {
                      var c = (s[a] << 16) | (s[a + 1] << 8) | s[a + 2];
                      o +=
                        this._encodeByte((c >>> 18) & 63) +
                        this._encodeByte((c >>> 12) & 63) +
                        this._encodeByte((c >>> 6) & 63) +
                        this._encodeByte((c >>> 0) & 63);
                    }
                    var g = s.length - a;
                    if (g > 0) {
                      var c = (s[a] << 16) | (2 === g ? s[a + 1] << 8 : 0);
                      (o +=
                        this._encodeByte((c >>> 18) & 63) +
                        this._encodeByte((c >>> 12) & 63)),
                        2 === g
                          ? (o += this._encodeByte((c >>> 6) & 63))
                          : (o += this._paddingCharacter || ""),
                        (o += this._paddingCharacter || "");
                    }
                    return o;
                  }),
                  (Coder.prototype.maxDecodedLength = function (s) {
                    return this._paddingCharacter
                      ? ((s / 4) * 3) | 0
                      : ((6 * s + 7) / 8) | 0;
                  }),
                  (Coder.prototype.decodedLength = function (s) {
                    return this.maxDecodedLength(
                      s.length - this._getPaddingLength(s)
                    );
                  }),
                  (Coder.prototype.decode = function (s) {
                    if (0 === s.length) return new Uint8Array(0);
                    for (
                      var o = this._getPaddingLength(s),
                        a = s.length - o,
                        c = new Uint8Array(this.maxDecodedLength(a)),
                        g = 0,
                        w = 0,
                        k = 0,
                        x = 0,
                        P = 0,
                        A = 0,
                        j = 0;
                      w < a - 4;
                      w += 4
                    )
                      (x = this._decodeChar(s.charCodeAt(w + 0))),
                        (P = this._decodeChar(s.charCodeAt(w + 1))),
                        (A = this._decodeChar(s.charCodeAt(w + 2))),
                        (j = this._decodeChar(s.charCodeAt(w + 3))),
                        (c[g++] = (x << 2) | (P >>> 4)),
                        (c[g++] = (P << 4) | (A >>> 2)),
                        (c[g++] = (A << 6) | j),
                        (k |= 256 & x),
                        (k |= 256 & P),
                        (k |= 256 & A),
                        (k |= 256 & j);
                    if (
                      (w < a - 1 &&
                        ((x = this._decodeChar(s.charCodeAt(w))),
                        (P = this._decodeChar(s.charCodeAt(w + 1))),
                        (c[g++] = (x << 2) | (P >>> 4)),
                        (k |= 256 & x),
                        (k |= 256 & P)),
                      w < a - 2 &&
                        ((A = this._decodeChar(s.charCodeAt(w + 2))),
                        (c[g++] = (P << 4) | (A >>> 2)),
                        (k |= 256 & A)),
                      w < a - 3 &&
                        ((j = this._decodeChar(s.charCodeAt(w + 3))),
                        (c[g++] = (A << 6) | j),
                        (k |= 256 & j)),
                      0 !== k)
                    )
                      throw Error(
                        "Base64Coder: incorrect characters for decoding"
                      );
                    return c;
                  }),
                  (Coder.prototype._encodeByte = function (s) {
                    var o = s;
                    return String.fromCharCode(
                      (o +=
                        65 +
                        (((25 - s) >>> 8) & 6) +
                        (((51 - s) >>> 8) & -75) +
                        (((61 - s) >>> 8) & -15) +
                        (((62 - s) >>> 8) & 3))
                    );
                  }),
                  (Coder.prototype._decodeChar = function (s) {
                    return (
                      256 +
                      ((((42 - s) & (s - 44)) >>> 8) & (-256 + s - 43 + 62)) +
                      ((((46 - s) & (s - 48)) >>> 8) & (-256 + s - 47 + 63)) +
                      ((((47 - s) & (s - 58)) >>> 8) & (-256 + s - 48 + 52)) +
                      ((((64 - s) & (s - 91)) >>> 8) & (-256 + s - 65 + 0)) +
                      ((((96 - s) & (s - 123)) >>> 8) & (-256 + s - 97 + 26))
                    );
                  }),
                  (Coder.prototype._getPaddingLength = function (s) {
                    var o = 0;
                    if (this._paddingCharacter) {
                      for (
                        var a = s.length - 1;
                        a >= 0 && s[a] === this._paddingCharacter;
                        a--
                      )
                        o++;
                      if (s.length < 4 || o > 2)
                        throw Error("Base64Coder: incorrect padding");
                    }
                    return o;
                  }),
                  Coder
                );
              })();
              o.Coder = w;
              var k = new w();
              (o.encode = function (s) {
                return k.encode(s);
              }),
                (o.decode = function (s) {
                  return k.decode(s);
                });
              var x = (function (s) {
                function URLSafeCoder() {
                  return (null !== s && s.apply(this, arguments)) || this;
                }
                return (
                  g(URLSafeCoder, s),
                  (URLSafeCoder.prototype._encodeByte = function (s) {
                    var o = s;
                    return String.fromCharCode(
                      (o +=
                        65 +
                        (((25 - s) >>> 8) & 6) +
                        (((51 - s) >>> 8) & -75) +
                        (((61 - s) >>> 8) & -13) +
                        (((62 - s) >>> 8) & 49))
                    );
                  }),
                  (URLSafeCoder.prototype._decodeChar = function (s) {
                    return (
                      256 +
                      ((((44 - s) & (s - 46)) >>> 8) & (-256 + s - 45 + 62)) +
                      ((((94 - s) & (s - 96)) >>> 8) & (-256 + s - 95 + 63)) +
                      ((((47 - s) & (s - 58)) >>> 8) & (-256 + s - 48 + 52)) +
                      ((((64 - s) & (s - 91)) >>> 8) & (-256 + s - 65 + 0)) +
                      ((((96 - s) & (s - 123)) >>> 8) & (-256 + s - 97 + 26))
                    );
                  }),
                  URLSafeCoder
                );
              })(w);
              o.URLSafeCoder = x;
              var P = new x();
              (o.encodeURLSafe = function (s) {
                return P.encode(s);
              }),
                (o.decodeURLSafe = function (s) {
                  return P.decode(s);
                }),
                (o.encodedLength = function (s) {
                  return k.encodedLength(s);
                }),
                (o.maxDecodedLength = function (s) {
                  return k.maxDecodedLength(s);
                }),
                (o.decodedLength = function (s) {
                  return k.decodedLength(s);
                });
            },
            function (s, o, a) {
              "use strict";
              Object.defineProperty(o, "__esModule", { value: !0 });
              var c = "utf8: invalid string",
                g = "utf8: invalid source encoding";
              function encodedLength(s) {
                for (var o = 0, a = 0; a < s.length; a++) {
                  var g = s.charCodeAt(a);
                  if (g < 128) o += 1;
                  else if (g < 2048) o += 2;
                  else if (g < 55296) o += 3;
                  else if (g <= 57343) {
                    if (a >= s.length - 1) throw Error(c);
                    a++, (o += 4);
                  } else throw Error(c);
                }
                return o;
              }
              (o.encode = function (s) {
                for (
                  var o = new Uint8Array(encodedLength(s)), a = 0, c = 0;
                  c < s.length;
                  c++
                ) {
                  var g = s.charCodeAt(c);
                  g < 128
                    ? (o[a++] = g)
                    : (g < 2048
                        ? (o[a++] = 192 | (g >> 6))
                        : (g < 55296
                            ? (o[a++] = 224 | (g >> 12))
                            : (c++,
                              (g =
                                (((1023 & g) << 10) | (1023 & s.charCodeAt(c))) +
                                65536),
                              (o[a++] = 240 | (g >> 18)),
                              (o[a++] = 128 | ((g >> 12) & 63))),
                          (o[a++] = 128 | ((g >> 6) & 63))),
                      (o[a++] = 128 | (63 & g)));
                }
                return o;
              }),
                (o.encodedLength = encodedLength),
                (o.decode = function (s) {
                  for (var o = [], a = 0; a < s.length; a++) {
                    var c = s[a];
                    if (128 & c) {
                      var w = void 0;
                      if (c < 224) {
                        if (a >= s.length) throw Error(g);
                        var k = s[++a];
                        if ((192 & k) != 128) throw Error(g);
                        (c = ((31 & c) << 6) | (63 & k)), (w = 128);
                      } else if (c < 240) {
                        if (a >= s.length - 1) throw Error(g);
                        var k = s[++a],
                          x = s[++a];
                        if ((192 & k) != 128 || (192 & x) != 128) throw Error(g);
                        (c = ((15 & c) << 12) | ((63 & k) << 6) | (63 & x)),
                          (w = 2048);
                      } else if (c < 248) {
                        if (a >= s.length - 2) throw Error(g);
                        var k = s[++a],
                          x = s[++a],
                          P = s[++a];
                        if (
                          (192 & k) != 128 ||
                          (192 & x) != 128 ||
                          (192 & P) != 128
                        )
                          throw Error(g);
                        (c =
                          ((15 & c) << 18) |
                          ((63 & k) << 12) |
                          ((63 & x) << 6) |
                          (63 & P)),
                          (w = 65536);
                      } else throw Error(g);
                      if (c < w || (c >= 55296 && c <= 57343)) throw Error(g);
                      if (c >= 65536) {
                        if (c > 1114111) throw Error(g);
                        (c -= 65536),
                          o.push(String.fromCharCode(55296 | (c >> 10))),
                          (c = 56320 | (1023 & c));
                      }
                    }
                    o.push(String.fromCharCode(c));
                  }
                  return o.join("");
                });
            },
            function (s, o, a) {
              s.exports = a(3).default;
            },
            function (s, o, a) {
              "use strict";
              a.r(o);
              let ScriptReceiverFactory = class ScriptReceiverFactory {
                constructor(s, o) {
                  (this.lastId = 0), (this.prefix = s), (this.name = o);
                }
                create(s) {
                  this.lastId++;
                  var o = this.lastId,
                    a = this.prefix + o,
                    c = this.name + "[" + o + "]",
                    g = !1,
                    callbackWrapper = function () {
                      g || (s.apply(null, arguments), (g = !0));
                    };
                  return (
                    (this[o] = callbackWrapper),
                    { number: o, id: a, name: c, callback: callbackWrapper }
                  );
                }
                remove(s) {
                  delete this[s.number];
                }
              };
              var c,
                g,
                w,
                k,
                x,
                P,
                A = new ScriptReceiverFactory(
                  "_pusher_script_",
                  "Pusher.ScriptReceivers"
                ),
                j = {
                  VERSION: "8.3.0",
                  PROTOCOL: 7,
                  wsPort: 80,
                  wssPort: 443,
                  wsPath: "",
                  httpHost: "sockjs.pusher.com",
                  httpPort: 80,
                  httpsPort: 443,
                  httpPath: "/pusher",
                  stats_host: "stats.pusher.com",
                  authEndpoint: "/pusher/auth",
                  authTransport: "ajax",
                  activityTimeout: 12e4,
                  pongTimeout: 3e4,
                  unavailableTimeout: 1e4,
                  userAuthentication: {
                    endpoint: "/pusher/user-auth",
                    transport: "ajax",
                  },
                  channelAuthorization: {
                    endpoint: "/pusher/auth",
                    transport: "ajax",
                  },
                  cdn_http: "http://js.pusher.com",
                  cdn_https: "https://js.pusher.com",
                  dependency_suffix: "",
                },
                D = new ScriptReceiverFactory(
                  "_pusher_dependencies",
                  "Pusher.DependenciesReceivers"
                ),
                z = new (class {
                  constructor(s) {
                    (this.options = s),
                      (this.receivers = s.receivers || A),
                      (this.loading = {});
                  }
                  load(s, o, a) {
                    var c = this;
                    if (c.loading[s] && c.loading[s].length > 0)
                      c.loading[s].push(a);
                    else {
                      c.loading[s] = [a];
                      var g = ex.createScriptRequest(c.getPath(s, o)),
                        w = c.receivers.create(function (o) {
                          if ((c.receivers.remove(w), c.loading[s])) {
                            var a = c.loading[s];
                            delete c.loading[s];
                            for (
                              var successCallback = function (s) {
                                  s || g.cleanup();
                                },
                                k = 0;
                              k < a.length;
                              k++
                            )
                              a[k](o, successCallback);
                          }
                        });
                      g.send(w);
                    }
                  }
                  getRoot(s) {
                    var o = ex.getDocument().location.protocol;
                    return (
                      ((s && s.useTLS) || "https:" === o
                        ? this.options.cdn_https
                        : this.options.cdn_http
                      ).replace(/\/*$/, "") +
                      "/" +
                      this.options.version
                    );
                  }
                  getPath(s, o) {
                    return (
                      this.getRoot(o) + "/" + s + this.options.suffix + ".js"
                    );
                  }
                })({
                  cdn_http: j.cdn_http,
                  cdn_https: j.cdn_https,
                  version: j.VERSION,
                  suffix: j.dependency_suffix,
                  receivers: D,
                });
              let $ = {
                baseUrl: "https://pusher.com",
                urls: {
                  authenticationEndpoint: {
                    path: "/docs/channels/server_api/authenticating_users",
                  },
                  authorizationEndpoint: {
                    path: "/docs/channels/server_api/authorizing-users/",
                  },
                  javascriptQuickStart: { path: "/docs/javascript_quick_start" },
                  triggeringClientEvents: {
                    path: "/docs/client_api_guide/client_events#trigger-events",
                  },
                  encryptedChannelSupport: {
                    fullUrl:
                      "https://github.com/pusher/pusher-js/tree/cc491015371a4bde5743d1c87a0fbac0feb53195#encrypted-channel-support",
                  },
                },
              };
              var W = {
                buildLogSuffix: function (s) {
                  let o;
                  let a = $.urls[s];
                  return a &&
                    (a.fullUrl
                      ? (o = a.fullUrl)
                      : a.path && (o = $.baseUrl + a.path),
                    o)
                    ? `See: ${o}`
                    : "";
                },
              };
              ((c = k || (k = {})).UserAuthentication = "user-authentication"),
                (c.ChannelAuthorization = "channel-authorization");
              let BadEventName = class BadEventName extends Error {
                constructor(s) {
                  super(s), Object.setPrototypeOf(this, new.target.prototype);
                }
              };
              let BadChannelName = class BadChannelName extends Error {
                constructor(s) {
                  super(s), Object.setPrototypeOf(this, new.target.prototype);
                }
              };
              let RequestTimedOut = class RequestTimedOut extends Error {
                constructor(s) {
                  super(s), Object.setPrototypeOf(this, new.target.prototype);
                }
              };
              let TransportPriorityTooLow = class TransportPriorityTooLow extends Error {
                constructor(s) {
                  super(s), Object.setPrototypeOf(this, new.target.prototype);
                }
              };
              let TransportClosed = class TransportClosed extends Error {
                constructor(s) {
                  super(s), Object.setPrototypeOf(this, new.target.prototype);
                }
              };
              let UnsupportedFeature = class UnsupportedFeature extends Error {
                constructor(s) {
                  super(s), Object.setPrototypeOf(this, new.target.prototype);
                }
              };
              let UnsupportedTransport = class UnsupportedTransport extends Error {
                constructor(s) {
                  super(s), Object.setPrototypeOf(this, new.target.prototype);
                }
              };
              let UnsupportedStrategy = class UnsupportedStrategy extends Error {
                constructor(s) {
                  super(s), Object.setPrototypeOf(this, new.target.prototype);
                }
              };
              let HTTPAuthError = class HTTPAuthError extends Error {
                constructor(s, o) {
                  super(o),
                    (this.status = s),
                    Object.setPrototypeOf(this, new.target.prototype);
                }
              };
              for (
                var xhr_auth = function (s, o, a, c, g) {
                    let w = ex.createXHR();
                    for (var x in (w.open("POST", a.endpoint, !0),
                    w.setRequestHeader(
                      "Content-Type",
                      "application/x-www-form-urlencoded"
                    ),
                    a.headers))
                      w.setRequestHeader(x, a.headers[x]);
                    if (null != a.headersProvider) {
                      let s = a.headersProvider();
                      for (var x in s) w.setRequestHeader(x, s[x]);
                    }
                    return (
                      (w.onreadystatechange = function () {
                        if (4 === w.readyState) {
                          if (200 === w.status) {
                            let s;
                            let o = !1;
                            try {
                              (s = JSON.parse(w.responseText)), (o = !0);
                            } catch (s) {
                              g(
                                new HTTPAuthError(
                                  200,
                                  `JSON returned from ${c.toString()} endpoint was invalid, yet status code was 200. Data was: ${
                                    w.responseText
                                  }`
                                ),
                                null
                              );
                            }
                            o && g(null, s);
                          } else {
                            let s = "";
                            switch (c) {
                              case k.UserAuthentication:
                                s = W.buildLogSuffix("authenticationEndpoint");
                                break;
                              case k.ChannelAuthorization:
                                s = `Clients must be authorized to join private or presence channels. ${W.buildLogSuffix(
                                  "authorizationEndpoint"
                                )}`;
                            }
                            g(
                              new HTTPAuthError(
                                w.status,
                                `Unable to retrieve auth string from ${c.toString()} endpoint - received status: ${
                                  w.status
                                } from ${a.endpoint}. ${s}`
                              ),
                              null
                            );
                          }
                        }
                      }),
                      w.send(o),
                      w
                    );
                  },
                  G = String.fromCharCode,
                  V =
                    "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/",
                  K = {},
                  X = 0,
                  Z = V.length;
                X < Z;
                X++
              )
                K[V.charAt(X)] = X;
              var cb_utob = function (s) {
                  var o = s.charCodeAt(0);
                  return o < 128
                    ? s
                    : o < 2048
                    ? G(192 | (o >>> 6)) + G(128 | (63 & o))
                    : G(224 | ((o >>> 12) & 15)) +
                      G(128 | ((o >>> 6) & 63)) +
                      G(128 | (63 & o));
                },
                cb_encode = function (s) {
                  var o = [0, 2, 1][s.length % 3],
                    a =
                      (s.charCodeAt(0) << 16) |
                      ((s.length > 1 ? s.charCodeAt(1) : 0) << 8) |
                      (s.length > 2 ? s.charCodeAt(2) : 0);
                  return [
                    V.charAt(a >>> 18),
                    V.charAt((a >>> 12) & 63),
                    o >= 2 ? "=" : V.charAt((a >>> 6) & 63),
                    o >= 1 ? "=" : V.charAt(63 & a),
                  ].join("");
                },
                Y =
                  window.btoa ||
                  function (s) {
                    return s.replace(/[\s\S]{1,3}/g, cb_encode);
                  },
                ee = class {
                  constructor(s, o, a, c) {
                    (this.clear = o),
                      (this.timer = s(() => {
                        this.timer && (this.timer = c(this.timer));
                      }, a));
                  }
                  isRunning() {
                    return null !== this.timer;
                  }
                  ensureAborted() {
                    this.timer && (this.clear(this.timer), (this.timer = null));
                  }
                };
              function timers_clearTimeout(s) {
                window.clearTimeout(s);
              }
              function timers_clearInterval(s) {
                window.clearInterval(s);
              }
              let timers_OneOffTimer = class timers_OneOffTimer extends ee {
                constructor(s, o) {
                  super(setTimeout, timers_clearTimeout, s, function (s) {
                    return o(), null;
                  });
                }
              };
              let timers_PeriodicTimer = class timers_PeriodicTimer extends ee {
                constructor(s, o) {
                  super(setInterval, timers_clearInterval, s, function (s) {
                    return o(), s;
                  });
                }
              };
              var et = {
                now: () => (Date.now ? Date.now() : new Date().valueOf()),
                defer: (s) => new timers_OneOffTimer(0, s),
                method(s, ...o) {
                  var a = Array.prototype.slice.call(arguments, 1);
                  return function (o) {
                    return o[s].apply(o, a.concat(arguments));
                  };
                },
              };
              function extend(s, ...o) {
                for (var a = 0; a < o.length; a++) {
                  var c = o[a];
                  for (var g in c)
                    c[g] && c[g].constructor && c[g].constructor === Object
                      ? (s[g] = extend(s[g] || {}, c[g]))
                      : (s[g] = c[g]);
                }
                return s;
              }
              function stringify() {
                for (var s = ["Pusher"], o = 0; o < arguments.length; o++)
                  "string" == typeof arguments[o]
                    ? s.push(arguments[o])
                    : s.push(safeJSONStringify(arguments[o]));
                return s.join(" : ");
              }
              function arrayIndexOf(s, o) {
                var a = Array.prototype.indexOf;
                if (null === s) return -1;
                if (a && s.indexOf === a) return s.indexOf(o);
                for (var c = 0, g = s.length; c < g; c++)
                  if (s[c] === o) return c;
                return -1;
              }
              function objectApply(s, o) {
                for (var a in s)
                  Object.prototype.hasOwnProperty.call(s, a) && o(s[a], a, s);
              }
              function keys(s) {
                var o = [];
                return (
                  objectApply(s, function (s, a) {
                    o.push(a);
                  }),
                  o
                );
              }
              function apply(s, o, a) {
                for (var c = 0; c < s.length; c++)
                  o.call(a || window, s[c], c, s);
              }
              function map(s, o) {
                for (var a = [], c = 0; c < s.length; c++)
                  a.push(o(s[c], c, s, a));
                return a;
              }
              function filter(s, o) {
                o =
                  o ||
                  function (s) {
                    return !!s;
                  };
                for (var a = [], c = 0; c < s.length; c++)
                  o(s[c], c, s, a) && a.push(s[c]);
                return a;
              }
              function filterObject(s, o) {
                var a = {};
                return (
                  objectApply(s, function (c, g) {
                    ((o && o(c, g, s, a)) || c) && (a[g] = c);
                  }),
                  a
                );
              }
              function any(s, o) {
                for (var a = 0; a < s.length; a++) if (o(s[a], a, s)) return !0;
                return !1;
              }
              function safeJSONStringify(s) {
                try {
                  return JSON.stringify(s);
                } catch (c) {
                  var o, a;
                  return JSON.stringify(
                    ((o = []),
                    (a = []),
                    (function derez(s, c) {
                      var g, w, k;
                      switch (typeof s) {
                        case "object":
                          if (!s) return null;
                          for (g = 0; g < o.length; g += 1)
                            if (o[g] === s) return { $ref: a[g] };
                          if (
                            (o.push(s),
                            a.push(c),
                            "[object Array]" ===
                              Object.prototype.toString.apply(s))
                          )
                            for (g = 0, k = []; g < s.length; g += 1)
                              k[g] = derez(s[g], c + "[" + g + "]");
                          else
                            for (w in ((k = {}), s))
                              Object.prototype.hasOwnProperty.call(s, w) &&
                                (k[w] = derez(
                                  s[w],
                                  c + "[" + JSON.stringify(w) + "]"
                                ));
                          return k;
                        case "number":
                        case "string":
                        case "boolean":
                          return s;
                      }
                    })(s, "$"))
                  );
                }
              }
              var er = new (class {
                  constructor() {
                    this.globalLog = (s) => {
                      window.console &&
                        window.console.log &&
                        window.console.log(s);
                    };
                  }
                  debug(...s) {
                    this.log(this.globalLog, s);
                  }
                  warn(...s) {
                    this.log(this.globalLogWarn, s);
                  }
                  error(...s) {
                    this.log(this.globalLogError, s);
                  }
                  globalLogWarn(s) {
                    window.console && window.console.warn
                      ? window.console.warn(s)
                      : this.globalLog(s);
                  }
                  globalLogError(s) {
                    window.console && window.console.error
                      ? window.console.error(s)
                      : this.globalLogWarn(s);
                  }
                  log(s, ...o) {
                    var a = stringify.apply(this, arguments);
                    if (eA.log) eA.log(a);
                    else if (eA.logToConsole) {
                      let o = s.bind(this);
                      o(a);
                    }
                  }
                })(),
                jsonp_auth = function (s, o, a, c, g) {
                  (void 0 !== a.headers || null != a.headersProvider) &&
                    er.warn(
                      `To send headers with the ${c.toString()} request, you must use AJAX, rather than JSONP.`
                    );
                  var w = s.nextAuthCallbackID.toString();
                  s.nextAuthCallbackID++;
                  var k = s.getDocument(),
                    x = k.createElement("script");
                  (s.auth_callbacks[w] = function (s) {
                    g(null, s);
                  }),
                    (x.src =
                      a.endpoint +
                      "?callback=" +
                      encodeURIComponent("Pusher.auth_callbacks['" + w + "']") +
                      "&" +
                      o);
                  var P = k.getElementsByTagName("head")[0] || k.documentElement;
                  P.insertBefore(x, P.firstChild);
                };
              let ScriptRequest = class ScriptRequest {
                constructor(s) {
                  this.src = s;
                }
                send(s) {
                  var o = this,
                    a = "Error loading " + o.src;
                  (o.script = document.createElement("script")),
                    (o.script.id = s.id),
                    (o.script.src = o.src),
                    (o.script.type = "text/javascript"),
                    (o.script.charset = "UTF-8"),
                    o.script.addEventListener
                      ? ((o.script.onerror = function () {
                          s.callback(a);
                        }),
                        (o.script.onload = function () {
                          s.callback(null);
                        }))
                      : (o.script.onreadystatechange = function () {
                          ("loaded" === o.script.readyState ||
                            "complete" === o.script.readyState) &&
                            s.callback(null);
                        }),
                    void 0 === o.script.async &&
                    document.attachEvent &&
                    /opera/i.test(navigator.userAgent)
                      ? ((o.errorScript = document.createElement("script")),
                        (o.errorScript.id = s.id + "_error"),
                        (o.errorScript.text = s.name + "('" + a + "');"),
                        (o.script.async = o.errorScript.async = !1))
                      : (o.script.async = !0);
                  var c = document.getElementsByTagName("head")[0];
                  c.insertBefore(o.script, c.firstChild),
                    o.errorScript &&
                      c.insertBefore(o.errorScript, o.script.nextSibling);
                }
                cleanup() {
                  this.script &&
                    ((this.script.onload = this.script.onerror = null),
                    (this.script.onreadystatechange = null)),
                    this.script &&
                      this.script.parentNode &&
                      this.script.parentNode.removeChild(this.script),
                    this.errorScript &&
                      this.errorScript.parentNode &&
                      this.errorScript.parentNode.removeChild(this.errorScript),
                    (this.script = null),
                    (this.errorScript = null);
                }
              };
              let jsonp_request_JSONPRequest = class jsonp_request_JSONPRequest {
                constructor(s, o) {
                  (this.url = s), (this.data = o);
                }
                send(s) {
                  if (!this.request) {
                    var o,
                      a,
                      c,
                      g = map(
                        ((o = filterObject(this.data, function (s) {
                          return void 0 !== s;
                        })),
                        (a = {}),
                        objectApply(o, function (s, o) {
                          var c;
                          a[o] =
                            ("object" == typeof (c = s) &&
                              (c = safeJSONStringify(c)),
                            encodeURIComponent(
                              Y(c.toString().replace(/[^\x00-\x7F]/g, cb_utob))
                            ));
                        }),
                        (c = []),
                        objectApply(a, function (s, o) {
                          c.push([o, s]);
                        }),
                        c),
                        et.method("join", "=")
                      ).join("&"),
                      w = this.url + "/" + s.number + "?" + g;
                    (this.request = ex.createScriptRequest(w)),
                      this.request.send(s);
                  }
                }
                cleanup() {
                  this.request && this.request.cleanup();
                }
              };
              function getGenericURL(s, o, a) {
                return (
                  s +
                  (o.useTLS ? "s" : "") +
                  "://" +
                  (o.useTLS ? o.hostTLS : o.hostNonTLS) +
                  a
                );
              }
              function getGenericPath(s, o) {
                return (
                  "/app/" +
                  s +
                  ("?protocol=" + j.PROTOCOL + "&client=js&version=") +
                  j.VERSION +
                  (o ? "&" + o : "")
                );
              }
              let callback_registry_CallbackRegistry = class callback_registry_CallbackRegistry {
                constructor() {
                  this._callbacks = {};
                }
                get(s) {
                  return this._callbacks["_" + s];
                }
                add(s, o, a) {
                  var c = "_" + s;
                  (this._callbacks[c] = this._callbacks[c] || []),
                    this._callbacks[c].push({ fn: o, context: a });
                }
                remove(s, o, a) {
                  if (!s && !o && !a) {
                    this._callbacks = {};
                    return;
                  }
                  var c = s ? ["_" + s] : keys(this._callbacks);
                  o || a
                    ? this.removeCallback(c, o, a)
                    : this.removeAllCallbacks(c);
                }
                removeCallback(s, o, a) {
                  apply(
                    s,
                    function (s) {
                      (this._callbacks[s] = filter(
                        this._callbacks[s] || [],
                        function (s) {
                          return (o && o !== s.fn) || (a && a !== s.context);
                        }
                      )),
                        0 === this._callbacks[s].length &&
                          delete this._callbacks[s];
                    },
                    this
                  );
                }
                removeAllCallbacks(s) {
                  apply(
                    s,
                    function (s) {
                      delete this._callbacks[s];
                    },
                    this
                  );
                }
              };
              let dispatcher_Dispatcher = class dispatcher_Dispatcher {
                constructor(s) {
                  (this.callbacks = new callback_registry_CallbackRegistry()),
                    (this.global_callbacks = []),
                    (this.failThrough = s);
                }
                bind(s, o, a) {
                  return this.callbacks.add(s, o, a), this;
                }
                bind_global(s) {
                  return this.global_callbacks.push(s), this;
                }
                unbind(s, o, a) {
                  return this.callbacks.remove(s, o, a), this;
                }
                unbind_global(s) {
                  return (
                    s
                      ? (this.global_callbacks = filter(
                          this.global_callbacks || [],
                          (o) => o !== s
                        ))
                      : (this.global_callbacks = []),
                    this
                  );
                }
                unbind_all() {
                  return this.unbind(), this.unbind_global(), this;
                }
                emit(s, o, a) {
                  for (var c = 0; c < this.global_callbacks.length; c++)
                    this.global_callbacks[c](s, o);
                  var g = this.callbacks.get(s),
                    w = [];
                  if ((a ? w.push(o, a) : o && w.push(o), g && g.length > 0))
                    for (var c = 0; c < g.length; c++)
                      g[c].fn.apply(g[c].context || window, w);
                  else this.failThrough && this.failThrough(s, o);
                  return this;
                }
              };
              let transport_connection_TransportConnection = class transport_connection_TransportConnection extends dispatcher_Dispatcher {
                constructor(s, o, a, c, g) {
                  super(),
                    (this.initialize = ex.transportConnectionInitializer),
                    (this.hooks = s),
                    (this.name = o),
                    (this.priority = a),
                    (this.key = c),
                    (this.options = g),
                    (this.state = "new"),
                    (this.timeline = g.timeline),
                    (this.activityTimeout = g.activityTimeout),
                    (this.id = this.timeline.generateUniqueID());
                }
                handlesActivityChecks() {
                  return !!this.hooks.handlesActivityChecks;
                }
                supportsPing() {
                  return !!this.hooks.supportsPing;
                }
                connect() {
                  if (this.socket || "initialized" !== this.state) return !1;
                  var s = this.hooks.urls.getInitial(this.key, this.options);
                  try {
                    this.socket = this.hooks.getSocket(s, this.options);
                  } catch (s) {
                    return (
                      et.defer(() => {
                        this.onError(s), this.changeState("closed");
                      }),
                      !1
                    );
                  }
                  return (
                    this.bindListeners(),
                    er.debug("Connecting", { transport: this.name, url: s }),
                    this.changeState("connecting"),
                    !0
                  );
                }
                close() {
                  return !!this.socket && (this.socket.close(), !0);
                }
                send(s) {
                  return (
                    "open" === this.state &&
                    (et.defer(() => {
                      this.socket && this.socket.send(s);
                    }),
                    !0)
                  );
                }
                ping() {
                  "open" === this.state &&
                    this.supportsPing() &&
                    this.socket.ping();
                }
                onOpen() {
                  this.hooks.beforeOpen &&
                    this.hooks.beforeOpen(
                      this.socket,
                      this.hooks.urls.getPath(this.key, this.options)
                    ),
                    this.changeState("open"),
                    (this.socket.onopen = void 0);
                }
                onError(s) {
                  this.emit("error", { type: "WebSocketError", error: s }),
                    this.timeline.error(
                      this.buildTimelineMessage({ error: s.toString() })
                    );
                }
                onClose(s) {
                  s
                    ? this.changeState("closed", {
                        code: s.code,
                        reason: s.reason,
                        wasClean: s.wasClean,
                      })
                    : this.changeState("closed"),
                    this.unbindListeners(),
                    (this.socket = void 0);
                }
                onMessage(s) {
                  this.emit("message", s);
                }
                onActivity() {
                  this.emit("activity");
                }
                bindListeners() {
                  (this.socket.onopen = () => {
                    this.onOpen();
                  }),
                    (this.socket.onerror = (s) => {
                      this.onError(s);
                    }),
                    (this.socket.onclose = (s) => {
                      this.onClose(s);
                    }),
                    (this.socket.onmessage = (s) => {
                      this.onMessage(s);
                    }),
                    this.supportsPing() &&
                      (this.socket.onactivity = () => {
                        this.onActivity();
                      });
                }
                unbindListeners() {
                  this.socket &&
                    ((this.socket.onopen = void 0),
                    (this.socket.onerror = void 0),
                    (this.socket.onclose = void 0),
                    (this.socket.onmessage = void 0),
                    this.supportsPing() && (this.socket.onactivity = void 0));
                }
                changeState(s, o) {
                  (this.state = s),
                    this.timeline.info(
                      this.buildTimelineMessage({ state: s, params: o })
                    ),
                    this.emit(s, o);
                }
                buildTimelineMessage(s) {
                  return extend({ cid: this.id }, s);
                }
              };
              let transport_Transport = class transport_Transport {
                constructor(s) {
                  this.hooks = s;
                }
                isSupported(s) {
                  return this.hooks.isSupported(s);
                }
                createConnection(s, o, a, c) {
                  return new transport_connection_TransportConnection(
                    this.hooks,
                    s,
                    o,
                    a,
                    c
                  );
                }
              };
              var en = new transport_Transport({
                  urls: {
                    getInitial: function (s, o) {
                      var a =
                        (o.httpPath || "") + getGenericPath(s, "flash=false");
                      return getGenericURL("ws", o, a);
                    },
                  },
                  handlesActivityChecks: !1,
                  supportsPing: !1,
                  isInitialized: function () {
                    return !!ex.getWebSocketAPI();
                  },
                  isSupported: function () {
                    return !!ex.getWebSocketAPI();
                  },
                  getSocket: function (s) {
                    return ex.createWebSocket(s);
                  },
                }),
                ei = {
                  urls: {
                    getInitial: function (s, o) {
                      var a = (o.httpPath || "/pusher") + getGenericPath(s);
                      return getGenericURL("http", o, a);
                    },
                  },
                  handlesActivityChecks: !1,
                  supportsPing: !0,
                  isInitialized: function () {
                    return !0;
                  },
                },
                es = extend(
                  {
                    getSocket: function (s) {
                      return ex.HTTPFactory.createStreamingSocket(s);
                    },
                  },
                  ei
                ),
                eo = extend(
                  {
                    getSocket: function (s) {
                      return ex.HTTPFactory.createPollingSocket(s);
                    },
                  },
                  ei
                ),
                ea = {
                  isSupported: function () {
                    return ex.isXHRSupported();
                  },
                },
                eu = {
                  ws: en,
                  xhr_streaming: new transport_Transport(extend({}, es, ea)),
                  xhr_polling: new transport_Transport(extend({}, eo, ea)),
                },
                el = new transport_Transport({
                  file: "sockjs",
                  urls: {
                    getInitial: function (s, o) {
                      return getGenericURL("http", o, o.httpPath || "/pusher");
                    },
                    getPath: function (s, o) {
                      return getGenericPath(s);
                    },
                  },
                  handlesActivityChecks: !0,
                  supportsPing: !1,
                  isSupported: function () {
                    return !0;
                  },
                  isInitialized: function () {
                    return void 0 !== window.SockJS;
                  },
                  getSocket: function (s, o) {
                    return new window.SockJS(s, null, {
                      js_path: z.getPath("sockjs", { useTLS: o.useTLS }),
                      ignore_null_origin: o.ignoreNullOrigin,
                    });
                  },
                  beforeOpen: function (s, o) {
                    s.send(JSON.stringify({ path: o }));
                  },
                }),
                ec = {
                  isSupported: function (s) {
                    return ex.isXDRSupported(s.useTLS);
                  },
                },
                eh = new transport_Transport(extend({}, es, ec)),
                ed = new transport_Transport(extend({}, eo, ec));
              (eu.xdr_streaming = eh), (eu.xdr_polling = ed), (eu.sockjs = el);
              var ef = new (class extends dispatcher_Dispatcher {
                constructor() {
                  super();
                  var s = this;
                  void 0 !== window.addEventListener &&
                    (window.addEventListener(
                      "online",
                      function () {
                        s.emit("online");
                      },
                      !1
                    ),
                    window.addEventListener(
                      "offline",
                      function () {
                        s.emit("offline");
                      },
                      !1
                    ));
                }
                isOnline() {
                  return (
                    void 0 === window.navigator.onLine || window.navigator.onLine
                  );
                }
              })();
              let assistant_to_the_transport_manager_AssistantToTheTransportManager = class assistant_to_the_transport_manager_AssistantToTheTransportManager {
                constructor(s, o, a) {
                  (this.manager = s),
                    (this.transport = o),
                    (this.minPingDelay = a.minPingDelay),
                    (this.maxPingDelay = a.maxPingDelay),
                    (this.pingDelay = void 0);
                }
                createConnection(s, o, a, c) {
                  c = extend({}, c, { activityTimeout: this.pingDelay });
                  var g = this.transport.createConnection(s, o, a, c),
                    w = null,
                    onOpen = function () {
                      g.unbind("open", onOpen),
                        g.bind("closed", onClosed),
                        (w = et.now());
                    },
                    onClosed = (s) => {
                      if (
                        (g.unbind("closed", onClosed),
                        1002 === s.code || 1003 === s.code)
                      )
                        this.manager.reportDeath();
                      else if (!s.wasClean && w) {
                        var o = et.now() - w;
                        o < 2 * this.maxPingDelay &&
                          (this.manager.reportDeath(),
                          (this.pingDelay = Math.max(o / 2, this.minPingDelay)));
                      }
                    };
                  return g.bind("open", onOpen), g;
                }
                isSupported(s) {
                  return this.manager.isAlive() && this.transport.isSupported(s);
                }
              };
              let ep = {
                decodeMessage: function (s) {
                  try {
                    var o = JSON.parse(s.data),
                      a = o.data;
                    if ("string" == typeof a)
                      try {
                        a = JSON.parse(o.data);
                      } catch (s) {}
                    var c = { event: o.event, channel: o.channel, data: a };
                    return o.user_id && (c.user_id = o.user_id), c;
                  } catch (o) {
                    throw { type: "MessageParseError", error: o, data: s.data };
                  }
                },
                encodeMessage: function (s) {
                  return JSON.stringify(s);
                },
                processHandshake: function (s) {
                  var o = ep.decodeMessage(s);
                  if ("pusher:connection_established" === o.event) {
                    if (!o.data.activity_timeout)
                      throw "No activity timeout specified in handshake";
                    return {
                      action: "connected",
                      id: o.data.socket_id,
                      activityTimeout: 1e3 * o.data.activity_timeout,
                    };
                  }
                  if ("pusher:error" === o.event)
                    return {
                      action: this.getCloseAction(o.data),
                      error: this.getCloseError(o.data),
                    };
                  throw "Invalid handshake";
                },
                getCloseAction: function (s) {
                  return s.code < 4e3
                    ? s.code >= 1002 && s.code <= 1004
                      ? "backoff"
                      : null
                    : 4e3 === s.code
                    ? "tls_only"
                    : s.code < 4100
                    ? "refused"
                    : s.code < 4200
                    ? "backoff"
                    : s.code < 4300
                    ? "retry"
                    : "refused";
                },
                getCloseError: function (s) {
                  return 1e3 !== s.code && 1001 !== s.code
                    ? {
                        type: "PusherError",
                        data: { code: s.code, message: s.reason || s.message },
                      }
                    : null;
                },
              };
              let connection_Connection = class connection_Connection extends dispatcher_Dispatcher {
                constructor(s, o) {
                  super(),
                    (this.id = s),
                    (this.transport = o),
                    (this.activityTimeout = o.activityTimeout),
                    this.bindListeners();
                }
                handlesActivityChecks() {
                  return this.transport.handlesActivityChecks();
                }
                send(s) {
                  return this.transport.send(s);
                }
                send_event(s, o, a) {
                  var c = { event: s, data: o };
                  return (
                    a && (c.channel = a),
                    er.debug("Event sent", c),
                    this.send(ep.encodeMessage(c))
                  );
                }
                ping() {
                  this.transport.supportsPing()
                    ? this.transport.ping()
                    : this.send_event("pusher:ping", {});
                }
                close() {
                  this.transport.close();
                }
                bindListeners() {
                  var s = {
                      message: (s) => {
                        var o;
                        try {
                          o = ep.decodeMessage(s);
                        } catch (o) {
                          this.emit("error", {
                            type: "MessageParseError",
                            error: o,
                            data: s.data,
                          });
                        }
                        if (void 0 !== o) {
                          switch ((er.debug("Event recd", o), o.event)) {
                            case "pusher:error":
                              this.emit("error", {
                                type: "PusherError",
                                data: o.data,
                              });
                              break;
                            case "pusher:ping":
                              this.emit("ping");
                              break;
                            case "pusher:pong":
                              this.emit("pong");
                          }
                          this.emit("message", o);
                        }
                      },
                      activity: () => {
                        this.emit("activity");
                      },
                      error: (s) => {
                        this.emit("error", s);
                      },
                      closed: (s) => {
                        unbindListeners(),
                          s && s.code && this.handleCloseEvent(s),
                          (this.transport = null),
                          this.emit("closed");
                      },
                    },
                    unbindListeners = () => {
                      objectApply(s, (s, o) => {
                        this.transport.unbind(o, s);
                      });
                    };
                  objectApply(s, (s, o) => {
                    this.transport.bind(o, s);
                  });
                }
                handleCloseEvent(s) {
                  var o = ep.getCloseAction(s),
                    a = ep.getCloseError(s);
                  a && this.emit("error", a),
                    o && this.emit(o, { action: o, error: a });
                }
              };
              let handshake_Handshake = class handshake_Handshake {
                constructor(s, o) {
                  (this.transport = s), (this.callback = o), this.bindListeners();
                }
                close() {
                  this.unbindListeners(), this.transport.close();
                }
                bindListeners() {
                  (this.onMessage = (s) => {
                    var o;
                    this.unbindListeners();
                    try {
                      o = ep.processHandshake(s);
                    } catch (s) {
                      this.finish("error", { error: s }), this.transport.close();
                      return;
                    }
                    "connected" === o.action
                      ? this.finish("connected", {
                          connection: new connection_Connection(
                            o.id,
                            this.transport
                          ),
                          activityTimeout: o.activityTimeout,
                        })
                      : (this.finish(o.action, { error: o.error }),
                        this.transport.close());
                  }),
                    (this.onClosed = (s) => {
                      this.unbindListeners();
                      var o = ep.getCloseAction(s) || "backoff",
                        a = ep.getCloseError(s);
                      this.finish(o, { error: a });
                    }),
                    this.transport.bind("message", this.onMessage),
                    this.transport.bind("closed", this.onClosed);
                }
                unbindListeners() {
                  this.transport.unbind("message", this.onMessage),
                    this.transport.unbind("closed", this.onClosed);
                }
                finish(s, o) {
                  this.callback(
                    extend({ transport: this.transport, action: s }, o)
                  );
                }
              };
              let timeline_sender_TimelineSender = class timeline_sender_TimelineSender {
                constructor(s, o) {
                  (this.timeline = s), (this.options = o || {});
                }
                send(s, o) {
                  this.timeline.isEmpty() ||
                    this.timeline.send(ex.TimelineTransport.getAgent(this, s), o);
                }
              };
              let channel_Channel = class channel_Channel extends dispatcher_Dispatcher {
                constructor(s, o) {
                  super(function (o, a) {
                    er.debug("No callbacks on " + s + " for " + o);
                  }),
                    (this.name = s),
                    (this.pusher = o),
                    (this.subscribed = !1),
                    (this.subscriptionPending = !1),
                    (this.subscriptionCancelled = !1);
                }
                authorize(s, o) {
                  return o(null, { auth: "" });
                }
                trigger(s, o) {
                  if (0 !== s.indexOf("client-"))
                    throw new BadEventName(
                      "Event '" + s + "' does not start with 'client-'"
                    );
                  if (!this.subscribed) {
                    var a = W.buildLogSuffix("triggeringClientEvents");
                    er.warn(
                      `Client event triggered before channel 'subscription_succeeded' event . ${a}`
                    );
                  }
                  return this.pusher.send_event(s, o, this.name);
                }
                disconnect() {
                  (this.subscribed = !1), (this.subscriptionPending = !1);
                }
                handleEvent(s) {
                  var o = s.event,
                    a = s.data;
                  "pusher_internal:subscription_succeeded" === o
                    ? this.handleSubscriptionSucceededEvent(s)
                    : "pusher_internal:subscription_count" === o
                    ? this.handleSubscriptionCountEvent(s)
                    : 0 !== o.indexOf("pusher_internal:") && this.emit(o, a, {});
                }
                handleSubscriptionSucceededEvent(s) {
                  (this.subscriptionPending = !1),
                    (this.subscribed = !0),
                    this.subscriptionCancelled
                      ? this.pusher.unsubscribe(this.name)
                      : this.emit("pusher:subscription_succeeded", s.data);
                }
                handleSubscriptionCountEvent(s) {
                  s.data.subscription_count &&
                    (this.subscriptionCount = s.data.subscription_count),
                    this.emit("pusher:subscription_count", s.data);
                }
                subscribe() {
                  this.subscribed ||
                    ((this.subscriptionPending = !0),
                    (this.subscriptionCancelled = !1),
                    this.authorize(this.pusher.connection.socket_id, (s, o) => {
                      s
                        ? ((this.subscriptionPending = !1),
                          er.error(s.toString()),
                          this.emit(
                            "pusher:subscription_error",
                            Object.assign(
                              {},
                              { type: "AuthError", error: s.message },
                              s instanceof HTTPAuthError
                                ? { status: s.status }
                                : {}
                            )
                          ))
                        : this.pusher.send_event("pusher:subscribe", {
                            auth: o.auth,
                            channel_data: o.channel_data,
                            channel: this.name,
                          });
                    }));
                }
                unsubscribe() {
                  (this.subscribed = !1),
                    this.pusher.send_event("pusher:unsubscribe", {
                      channel: this.name,
                    });
                }
                cancelSubscription() {
                  this.subscriptionCancelled = !0;
                }
                reinstateSubscription() {
                  this.subscriptionCancelled = !1;
                }
              };
              let private_channel_PrivateChannel = class private_channel_PrivateChannel extends channel_Channel {
                authorize(s, o) {
                  return this.pusher.config.channelAuthorizer(
                    { channelName: this.name, socketId: s },
                    o
                  );
                }
              };
              let members_Members = class members_Members {
                constructor() {
                  this.reset();
                }
                get(s) {
                  return Object.prototype.hasOwnProperty.call(this.members, s)
                    ? { id: s, info: this.members[s] }
                    : null;
                }
                each(s) {
                  objectApply(this.members, (o, a) => {
                    s(this.get(a));
                  });
                }
                setMyID(s) {
                  this.myID = s;
                }
                onSubscription(s) {
                  (this.members = s.presence.hash),
                    (this.count = s.presence.count),
                    (this.me = this.get(this.myID));
                }
                addMember(s) {
                  return (
                    null === this.get(s.user_id) && this.count++,
                    (this.members[s.user_id] = s.user_info),
                    this.get(s.user_id)
                  );
                }
                removeMember(s) {
                  var o = this.get(s.user_id);
                  return o && (delete this.members[s.user_id], this.count--), o;
                }
                reset() {
                  (this.members = {}),
                    (this.count = 0),
                    (this.myID = null),
                    (this.me = null);
                }
              };
              let presence_channel_PresenceChannel = class presence_channel_PresenceChannel extends private_channel_PrivateChannel {
                constructor(s, o) {
                  super(s, o), (this.members = new members_Members());
                }
                authorize(s, o) {
                  super.authorize(s, (s, a) => {
                    var c, g, w, k;
                    return (
                      (c = this),
                      (g = void 0),
                      (w = void 0),
                      (k = function* () {
                        if (!s) {
                          if (null != a.channel_data) {
                            var c = JSON.parse(a.channel_data);
                            this.members.setMyID(c.user_id);
                          } else if (
                            (yield this.pusher.user.signinDonePromise,
                            null != this.pusher.user.user_data)
                          )
                            this.members.setMyID(this.pusher.user.user_data.id);
                          else {
                            let s = W.buildLogSuffix("authorizationEndpoint");
                            er.error(
                              `Invalid auth response for channel '${this.name}', expected 'channel_data' field. ${s}, or the user should be signed in.`
                            ),
                              o("Invalid auth response");
                            return;
                          }
                        }
                        o(s, a);
                      }),
                      new (w || (w = Promise))(function (s, o) {
                        function fulfilled(s) {
                          try {
                            step(k.next(s));
                          } catch (s) {
                            o(s);
                          }
                        }
                        function rejected(s) {
                          try {
                            step(k.throw(s));
                          } catch (s) {
                            o(s);
                          }
                        }
                        function step(o) {
                          var a;
                          o.done
                            ? s(o.value)
                            : ((a = o.value) instanceof w
                                ? a
                                : new w(function (s) {
                                    s(a);
                                  })
                              ).then(fulfilled, rejected);
                        }
                        step((k = k.apply(c, g || [])).next());
                      })
                    );
                  });
                }
                handleEvent(s) {
                  var o = s.event;
                  if (0 === o.indexOf("pusher_internal:"))
                    this.handleInternalEvent(s);
                  else {
                    var a = s.data,
                      c = {};
                    s.user_id && (c.user_id = s.user_id), this.emit(o, a, c);
                  }
                }
                handleInternalEvent(s) {
                  var o = s.event,
                    a = s.data;
                  switch (o) {
                    case "pusher_internal:subscription_succeeded":
                      this.handleSubscriptionSucceededEvent(s);
                      break;
                    case "pusher_internal:subscription_count":
                      this.handleSubscriptionCountEvent(s);
                      break;
                    case "pusher_internal:member_added":
                      var c = this.members.addMember(a);
                      this.emit("pusher:member_added", c);
                      break;
                    case "pusher_internal:member_removed":
                      var g = this.members.removeMember(a);
                      g && this.emit("pusher:member_removed", g);
                  }
                }
                handleSubscriptionSucceededEvent(s) {
                  (this.subscriptionPending = !1),
                    (this.subscribed = !0),
                    this.subscriptionCancelled
                      ? this.pusher.unsubscribe(this.name)
                      : (this.members.onSubscription(s.data),
                        this.emit("pusher:subscription_succeeded", this.members));
                }
                disconnect() {
                  this.members.reset(), super.disconnect();
                }
              };
              var eg = a(1),
                ey = a(0);
              let encrypted_channel_EncryptedChannel = class encrypted_channel_EncryptedChannel extends private_channel_PrivateChannel {
                constructor(s, o, a) {
                  super(s, o), (this.key = null), (this.nacl = a);
                }
                authorize(s, o) {
                  super.authorize(s, (s, a) => {
                    if (s) {
                      o(s, a);
                      return;
                    }
                    let c = a.shared_secret;
                    if (!c) {
                      o(
                        Error(
                          `No shared_secret key in auth payload for encrypted channel: ${this.name}`
                        ),
                        null
                      );
                      return;
                    }
                    (this.key = Object(ey.decode)(c)),
                      delete a.shared_secret,
                      o(null, a);
                  });
                }
                trigger(s, o) {
                  throw new UnsupportedFeature(
                    "Client events are not currently supported for encrypted channels"
                  );
                }
                handleEvent(s) {
                  var o = s.event,
                    a = s.data;
                  if (
                    0 === o.indexOf("pusher_internal:") ||
                    0 === o.indexOf("pusher:")
                  ) {
                    super.handleEvent(s);
                    return;
                  }
                  this.handleEncryptedEvent(o, a);
                }
                handleEncryptedEvent(s, o) {
                  if (!this.key) {
                    er.debug(
                      "Received encrypted event before key has been retrieved from the authEndpoint"
                    );
                    return;
                  }
                  if (!o.ciphertext || !o.nonce) {
                    er.error(
                      "Unexpected format for encrypted event, expected object with `ciphertext` and `nonce` fields, got: " +
                        o
                    );
                    return;
                  }
                  let a = Object(ey.decode)(o.ciphertext);
                  if (a.length < this.nacl.secretbox.overheadLength) {
                    er.error(
                      `Expected encrypted event ciphertext length to be ${this.nacl.secretbox.overheadLength}, got: ${a.length}`
                    );
                    return;
                  }
                  let c = Object(ey.decode)(o.nonce);
                  if (c.length < this.nacl.secretbox.nonceLength) {
                    er.error(
                      `Expected encrypted event nonce length to be ${this.nacl.secretbox.nonceLength}, got: ${c.length}`
                    );
                    return;
                  }
                  let g = this.nacl.secretbox.open(a, c, this.key);
                  if (null === g) {
                    er.debug(
                      "Failed to decrypt an event, probably because it was encrypted with a different key. Fetching a new key from the authEndpoint..."
                    ),
                      this.authorize(this.pusher.connection.socket_id, (o, w) => {
                        if (o) {
                          er.error(
                            `Failed to make a request to the authEndpoint: ${w}. Unable to fetch new key, so dropping encrypted event`
                          );
                          return;
                        }
                        if (
                          null === (g = this.nacl.secretbox.open(a, c, this.key))
                        ) {
                          er.error(
                            "Failed to decrypt event with new key. Dropping encrypted event"
                          );
                          return;
                        }
                        this.emit(s, this.getDataToEmit(g));
                      });
                    return;
                  }
                  this.emit(s, this.getDataToEmit(g));
                }
                getDataToEmit(s) {
                  let o = Object(eg.decode)(s);
                  try {
                    return JSON.parse(o);
                  } catch (s) {
                    return o;
                  }
                }
              };
              let connection_manager_ConnectionManager = class connection_manager_ConnectionManager extends dispatcher_Dispatcher {
                constructor(s, o) {
                  super(),
                    (this.state = "initialized"),
                    (this.connection = null),
                    (this.key = s),
                    (this.options = o),
                    (this.timeline = this.options.timeline),
                    (this.usingTLS = this.options.useTLS),
                    (this.errorCallbacks = this.buildErrorCallbacks()),
                    (this.connectionCallbacks = this.buildConnectionCallbacks(
                      this.errorCallbacks
                    )),
                    (this.handshakeCallbacks = this.buildHandshakeCallbacks(
                      this.errorCallbacks
                    ));
                  var a = ex.getNetwork();
                  a.bind("online", () => {
                    this.timeline.info({ netinfo: "online" }),
                      ("connecting" === this.state ||
                        "unavailable" === this.state) &&
                        this.retryIn(0);
                  }),
                    a.bind("offline", () => {
                      this.timeline.info({ netinfo: "offline" }),
                        this.connection && this.sendActivityCheck();
                    }),
                    this.updateStrategy();
                }
                connect() {
                  if (!this.connection && !this.runner) {
                    if (!this.strategy.isSupported()) {
                      this.updateState("failed");
                      return;
                    }
                    this.updateState("connecting"),
                      this.startConnecting(),
                      this.setUnavailableTimer();
                  }
                }
                send(s) {
                  return !!this.connection && this.connection.send(s);
                }
                send_event(s, o, a) {
                  return !!this.connection && this.connection.send_event(s, o, a);
                }
                disconnect() {
                  this.disconnectInternally(), this.updateState("disconnected");
                }
                isUsingTLS() {
                  return this.usingTLS;
                }
                startConnecting() {
                  var callback = (s, o) => {
                    s
                      ? (this.runner = this.strategy.connect(0, callback))
                      : "error" === o.action
                      ? (this.emit("error", {
                          type: "HandshakeError",
                          error: o.error,
                        }),
                        this.timeline.error({ handshakeError: o.error }))
                      : (this.abortConnecting(),
                        this.handshakeCallbacks[o.action](o));
                  };
                  this.runner = this.strategy.connect(0, callback);
                }
                abortConnecting() {
                  this.runner && (this.runner.abort(), (this.runner = null));
                }
                disconnectInternally() {
                  this.abortConnecting(),
                    this.clearRetryTimer(),
                    this.clearUnavailableTimer(),
                    this.connection && this.abandonConnection().close();
                }
                updateStrategy() {
                  this.strategy = this.options.getStrategy({
                    key: this.key,
                    timeline: this.timeline,
                    useTLS: this.usingTLS,
                  });
                }
                retryIn(s) {
                  this.timeline.info({ action: "retry", delay: s }),
                    s > 0 && this.emit("connecting_in", Math.round(s / 1e3)),
                    (this.retryTimer = new timers_OneOffTimer(s || 0, () => {
                      this.disconnectInternally(), this.connect();
                    }));
                }
                clearRetryTimer() {
                  this.retryTimer &&
                    (this.retryTimer.ensureAborted(), (this.retryTimer = null));
                }
                setUnavailableTimer() {
                  this.unavailableTimer = new timers_OneOffTimer(
                    this.options.unavailableTimeout,
                    () => {
                      this.updateState("unavailable");
                    }
                  );
                }
                clearUnavailableTimer() {
                  this.unavailableTimer && this.unavailableTimer.ensureAborted();
                }
                sendActivityCheck() {
                  this.stopActivityCheck(),
                    this.connection.ping(),
                    (this.activityTimer = new timers_OneOffTimer(
                      this.options.pongTimeout,
                      () => {
                        this.timeline.error({
                          pong_timed_out: this.options.pongTimeout,
                        }),
                          this.retryIn(0);
                      }
                    ));
                }
                resetActivityCheck() {
                  this.stopActivityCheck(),
                    this.connection &&
                      !this.connection.handlesActivityChecks() &&
                      (this.activityTimer = new timers_OneOffTimer(
                        this.activityTimeout,
                        () => {
                          this.sendActivityCheck();
                        }
                      ));
                }
                stopActivityCheck() {
                  this.activityTimer && this.activityTimer.ensureAborted();
                }
                buildConnectionCallbacks(s) {
                  return extend({}, s, {
                    message: (s) => {
                      this.resetActivityCheck(), this.emit("message", s);
                    },
                    ping: () => {
                      this.send_event("pusher:pong", {});
                    },
                    activity: () => {
                      this.resetActivityCheck();
                    },
                    error: (s) => {
                      this.emit("error", s);
                    },
                    closed: () => {
                      this.abandonConnection(),
                        this.shouldRetry() && this.retryIn(1e3);
                    },
                  });
                }
                buildHandshakeCallbacks(s) {
                  return extend({}, s, {
                    connected: (s) => {
                      (this.activityTimeout = Math.min(
                        this.options.activityTimeout,
                        s.activityTimeout,
                        s.connection.activityTimeout || 1 / 0
                      )),
                        this.clearUnavailableTimer(),
                        this.setConnection(s.connection),
                        (this.socket_id = this.connection.id),
                        this.updateState("connected", {
                          socket_id: this.socket_id,
                        });
                    },
                  });
                }
                buildErrorCallbacks() {
                  let withErrorEmitted = (s) => (o) => {
                    o.error &&
                      this.emit("error", {
                        type: "WebSocketError",
                        error: o.error,
                      }),
                      s(o);
                  };
                  return {
                    tls_only: withErrorEmitted(() => {
                      (this.usingTLS = !0),
                        this.updateStrategy(),
                        this.retryIn(0);
                    }),
                    refused: withErrorEmitted(() => {
                      this.disconnect();
                    }),
                    backoff: withErrorEmitted(() => {
                      this.retryIn(1e3);
                    }),
                    retry: withErrorEmitted(() => {
                      this.retryIn(0);
                    }),
                  };
                }
                setConnection(s) {
                  for (var o in ((this.connection = s), this.connectionCallbacks))
                    this.connection.bind(o, this.connectionCallbacks[o]);
                  this.resetActivityCheck();
                }
                abandonConnection() {
                  if (this.connection) {
                    for (var s in (this.stopActivityCheck(),
                    this.connectionCallbacks))
                      this.connection.unbind(s, this.connectionCallbacks[s]);
                    var o = this.connection;
                    return (this.connection = null), o;
                  }
                }
                updateState(s, o) {
                  var a = this.state;
                  if (((this.state = s), a !== s)) {
                    var c = s;
                    "connected" === c &&
                      (c += " with new socket ID " + o.socket_id),
                      er.debug("State changed", a + " -> " + c),
                      this.timeline.info({ state: s, params: o }),
                      this.emit("state_change", { previous: a, current: s }),
                      this.emit(s, o);
                  }
                }
                shouldRetry() {
                  return (
                    "connecting" === this.state || "connected" === this.state
                  );
                }
              };
              let channels_Channels = class channels_Channels {
                constructor() {
                  this.channels = {};
                }
                add(s, o) {
                  return (
                    this.channels[s] ||
                      (this.channels[s] = (function (s, o) {
                        if (0 === s.indexOf("private-encrypted-")) {
                          if (o.config.nacl)
                            return em.createEncryptedChannel(s, o, o.config.nacl);
                          let a = W.buildLogSuffix("encryptedChannelSupport");
                          throw new UnsupportedFeature(
                            `Tried to subscribe to a private-encrypted- channel but no nacl implementation available. ${a}`
                          );
                        }
                        if (0 === s.indexOf("private-"))
                          return em.createPrivateChannel(s, o);
                        if (0 === s.indexOf("presence-"))
                          return em.createPresenceChannel(s, o);
                        if (0 !== s.indexOf("#")) return em.createChannel(s, o);
                        throw new BadChannelName(
                          'Cannot create a channel with name "' + s + '".'
                        );
                      })(s, o)),
                    this.channels[s]
                  );
                }
                all() {
                  var s, o;
                  return (
                    (s = this.channels),
                    (o = []),
                    objectApply(s, function (s) {
                      o.push(s);
                    }),
                    o
                  );
                }
                find(s) {
                  return this.channels[s];
                }
                remove(s) {
                  var o = this.channels[s];
                  return delete this.channels[s], o;
                }
                disconnect() {
                  objectApply(this.channels, function (s) {
                    s.disconnect();
                  });
                }
              };
              var em = {
                createChannels: () => new channels_Channels(),
                createConnectionManager: (s, o) =>
                  new connection_manager_ConnectionManager(s, o),
                createChannel: (s, o) => new channel_Channel(s, o),
                createPrivateChannel: (s, o) =>
                  new private_channel_PrivateChannel(s, o),
                createPresenceChannel: (s, o) =>
                  new presence_channel_PresenceChannel(s, o),
                createEncryptedChannel: (s, o, a) =>
                  new encrypted_channel_EncryptedChannel(s, o, a),
                createTimelineSender: (s, o) =>
                  new timeline_sender_TimelineSender(s, o),
                createHandshake: (s, o) => new handshake_Handshake(s, o),
                createAssistantToTheTransportManager: (s, o, a) =>
                  new assistant_to_the_transport_manager_AssistantToTheTransportManager(
                    s,
                    o,
                    a
                  ),
              };
              let transport_manager_TransportManager = class transport_manager_TransportManager {
                constructor(s) {
                  (this.options = s || {}),
                    (this.livesLeft = this.options.lives || 1 / 0);
                }
                getAssistant(s) {
                  return em.createAssistantToTheTransportManager(this, s, {
                    minPingDelay: this.options.minPingDelay,
                    maxPingDelay: this.options.maxPingDelay,
                  });
                }
                isAlive() {
                  return this.livesLeft > 0;
                }
                reportDeath() {
                  this.livesLeft -= 1;
                }
              };
              let sequential_strategy_SequentialStrategy = class sequential_strategy_SequentialStrategy {
                constructor(s, o) {
                  (this.strategies = s),
                    (this.loop = !!o.loop),
                    (this.failFast = !!o.failFast),
                    (this.timeout = o.timeout),
                    (this.timeoutLimit = o.timeoutLimit);
                }
                isSupported() {
                  return any(this.strategies, et.method("isSupported"));
                }
                connect(s, o) {
                  var a = this.strategies,
                    c = 0,
                    g = this.timeout,
                    w = null,
                    tryNextStrategy = (k, x) => {
                      x
                        ? o(null, x)
                        : ((c += 1),
                          this.loop && (c %= a.length),
                          c < a.length
                            ? (g &&
                                ((g *= 2),
                                this.timeoutLimit &&
                                  (g = Math.min(g, this.timeoutLimit))),
                              (w = this.tryStrategy(
                                a[c],
                                s,
                                { timeout: g, failFast: this.failFast },
                                tryNextStrategy
                              )))
                            : o(!0));
                    };
                  return (
                    (w = this.tryStrategy(
                      a[c],
                      s,
                      { timeout: g, failFast: this.failFast },
                      tryNextStrategy
                    )),
                    {
                      abort: function () {
                        w.abort();
                      },
                      forceMinPriority: function (o) {
                        (s = o), w && w.forceMinPriority(o);
                      },
                    }
                  );
                }
                tryStrategy(s, o, a, c) {
                  var g = null,
                    w = null;
                  return (
                    a.timeout > 0 &&
                      (g = new timers_OneOffTimer(a.timeout, function () {
                        w.abort(), c(!0);
                      })),
                    (w = s.connect(o, function (s, o) {
                      (!(s && g && g.isRunning()) || a.failFast) &&
                        (g && g.ensureAborted(), c(s, o));
                    })),
                    {
                      abort: function () {
                        g && g.ensureAborted(), w.abort();
                      },
                      forceMinPriority: function (s) {
                        w.forceMinPriority(s);
                      },
                    }
                  );
                }
              };
              let best_connected_ever_strategy_BestConnectedEverStrategy = class best_connected_ever_strategy_BestConnectedEverStrategy {
                constructor(s) {
                  this.strategies = s;
                }
                isSupported() {
                  return any(this.strategies, et.method("isSupported"));
                }
                connect(s, o) {
                  var a;
                  return (
                    (a = map(this.strategies, function (a, c, g, w) {
                      var k, x;
                      return a.connect(
                        s,
                        ((k = c),
                        (x = w),
                        function (s, a) {
                          if (((x[k].error = s), s)) {
                            (function (s, o) {
                              for (var a = 0; a < s.length; a++)
                                if (!o(s[a], a, s)) return !1;
                              return !0;
                            })(x, function (s) {
                              return !!s.error;
                            }) && o(!0);
                            return;
                          }
                          apply(x, function (s) {
                            s.forceMinPriority(a.transport.priority);
                          }),
                            o(null, a);
                        })
                      );
                    })),
                    {
                      abort: function () {
                        apply(a, abortRunner);
                      },
                      forceMinPriority: function (s) {
                        apply(a, function (o) {
                          o.forceMinPriority(s);
                        });
                      },
                    }
                  );
                }
              };
              function abortRunner(s) {
                s.error || s.aborted || (s.abort(), (s.aborted = !0));
              }
              let websocket_prioritized_cached_strategy_WebSocketPrioritizedCachedStrategy = class websocket_prioritized_cached_strategy_WebSocketPrioritizedCachedStrategy {
                constructor(s, o, a) {
                  (this.strategy = s),
                    (this.transports = o),
                    (this.ttl = a.ttl || 18e5),
                    (this.usingTLS = a.useTLS),
                    (this.timeline = a.timeline);
                }
                isSupported() {
                  return this.strategy.isSupported();
                }
                connect(s, o) {
                  var a = this.usingTLS,
                    c = (function (s) {
                      var o = ex.getLocalStorage();
                      if (o)
                        try {
                          var a = o[getTransportCacheKey(s)];
                          if (a) return JSON.parse(a);
                        } catch (o) {
                          flushTransportCache(s);
                        }
                      return null;
                    })(a),
                    g = c && c.cacheSkipCount ? c.cacheSkipCount : 0,
                    w = [this.strategy];
                  if (c && c.timestamp + this.ttl >= et.now()) {
                    var k = this.transports[c.transport];
                    k &&
                      (["ws", "wss"].includes(c.transport) || g > 3
                        ? (this.timeline.info({
                            cached: !0,
                            transport: c.transport,
                            latency: c.latency,
                          }),
                          w.push(
                            new sequential_strategy_SequentialStrategy([k], {
                              timeout: 2 * c.latency + 1e3,
                              failFast: !0,
                            })
                          ))
                        : g++);
                  }
                  var x = et.now(),
                    P = w.pop().connect(s, function cb(c, k) {
                      c
                        ? (flushTransportCache(a),
                          w.length > 0
                            ? ((x = et.now()), (P = w.pop().connect(s, cb)))
                            : o(c))
                        : ((function (s, o, a, c) {
                            var g = ex.getLocalStorage();
                            if (g)
                              try {
                                g[getTransportCacheKey(s)] = safeJSONStringify({
                                  timestamp: et.now(),
                                  transport: o,
                                  latency: a,
                                  cacheSkipCount: c,
                                });
                              } catch (s) {}
                          })(a, k.transport.name, et.now() - x, g),
                          o(null, k));
                    });
                  return {
                    abort: function () {
                      P.abort();
                    },
                    forceMinPriority: function (o) {
                      (s = o), P && P.forceMinPriority(o);
                    },
                  };
                }
              };
              function getTransportCacheKey(s) {
                return "pusherTransport" + (s ? "TLS" : "NonTLS");
              }
              function flushTransportCache(s) {
                var o = ex.getLocalStorage();
                if (o)
                  try {
                    delete o[getTransportCacheKey(s)];
                  } catch (s) {}
              }
              let delayed_strategy_DelayedStrategy = class delayed_strategy_DelayedStrategy {
                constructor(s, { delay: o }) {
                  (this.strategy = s), (this.options = { delay: o });
                }
                isSupported() {
                  return this.strategy.isSupported();
                }
                connect(s, o) {
                  var a,
                    c = this.strategy,
                    g = new timers_OneOffTimer(this.options.delay, function () {
                      a = c.connect(s, o);
                    });
                  return {
                    abort: function () {
                      g.ensureAborted(), a && a.abort();
                    },
                    forceMinPriority: function (o) {
                      (s = o), a && a.forceMinPriority(o);
                    },
                  };
                }
              };
              let IfStrategy = class IfStrategy {
                constructor(s, o, a) {
                  (this.test = s), (this.trueBranch = o), (this.falseBranch = a);
                }
                isSupported() {
                  return (
                    this.test() ? this.trueBranch : this.falseBranch
                  ).isSupported();
                }
                connect(s, o) {
                  return (
                    this.test() ? this.trueBranch : this.falseBranch
                  ).connect(s, o);
                }
              };
              let FirstConnectedStrategy = class FirstConnectedStrategy {
                constructor(s) {
                  this.strategy = s;
                }
                isSupported() {
                  return this.strategy.isSupported();
                }
                connect(s, o) {
                  var a = this.strategy.connect(s, function (s, c) {
                    c && a.abort(), o(s, c);
                  });
                  return a;
                }
              };
              function testSupportsStrategy(s) {
                return function () {
                  return s.isSupported();
                };
              }
              var ev = {
                getRequest: function (s) {
                  var o = new window.XDomainRequest();
                  return (
                    (o.ontimeout = function () {
                      s.emit("error", new RequestTimedOut()), s.close();
                    }),
                    (o.onerror = function (o) {
                      s.emit("error", o), s.close();
                    }),
                    (o.onprogress = function () {
                      o.responseText &&
                        o.responseText.length > 0 &&
                        s.onChunk(200, o.responseText);
                    }),
                    (o.onload = function () {
                      o.responseText &&
                        o.responseText.length > 0 &&
                        s.onChunk(200, o.responseText),
                        s.emit("finished", 200),
                        s.close();
                    }),
                    o
                  );
                },
                abortRequest: function (s) {
                  (s.ontimeout = s.onerror = s.onprogress = s.onload = null),
                    s.abort();
                },
              };
              let http_request_HTTPRequest = class http_request_HTTPRequest extends dispatcher_Dispatcher {
                constructor(s, o, a) {
                  super(), (this.hooks = s), (this.method = o), (this.url = a);
                }
                start(s) {
                  (this.position = 0),
                    (this.xhr = this.hooks.getRequest(this)),
                    (this.unloader = () => {
                      this.close();
                    }),
                    ex.addUnloadListener(this.unloader),
                    this.xhr.open(this.method, this.url, !0),
                    this.xhr.setRequestHeader &&
                      this.xhr.setRequestHeader(
                        "Content-Type",
                        "application/json"
                      ),
                    this.xhr.send(s);
                }
                close() {
                  this.unloader &&
                    (ex.removeUnloadListener(this.unloader),
                    (this.unloader = null)),
                    this.xhr &&
                      (this.hooks.abortRequest(this.xhr), (this.xhr = null));
                }
                onChunk(s, o) {
                  for (;;) {
                    var a = this.advanceBuffer(o);
                    if (a) this.emit("chunk", { status: s, data: a });
                    else break;
                  }
                  this.isBufferTooLong(o) && this.emit("buffer_too_long");
                }
                advanceBuffer(s) {
                  var o = s.slice(this.position),
                    a = o.indexOf("\n");
                  return -1 !== a
                    ? ((this.position += a + 1), o.slice(0, a))
                    : null;
                }
                isBufferTooLong(s) {
                  return this.position === s.length && s.length > 262144;
                }
              };
              ((g = x || (x = {}))[(g.CONNECTING = 0)] = "CONNECTING"),
                (g[(g.OPEN = 1)] = "OPEN"),
                (g[(g.CLOSED = 3)] = "CLOSED");
              var eb = x,
                e_ = 1;
              function getUniqueURL(s) {
                var o = -1 === s.indexOf("?") ? "?" : "&";
                return s + o + "t=" + +new Date() + "&n=" + e_++;
              }
              function randomNumber(s) {
                return ex.randomInt(s);
              }
              var ew = class {
                  constructor(s, o) {
                    var a;
                    (this.hooks = s),
                      (this.session =
                        randomNumber(1e3) +
                        "/" +
                        (function (s) {
                          for (var o = [], a = 0; a < 8; a++)
                            o.push(randomNumber(32).toString(32));
                          return o.join("");
                        })(0)),
                      (this.location = {
                        base: (a = /([^\?]*)\/*(\??.*)/.exec(o))[1],
                        queryString: a[2],
                      }),
                      (this.readyState = eb.CONNECTING),
                      this.openStream();
                  }
                  send(s) {
                    return this.sendRaw(JSON.stringify([s]));
                  }
                  ping() {
                    this.hooks.sendHeartbeat(this);
                  }
                  close(s, o) {
                    this.onClose(s, o, !0);
                  }
                  sendRaw(s) {
                    if (this.readyState !== eb.OPEN) return !1;
                    try {
                      var o, a;
                      return (
                        ex
                          .createSocketRequest(
                            "POST",
                            getUniqueURL(
                              ((o = this.location),
                              (a = this.session),
                              o.base + "/" + a + "/xhr_send")
                            )
                          )
                          .start(s),
                        !0
                      );
                    } catch (s) {
                      return !1;
                    }
                  }
                  reconnect() {
                    this.closeStream(), this.openStream();
                  }
                  onClose(s, o, a) {
                    this.closeStream(),
                      (this.readyState = eb.CLOSED),
                      this.onclose &&
                        this.onclose({ code: s, reason: o, wasClean: a });
                  }
                  onChunk(s) {
                    if (200 === s.status)
                      switch (
                        (this.readyState === eb.OPEN && this.onActivity(),
                        s.data.slice(0, 1))
                      ) {
                        case "o":
                          (o = JSON.parse(s.data.slice(1) || "{}")),
                            this.onOpen(o);
                          break;
                        case "a":
                          o = JSON.parse(s.data.slice(1) || "[]");
                          for (var o, a = 0; a < o.length; a++)
                            this.onEvent(o[a]);
                          break;
                        case "m":
                          (o = JSON.parse(s.data.slice(1) || "null")),
                            this.onEvent(o);
                          break;
                        case "h":
                          this.hooks.onHeartbeat(this);
                          break;
                        case "c":
                          (o = JSON.parse(s.data.slice(1) || "[]")),
                            this.onClose(o[0], o[1], !0);
                      }
                  }
                  onOpen(s) {
                    var o, a, c;
                    this.readyState === eb.CONNECTING
                      ? (s &&
                          s.hostname &&
                          (this.location.base =
                            ((o = this.location.base),
                            (a = s.hostname),
                            (c = /(https?:\/\/)([^\/:]+)((\/|:)?.*)/.exec(o))[1] +
                              a +
                              c[3])),
                        (this.readyState = eb.OPEN),
                        this.onopen && this.onopen())
                      : this.onClose(1006, "Server lost session", !0);
                  }
                  onEvent(s) {
                    this.readyState === eb.OPEN &&
                      this.onmessage &&
                      this.onmessage({ data: s });
                  }
                  onActivity() {
                    this.onactivity && this.onactivity();
                  }
                  onError(s) {
                    this.onerror && this.onerror(s);
                  }
                  openStream() {
                    (this.stream = ex.createSocketRequest(
                      "POST",
                      getUniqueURL(
                        this.hooks.getReceiveURL(this.location, this.session)
                      )
                    )),
                      this.stream.bind("chunk", (s) => {
                        this.onChunk(s);
                      }),
                      this.stream.bind("finished", (s) => {
                        this.hooks.onFinished(this, s);
                      }),
                      this.stream.bind("buffer_too_long", () => {
                        this.reconnect();
                      });
                    try {
                      this.stream.start();
                    } catch (s) {
                      et.defer(() => {
                        this.onError(s),
                          this.onClose(1006, "Could not start streaming", !1);
                      });
                    }
                  }
                  closeStream() {
                    this.stream &&
                      (this.stream.unbind_all(),
                      this.stream.close(),
                      (this.stream = null));
                  }
                },
                eS = {
                  getReceiveURL: function (s, o) {
                    return s.base + "/" + o + "/xhr_streaming" + s.queryString;
                  },
                  onHeartbeat: function (s) {
                    s.sendRaw("[]");
                  },
                  sendHeartbeat: function (s) {
                    s.sendRaw("[]");
                  },
                  onFinished: function (s, o) {
                    s.onClose(1006, "Connection interrupted (" + o + ")", !1);
                  },
                },
                eE = {
                  getReceiveURL: function (s, o) {
                    return s.base + "/" + o + "/xhr" + s.queryString;
                  },
                  onHeartbeat: function () {},
                  sendHeartbeat: function (s) {
                    s.sendRaw("[]");
                  },
                  onFinished: function (s, o) {
                    200 === o
                      ? s.reconnect()
                      : s.onClose(1006, "Connection interrupted (" + o + ")", !1);
                  },
                },
                eC = {
                  getRequest: function (s) {
                    var o = new (ex.getXHRAPI())();
                    return (
                      (o.onreadystatechange = o.onprogress =
                        function () {
                          switch (o.readyState) {
                            case 3:
                              o.responseText &&
                                o.responseText.length > 0 &&
                                s.onChunk(o.status, o.responseText);
                              break;
                            case 4:
                              o.responseText &&
                                o.responseText.length > 0 &&
                                s.onChunk(o.status, o.responseText),
                                s.emit("finished", o.status),
                                s.close();
                          }
                        }),
                      o
                    );
                  },
                  abortRequest: function (s) {
                    (s.onreadystatechange = null), s.abort();
                  },
                },
                ek = {
                  createStreamingSocket(s) {
                    return this.createSocket(eS, s);
                  },
                  createPollingSocket(s) {
                    return this.createSocket(eE, s);
                  },
                  createSocket: (s, o) => new ew(s, o),
                  createXHR(s, o) {
                    return this.createRequest(eC, s, o);
                  },
                  createRequest: (s, o, a) =>
                    new http_request_HTTPRequest(s, o, a),
                };
              ek.createXDR = function (s, o) {
                return this.createRequest(ev, s, o);
              };
              var ex = {
                nextAuthCallbackID: 1,
                auth_callbacks: {},
                ScriptReceivers: A,
                DependenciesReceivers: D,
                getDefaultStrategy: function (s, o, a) {
                  var c,
                    g = {};
                  function defineTransportStrategy(o, c, w, k, x) {
                    var P = a(s, o, c, w, k, x);
                    return (g[o] = P), P;
                  }
                  var w = Object.assign({}, o, {
                      hostNonTLS: s.wsHost + ":" + s.wsPort,
                      hostTLS: s.wsHost + ":" + s.wssPort,
                      httpPath: s.wsPath,
                    }),
                    k = Object.assign({}, w, { useTLS: !0 }),
                    x = Object.assign({}, o, {
                      hostNonTLS: s.httpHost + ":" + s.httpPort,
                      hostTLS: s.httpHost + ":" + s.httpsPort,
                      httpPath: s.httpPath,
                    }),
                    P = { loop: !0, timeout: 15e3, timeoutLimit: 6e4 },
                    A = new transport_manager_TransportManager({
                      minPingDelay: 1e4,
                      maxPingDelay: s.activityTimeout,
                    }),
                    j = new transport_manager_TransportManager({
                      lives: 2,
                      minPingDelay: 1e4,
                      maxPingDelay: s.activityTimeout,
                    }),
                    D = defineTransportStrategy("ws", "ws", 3, w, A),
                    z = defineTransportStrategy("wss", "ws", 3, k, A),
                    $ = defineTransportStrategy("sockjs", "sockjs", 1, x),
                    W = defineTransportStrategy(
                      "xhr_streaming",
                      "xhr_streaming",
                      1,
                      x,
                      j
                    ),
                    G = defineTransportStrategy(
                      "xdr_streaming",
                      "xdr_streaming",
                      1,
                      x,
                      j
                    ),
                    V = defineTransportStrategy(
                      "xhr_polling",
                      "xhr_polling",
                      1,
                      x
                    ),
                    K = defineTransportStrategy(
                      "xdr_polling",
                      "xdr_polling",
                      1,
                      x
                    ),
                    X = new sequential_strategy_SequentialStrategy([D], P),
                    Z = new sequential_strategy_SequentialStrategy([z], P),
                    Y = new sequential_strategy_SequentialStrategy([$], P),
                    ee = new sequential_strategy_SequentialStrategy(
                      [new IfStrategy(testSupportsStrategy(W), W, G)],
                      P
                    ),
                    et = new sequential_strategy_SequentialStrategy(
                      [new IfStrategy(testSupportsStrategy(V), V, K)],
                      P
                    ),
                    er = new sequential_strategy_SequentialStrategy(
                      [
                        new IfStrategy(
                          testSupportsStrategy(ee),
                          new best_connected_ever_strategy_BestConnectedEverStrategy(
                            [
                              ee,
                              new delayed_strategy_DelayedStrategy(et, {
                                delay: 4e3,
                              }),
                            ]
                          ),
                          et
                        ),
                      ],
                      P
                    ),
                    en = new IfStrategy(testSupportsStrategy(er), er, Y);
                  return (
                    (c =
                      new best_connected_ever_strategy_BestConnectedEverStrategy(
                        o.useTLS
                          ? [
                              X,
                              new delayed_strategy_DelayedStrategy(en, {
                                delay: 2e3,
                              }),
                            ]
                          : [
                              X,
                              new delayed_strategy_DelayedStrategy(Z, {
                                delay: 2e3,
                              }),
                              new delayed_strategy_DelayedStrategy(en, {
                                delay: 5e3,
                              }),
                            ]
                      )),
                    new websocket_prioritized_cached_strategy_WebSocketPrioritizedCachedStrategy(
                      new FirstConnectedStrategy(
                        new IfStrategy(testSupportsStrategy(D), c, en)
                      ),
                      g,
                      { ttl: 18e5, timeline: o.timeline, useTLS: o.useTLS }
                    )
                  );
                },
                Transports: eu,
                transportConnectionInitializer: function () {
                  var s = this;
                  s.timeline.info(
                    s.buildTimelineMessage({
                      transport: s.name + (s.options.useTLS ? "s" : ""),
                    })
                  ),
                    s.hooks.isInitialized()
                      ? s.changeState("initialized")
                      : s.hooks.file
                      ? (s.changeState("initializing"),
                        z.load(
                          s.hooks.file,
                          { useTLS: s.options.useTLS },
                          function (o, a) {
                            s.hooks.isInitialized()
                              ? (s.changeState("initialized"), a(!0))
                              : (o && s.onError(o), s.onClose(), a(!1));
                          }
                        ))
                      : s.onClose();
                },
                HTTPFactory: ek,
                TimelineTransport: {
                  name: "jsonp",
                  getAgent: function (s, o) {
                    return function (a, c) {
                      var g =
                          "http" +
                          (o ? "s" : "") +
                          "://" +
                          (s.host || s.options.host) +
                          s.options.path,
                        w = ex.createJSONPRequest(g, a),
                        k = ex.ScriptReceivers.create(function (o, a) {
                          A.remove(k),
                            w.cleanup(),
                            a && a.host && (s.host = a.host),
                            c && c(o, a);
                        });
                      w.send(k);
                    };
                  },
                },
                getXHRAPI: () => window.XMLHttpRequest,
                getWebSocketAPI: () => window.WebSocket || window.MozWebSocket,
                setup(s) {
                  window.Pusher = s;
                  var initializeOnDocumentBody = () => {
                    this.onDocumentBody(s.ready);
                  };
                  window.JSON
                    ? initializeOnDocumentBody()
                    : z.load("json2", {}, initializeOnDocumentBody);
                },
                getDocument: () => document,
                getProtocol() {
                  return this.getDocument().location.protocol;
                },
                getAuthorizers: () => ({ ajax: xhr_auth, jsonp: jsonp_auth }),
                onDocumentBody(s) {
                  document.body
                    ? s()
                    : setTimeout(() => {
                        this.onDocumentBody(s);
                      }, 0);
                },
                createJSONPRequest: (s, o) =>
                  new jsonp_request_JSONPRequest(s, o),
                createScriptRequest: (s) => new ScriptRequest(s),
                getLocalStorage() {
                  try {
                    return window.localStorage;
                  } catch (s) {
                    return;
                  }
                },
                createXHR() {
                  return this.getXHRAPI()
                    ? this.createXMLHttpRequest()
                    : this.createMicrosoftXHR();
                },
                createXMLHttpRequest() {
                  return new (this.getXHRAPI())();
                },
                createMicrosoftXHR: () => new ActiveXObject("Microsoft.XMLHTTP"),
                getNetwork: () => ef,
                createWebSocket(s) {
                  return new (this.getWebSocketAPI())(s);
                },
                createSocketRequest(s, o) {
                  if (this.isXHRSupported())
                    return this.HTTPFactory.createXHR(s, o);
                  if (this.isXDRSupported(0 === o.indexOf("https:")))
                    return this.HTTPFactory.createXDR(s, o);
                  throw "Cross-origin HTTP requests are not supported";
                },
                isXHRSupported() {
                  var s = this.getXHRAPI();
                  return !!s && void 0 !== new s().withCredentials;
                },
                isXDRSupported(s) {
                  var o = this.getProtocol();
                  return (
                    !!window.XDomainRequest && o === (s ? "https:" : "http:")
                  );
                },
                addUnloadListener(s) {
                  void 0 !== window.addEventListener
                    ? window.addEventListener("unload", s, !1)
                    : void 0 !== window.attachEvent &&
                      window.attachEvent("onunload", s);
                },
                removeUnloadListener(s) {
                  void 0 !== window.addEventListener
                    ? window.removeEventListener("unload", s, !1)
                    : void 0 !== window.detachEvent &&
                      window.detachEvent("onunload", s);
                },
                randomInt: (s) =>
                  Math.floor(
                    (function () {
                      let s = window.crypto || window.msCrypto,
                        o = s.getRandomValues(new Uint32Array(1))[0];
                      return o / 4294967296;
                    })() * s
                  ),
              };
              ((w = P || (P = {}))[(w.ERROR = 3)] = "ERROR"),
                (w[(w.INFO = 6)] = "INFO"),
                (w[(w.DEBUG = 7)] = "DEBUG");
              var eT = P;
              let timeline_Timeline = class timeline_Timeline {
                constructor(s, o, a) {
                  (this.key = s),
                    (this.session = o),
                    (this.events = []),
                    (this.options = a || {}),
                    (this.sent = 0),
                    (this.uniqueID = 0);
                }
                log(s, o) {
                  s <= this.options.level &&
                    (this.events.push(extend({}, o, { timestamp: et.now() })),
                    this.options.limit &&
                      this.events.length > this.options.limit &&
                      this.events.shift());
                }
                error(s) {
                  this.log(eT.ERROR, s);
                }
                info(s) {
                  this.log(eT.INFO, s);
                }
                debug(s) {
                  this.log(eT.DEBUG, s);
                }
                isEmpty() {
                  return 0 === this.events.length;
                }
                send(s, o) {
                  var a = extend(
                    {
                      session: this.session,
                      bundle: this.sent + 1,
                      key: this.key,
                      lib: "js",
                      version: this.options.version,
                      cluster: this.options.cluster,
                      features: this.options.features,
                      timeline: this.events,
                    },
                    this.options.params
                  );
                  return (
                    (this.events = []),
                    s(a, (s, a) => {
                      !s && this.sent++, o && o(s, a);
                    }),
                    !0
                  );
                }
                generateUniqueID() {
                  return this.uniqueID++, this.uniqueID;
                }
              };
              let transport_strategy_TransportStrategy = class transport_strategy_TransportStrategy {
                constructor(s, o, a, c) {
                  (this.name = s),
                    (this.priority = o),
                    (this.transport = a),
                    (this.options = c || {});
                }
                isSupported() {
                  return this.transport.isSupported({
                    useTLS: this.options.useTLS,
                  });
                }
                connect(s, o) {
                  if (!this.isSupported())
                    return failAttempt(new UnsupportedStrategy(), o);
                  if (this.priority < s)
                    return failAttempt(new TransportPriorityTooLow(), o);
                  var a = !1,
                    c = this.transport.createConnection(
                      this.name,
                      this.priority,
                      this.options.key,
                      this.options
                    ),
                    g = null,
                    onInitialized = function () {
                      c.unbind("initialized", onInitialized), c.connect();
                    },
                    onOpen = function () {
                      g = em.createHandshake(c, function (s) {
                        (a = !0), unbindListeners(), o(null, s);
                      });
                    },
                    onError = function (s) {
                      unbindListeners(), o(s);
                    },
                    onClosed = function () {
                      var s;
                      unbindListeners(),
                        (s = safeJSONStringify(c)),
                        o(new TransportClosed(s));
                    },
                    unbindListeners = function () {
                      c.unbind("initialized", onInitialized),
                        c.unbind("open", onOpen),
                        c.unbind("error", onError),
                        c.unbind("closed", onClosed);
                    };
                  return (
                    c.bind("initialized", onInitialized),
                    c.bind("open", onOpen),
                    c.bind("error", onError),
                    c.bind("closed", onClosed),
                    c.initialize(),
                    {
                      abort: () => {
                        a || (unbindListeners(), g ? g.close() : c.close());
                      },
                      forceMinPriority: (s) => {
                        !a && this.priority < s && (g ? g.close() : c.close());
                      },
                    }
                  );
                }
              };
              function failAttempt(s, o) {
                return (
                  et.defer(function () {
                    o(s);
                  }),
                  { abort: function () {}, forceMinPriority: function () {} }
                );
              }
              let { Transports: eO } = ex;
              var strategy_builder_defineTransport = function (s, o, a, c, g, w) {
                  var k,
                    x = eO[a];
                  if (!x) throw new UnsupportedTransport(a);
                  return (
                    (s.enabledTransports &&
                      -1 === arrayIndexOf(s.enabledTransports, o)) ||
                    (s.disabledTransports &&
                      -1 !== arrayIndexOf(s.disabledTransports, o))
                      ? (k = eP)
                      : ((g = Object.assign(
                          { ignoreNullOrigin: s.ignoreNullOrigin },
                          g
                        )),
                        (k = new transport_strategy_TransportStrategy(
                          o,
                          c,
                          w ? w.getAssistant(x) : x,
                          g
                        ))),
                    k
                  );
                },
                eP = {
                  isSupported: function () {
                    return !1;
                  },
                  connect: function (s, o) {
                    var a = et.defer(function () {
                      o(new UnsupportedStrategy());
                    });
                    return {
                      abort: function () {
                        a.ensureAborted();
                      },
                      forceMinPriority: function () {},
                    };
                  },
                };
              let composeChannelQuery = (s, o) => {
                var a = "socket_id=" + encodeURIComponent(s.socketId);
                for (var c in o.params)
                  a +=
                    "&" +
                    encodeURIComponent(c) +
                    "=" +
                    encodeURIComponent(o.params[c]);
                if (null != o.paramsProvider) {
                  let s = o.paramsProvider();
                  for (var c in s)
                    a +=
                      "&" +
                      encodeURIComponent(c) +
                      "=" +
                      encodeURIComponent(s[c]);
                }
                return a;
              };
              var user_authenticator = (s) => {
                if (void 0 === ex.getAuthorizers()[s.transport])
                  throw `'${s.transport}' is not a recognized auth transport`;
                return (o, a) => {
                  let c = composeChannelQuery(o, s);
                  ex.getAuthorizers()[s.transport](
                    ex,
                    c,
                    s,
                    k.UserAuthentication,
                    a
                  );
                };
              };
              let channel_authorizer_composeChannelQuery = (s, o) => {
                var a = "socket_id=" + encodeURIComponent(s.socketId);
                for (var c in ((a +=
                  "&channel_name=" + encodeURIComponent(s.channelName)),
                o.params))
                  a +=
                    "&" +
                    encodeURIComponent(c) +
                    "=" +
                    encodeURIComponent(o.params[c]);
                if (null != o.paramsProvider) {
                  let s = o.paramsProvider();
                  for (var c in s)
                    a +=
                      "&" +
                      encodeURIComponent(c) +
                      "=" +
                      encodeURIComponent(s[c]);
                }
                return a;
              };
              var channel_authorizer = (s) => {
                if (void 0 === ex.getAuthorizers()[s.transport])
                  throw `'${s.transport}' is not a recognized auth transport`;
                return (o, a) => {
                  let c = channel_authorizer_composeChannelQuery(o, s);
                  ex.getAuthorizers()[s.transport](
                    ex,
                    c,
                    s,
                    k.ChannelAuthorization,
                    a
                  );
                };
              };
              let ChannelAuthorizerProxy = (s, o, a) => {
                let c = {
                  authTransport: o.transport,
                  authEndpoint: o.endpoint,
                  auth: { params: o.params, headers: o.headers },
                };
                return (o, g) => {
                  let w = s.channel(o.channelName),
                    k = a(w, c);
                  k.authorize(o.socketId, g);
                };
              };
              let watchlist_WatchlistFacade = class watchlist_WatchlistFacade extends dispatcher_Dispatcher {
                constructor(s) {
                  super(function (s, o) {
                    er.debug(`No callbacks on watchlist events for ${s}`);
                  }),
                    (this.pusher = s),
                    this.bindWatchlistInternalEvent();
                }
                handleEvent(s) {
                  s.data.events.forEach((s) => {
                    this.emit(s.name, s);
                  });
                }
                bindWatchlistInternalEvent() {
                  this.pusher.connection.bind("message", (s) => {
                    "pusher_internal:watchlist_events" === s.event &&
                      this.handleEvent(s);
                  });
                }
              };
              var flat_promise = function () {
                let s, o;
                let a = new Promise((a, c) => {
                  (s = a), (o = c);
                });
                return { promise: a, resolve: s, reject: o };
              };
              let user_UserFacade = class user_UserFacade extends dispatcher_Dispatcher {
                constructor(s) {
                  super(function (s, o) {
                    er.debug("No callbacks on user for " + s);
                  }),
                    (this.signin_requested = !1),
                    (this.user_data = null),
                    (this.serverToUserChannel = null),
                    (this.signinDonePromise = null),
                    (this._signinDoneResolve = null),
                    (this._onAuthorize = (s, o) => {
                      if (s) {
                        er.warn(`Error during signin: ${s}`), this._cleanup();
                        return;
                      }
                      this.pusher.send_event("pusher:signin", {
                        auth: o.auth,
                        user_data: o.user_data,
                      });
                    }),
                    (this.pusher = s),
                    this.pusher.connection.bind(
                      "state_change",
                      ({ previous: s, current: o }) => {
                        "connected" !== s && "connected" === o && this._signin(),
                          "connected" === s &&
                            "connected" !== o &&
                            (this._cleanup(), this._newSigninPromiseIfNeeded());
                      }
                    ),
                    (this.watchlist = new watchlist_WatchlistFacade(s)),
                    this.pusher.connection.bind("message", (s) => {
                      "pusher:signin_success" === s.event &&
                        this._onSigninSuccess(s.data),
                        this.serverToUserChannel &&
                          this.serverToUserChannel.name === s.channel &&
                          this.serverToUserChannel.handleEvent(s);
                    });
                }
                signin() {
                  this.signin_requested ||
                    ((this.signin_requested = !0), this._signin());
                }
                _signin() {
                  this.signin_requested &&
                    (this._newSigninPromiseIfNeeded(),
                    "connected" === this.pusher.connection.state &&
                      this.pusher.config.userAuthenticator(
                        { socketId: this.pusher.connection.socket_id },
                        this._onAuthorize
                      ));
                }
                _onSigninSuccess(s) {
                  try {
                    this.user_data = JSON.parse(s.user_data);
                  } catch (o) {
                    er.error(
                      `Failed parsing user data after signin: ${s.user_data}`
                    ),
                      this._cleanup();
                    return;
                  }
                  if (
                    "string" != typeof this.user_data.id ||
                    "" === this.user_data.id
                  ) {
                    er.error(
                      `user_data doesn't contain an id. user_data: ${this.user_data}`
                    ),
                      this._cleanup();
                    return;
                  }
                  this._signinDoneResolve(), this._subscribeChannels();
                }
                _subscribeChannels() {
                  (this.serverToUserChannel = new channel_Channel(
                    `#server-to-user-${this.user_data.id}`,
                    this.pusher
                  )),
                    this.serverToUserChannel.bind_global((s, o) => {
                      0 !== s.indexOf("pusher_internal:") &&
                        0 !== s.indexOf("pusher:") &&
                        this.emit(s, o);
                    }),
                    ((s) => {
                      s.subscriptionPending && s.subscriptionCancelled
                        ? s.reinstateSubscription()
                        : s.subscriptionPending ||
                          "connected" !== this.pusher.connection.state ||
                          s.subscribe();
                    })(this.serverToUserChannel);
                }
                _cleanup() {
                  (this.user_data = null),
                    this.serverToUserChannel &&
                      (this.serverToUserChannel.unbind_all(),
                      this.serverToUserChannel.disconnect(),
                      (this.serverToUserChannel = null)),
                    this.signin_requested && this._signinDoneResolve();
                }
                _newSigninPromiseIfNeeded() {
                  if (
                    !this.signin_requested ||
                    (this.signinDonePromise && !this.signinDonePromise.done)
                  )
                    return;
                  let { promise: s, resolve: o, reject: a } = flat_promise();
                  s.done = !1;
                  let setDone = () => {
                    s.done = !0;
                  };
                  s.then(setDone).catch(setDone),
                    (this.signinDonePromise = s),
                    (this._signinDoneResolve = o);
                }
              };
              let pusher_Pusher = class pusher_Pusher {
                static ready() {
                  pusher_Pusher.isReady = !0;
                  for (var s = 0, o = pusher_Pusher.instances.length; s < o; s++)
                    pusher_Pusher.instances[s].connect();
                }
                static getClientFeatures() {
                  return keys(
                    filterObject({ ws: ex.Transports.ws }, function (s) {
                      return s.isSupported({});
                    })
                  );
                }
                constructor(s, o) {
                  var a;
                  let c;
                  (function (s) {
                    if (null == s)
                      throw "You must pass your app key when you instantiate Pusher.";
                  })(s),
                    (function (s) {
                      if (null == s) throw "You must pass an options object";
                      if (null == s.cluster)
                        throw "Options object must provide a cluster";
                      "disableStats" in s &&
                        er.warn(
                          "The disableStats option is deprecated in favor of enableStats"
                        );
                    })(o),
                    (this.key = s),
                    (this.config =
                      ((c = {
                        activityTimeout: o.activityTimeout || j.activityTimeout,
                        cluster: o.cluster,
                        httpPath: o.httpPath || j.httpPath,
                        httpPort: o.httpPort || j.httpPort,
                        httpsPort: o.httpsPort || j.httpsPort,
                        pongTimeout: o.pongTimeout || j.pongTimeout,
                        statsHost: o.statsHost || j.stats_host,
                        unavailableTimeout:
                          o.unavailableTimeout || j.unavailableTimeout,
                        wsPath: o.wsPath || j.wsPath,
                        wsPort: o.wsPort || j.wsPort,
                        wssPort: o.wssPort || j.wssPort,
                        enableStats:
                          "enableStats" in o
                            ? o.enableStats
                            : "disableStats" in o && !o.disableStats,
                        httpHost: o.httpHost
                          ? o.httpHost
                          : o.cluster
                          ? `sockjs-${o.cluster}.pusher.com`
                          : j.httpHost,
                        useTLS: (function (s) {
                          if ("https:" === ex.getProtocol());
                          else if (!1 === s.forceTLS) return !1;
                          return !0;
                        })(o),
                        wsHost: o.wsHost
                          ? o.wsHost
                          : ((a = o.cluster), `ws-${a}.pusher.com`),
                        userAuthenticator: (function (s) {
                          let o = Object.assign(
                            Object.assign({}, j.userAuthentication),
                            s.userAuthentication
                          );
                          return "customHandler" in o && null != o.customHandler
                            ? o.customHandler
                            : user_authenticator(o);
                        })(o),
                        channelAuthorizer: (function (s, o) {
                          let a;
                          let c =
                            ("channelAuthorization" in s
                              ? (a = Object.assign(
                                  Object.assign({}, j.channelAuthorization),
                                  s.channelAuthorization
                                ))
                              : ((a = {
                                  transport: s.authTransport || j.authTransport,
                                  endpoint: s.authEndpoint || j.authEndpoint,
                                }),
                                "auth" in s &&
                                  ("params" in s.auth &&
                                    (a.params = s.auth.params),
                                  "headers" in s.auth &&
                                    (a.headers = s.auth.headers)),
                                "authorizer" in s &&
                                  (a.customHandler = ChannelAuthorizerProxy(
                                    o,
                                    a,
                                    s.authorizer
                                  ))),
                            a);
                          return "customHandler" in c && null != c.customHandler
                            ? c.customHandler
                            : channel_authorizer(c);
                        })(o, this),
                      }),
                      "disabledTransports" in o &&
                        (c.disabledTransports = o.disabledTransports),
                      "enabledTransports" in o &&
                        (c.enabledTransports = o.enabledTransports),
                      "ignoreNullOrigin" in o &&
                        (c.ignoreNullOrigin = o.ignoreNullOrigin),
                      "timelineParams" in o &&
                        (c.timelineParams = o.timelineParams),
                      "nacl" in o && (c.nacl = o.nacl),
                      c)),
                    (this.channels = em.createChannels()),
                    (this.global_emitter = new dispatcher_Dispatcher()),
                    (this.sessionID = ex.randomInt(1e9)),
                    (this.timeline = new timeline_Timeline(
                      this.key,
                      this.sessionID,
                      {
                        cluster: this.config.cluster,
                        features: pusher_Pusher.getClientFeatures(),
                        params: this.config.timelineParams || {},
                        limit: 50,
                        level: eT.INFO,
                        version: j.VERSION,
                      }
                    )),
                    this.config.enableStats &&
                      (this.timelineSender = em.createTimelineSender(
                        this.timeline,
                        {
                          host: this.config.statsHost,
                          path: "/timeline/v2/" + ex.TimelineTransport.name,
                        }
                      )),
                    (this.connection = em.createConnectionManager(this.key, {
                      getStrategy: (s) =>
                        ex.getDefaultStrategy(
                          this.config,
                          s,
                          strategy_builder_defineTransport
                        ),
                      timeline: this.timeline,
                      activityTimeout: this.config.activityTimeout,
                      pongTimeout: this.config.pongTimeout,
                      unavailableTimeout: this.config.unavailableTimeout,
                      useTLS: !!this.config.useTLS,
                    })),
                    this.connection.bind("connected", () => {
                      this.subscribeAll(),
                        this.timelineSender &&
                          this.timelineSender.send(this.connection.isUsingTLS());
                    }),
                    this.connection.bind("message", (s) => {
                      var o = 0 === s.event.indexOf("pusher_internal:");
                      if (s.channel) {
                        var a = this.channel(s.channel);
                        a && a.handleEvent(s);
                      }
                      o || this.global_emitter.emit(s.event, s.data);
                    }),
                    this.connection.bind("connecting", () => {
                      this.channels.disconnect();
                    }),
                    this.connection.bind("disconnected", () => {
                      this.channels.disconnect();
                    }),
                    this.connection.bind("error", (s) => {
                      er.warn(s);
                    }),
                    pusher_Pusher.instances.push(this),
                    this.timeline.info({
                      instances: pusher_Pusher.instances.length,
                    }),
                    (this.user = new user_UserFacade(this)),
                    pusher_Pusher.isReady && this.connect();
                }
                channel(s) {
                  return this.channels.find(s);
                }
                allChannels() {
                  return this.channels.all();
                }
                connect() {
                  if (
                    (this.connection.connect(),
                    this.timelineSender && !this.timelineSenderTimer)
                  ) {
                    var s = this.connection.isUsingTLS(),
                      o = this.timelineSender;
                    this.timelineSenderTimer = new timers_PeriodicTimer(
                      6e4,
                      function () {
                        o.send(s);
                      }
                    );
                  }
                }
                disconnect() {
                  this.connection.disconnect(),
                    this.timelineSenderTimer &&
                      (this.timelineSenderTimer.ensureAborted(),
                      (this.timelineSenderTimer = null));
                }
                bind(s, o, a) {
                  return this.global_emitter.bind(s, o, a), this;
                }
                unbind(s, o, a) {
                  return this.global_emitter.unbind(s, o, a), this;
                }
                bind_global(s) {
                  return this.global_emitter.bind_global(s), this;
                }
                unbind_global(s) {
                  return this.global_emitter.unbind_global(s), this;
                }
                unbind_all(s) {
                  return this.global_emitter.unbind_all(), this;
                }
                subscribeAll() {
                  var s;
                  for (s in this.channels.channels)
                    this.channels.channels.hasOwnProperty(s) && this.subscribe(s);
                }
                subscribe(s) {
                  var o = this.channels.add(s, this);
                  return (
                    o.subscriptionPending && o.subscriptionCancelled
                      ? o.reinstateSubscription()
                      : o.subscriptionPending ||
                        "connected" !== this.connection.state ||
                        o.subscribe(),
                    o
                  );
                }
                unsubscribe(s) {
                  var o = this.channels.find(s);
                  o && o.subscriptionPending
                    ? o.cancelSubscription()
                    : (o = this.channels.remove(s)) &&
                      o.subscribed &&
                      o.unsubscribe();
                }
                send_event(s, o, a) {
                  return this.connection.send_event(s, o, a);
                }
                shouldUseTLS() {
                  return this.config.useTLS;
                }
                signin() {
                  this.user.signin();
                }
              };
              (pusher_Pusher.instances = []),
                (pusher_Pusher.isReady = !1),
                (pusher_Pusher.logToConsole = !1),
                (pusher_Pusher.Runtime = ex),
                (pusher_Pusher.ScriptReceivers = ex.ScriptReceivers),
                (pusher_Pusher.DependenciesReceivers = ex.DependenciesReceivers),
                (pusher_Pusher.auth_callbacks = ex.auth_callbacks);
              var eA = (o.default = pusher_Pusher);
              ex.setup(pusher_Pusher);
            },
          ]));
      },
      8555: function (s) {
        "use strict";
        s.exports = { stdout: !1, stderr: !1 };
      },
      42480: function () {},
      73897: function (s) {
        (s.exports = function (s, o) {
          (null == o || o > s.length) && (o = s.length);
          for (var a = 0, c = Array(o); a < o; a++) c[a] = s[a];
          return c;
        }),
          (s.exports.__esModule = !0),
          (s.exports.default = s.exports);
      },
      85372: function (s) {
        (s.exports = function (s) {
          if (Array.isArray(s)) return s;
        }),
          (s.exports.__esModule = !0),
          (s.exports.default = s.exports);
      },
      66115: function (s) {
        (s.exports = function (s) {
          if (void 0 === s)
            throw ReferenceError(
              "this hasn't been initialised - super() hasn't been called"
            );
          return s;
        }),
          (s.exports.__esModule = !0),
          (s.exports.default = s.exports);
      },
      17156: function (s) {
        function asyncGeneratorStep(s, o, a, c, g, w, k) {
          try {
            var x = s[w](k),
              P = x.value;
          } catch (s) {
            a(s);
            return;
          }
          x.done ? o(P) : Promise.resolve(P).then(c, g);
        }
        (s.exports = function (s) {
          return function () {
            var o = this,
              a = arguments;
            return new Promise(function (c, g) {
              var w = s.apply(o, a);
              function _next(s) {
                asyncGeneratorStep(w, c, g, _next, _throw, "next", s);
              }
              function _throw(s) {
                asyncGeneratorStep(w, c, g, _next, _throw, "throw", s);
              }
              _next(void 0);
            });
          };
        }),
          (s.exports.__esModule = !0),
          (s.exports.default = s.exports);
      },
      56690: function (s) {
        (s.exports = function (s, o) {
          if (!(s instanceof o))
            throw TypeError("Cannot call a class as a function");
        }),
          (s.exports.__esModule = !0),
          (s.exports.default = s.exports);
      },
      3515: function (s, o, a) {
        var c = a(6015),
          g = a(69617);
        function _construct(o, a, w) {
          return (
            g()
              ? (s.exports = _construct = Reflect.construct.bind())
              : (s.exports = _construct =
                  function (s, o, a) {
                    var g = [null];
                    g.push.apply(g, o);
                    var w = new (Function.bind.apply(s, g))();
                    return a && c(w, a.prototype), w;
                  }),
            (s.exports.__esModule = !0),
            (s.exports.default = s.exports),
            _construct.apply(null, arguments)
          );
        }
        (s.exports = _construct),
          (s.exports.__esModule = !0),
          (s.exports.default = s.exports);
      },
      89728: function (s, o, a) {
        var c = a(64062);
        function _defineProperties(s, o) {
          for (var a = 0; a < o.length; a++) {
            var g = o[a];
            (g.enumerable = g.enumerable || !1),
              (g.configurable = !0),
              "value" in g && (g.writable = !0),
              Object.defineProperty(s, c(g.key), g);
          }
        }
        (s.exports = function (s, o, a) {
          return (
            o && _defineProperties(s.prototype, o),
            a && _defineProperties(s, a),
            Object.defineProperty(s, "prototype", { writable: !1 }),
            s
          );
        }),
          (s.exports.__esModule = !0),
          (s.exports.default = s.exports);
      },
      38416: function (s, o, a) {
        var c = a(64062);
        (s.exports = function (s, o, a) {
          return (
            (o = c(o)) in s
              ? Object.defineProperty(s, o, {
                  value: a,
                  enumerable: !0,
                  configurable: !0,
                  writable: !0,
                })
              : (s[o] = a),
            s
          );
        }),
          (s.exports.__esModule = !0),
          (s.exports.default = s.exports);
      },
      73808: function (s) {
        function _getPrototypeOf(o) {
          return (
            (s.exports = _getPrototypeOf =
              Object.setPrototypeOf
                ? Object.getPrototypeOf.bind()
                : function (s) {
                    return s.__proto__ || Object.getPrototypeOf(s);
                  }),
            (s.exports.__esModule = !0),
            (s.exports.default = s.exports),
            _getPrototypeOf(o)
          );
        }
        (s.exports = _getPrototypeOf),
          (s.exports.__esModule = !0),
          (s.exports.default = s.exports);
      },
      61655: function (s, o, a) {
        var c = a(6015);
        (s.exports = function (s, o) {
          if ("function" != typeof o && null !== o)
            throw TypeError("Super expression must either be null or a function");
          (s.prototype = Object.create(o && o.prototype, {
            constructor: { value: s, writable: !0, configurable: !0 },
          })),
            Object.defineProperty(s, "prototype", { writable: !1 }),
            o && c(s, o);
        }),
          (s.exports.__esModule = !0),
          (s.exports.default = s.exports);
      },
      64836: function (s) {
        (s.exports = function (s) {
          return s && s.__esModule ? s : { default: s };
        }),
          (s.exports.__esModule = !0),
          (s.exports.default = s.exports);
      },
      46035: function (s) {
        (s.exports = function (s) {
          try {
            return -1 !== Function.toString.call(s).indexOf("[native code]");
          } catch (o) {
            return "function" == typeof s;
          }
        }),
          (s.exports.__esModule = !0),
          (s.exports.default = s.exports);
      },
      69617: function (s) {
        (s.exports = function () {
          if (
            "undefined" == typeof Reflect ||
            !Reflect.construct ||
            Reflect.construct.sham
          )
            return !1;
          if ("function" == typeof Proxy) return !0;
          try {
            return (
              Boolean.prototype.valueOf.call(
                Reflect.construct(Boolean, [], function () {})
              ),
              !0
            );
          } catch (s) {
            return !1;
          }
        }),
          (s.exports.__esModule = !0),
          (s.exports.default = s.exports);
      },
      68872: function (s) {
        (s.exports = function (s, o) {
          var a =
            null == s
              ? null
              : ("undefined" != typeof Symbol && s[Symbol.iterator]) ||
                s["@@iterator"];
          if (null != a) {
            var c,
              g,
              w,
              k,
              x = [],
              P = !0,
              A = !1;
            try {
              if (((w = (a = a.call(s)).next), 0 === o)) {
                if (Object(a) !== a) return;
                P = !1;
              } else
                for (
                  ;
                  !(P = (c = w.call(a)).done) &&
                  (x.push(c.value), x.length !== o);
                  P = !0
                );
            } catch (s) {
              (A = !0), (g = s);
            } finally {
              try {
                if (!P && null != a.return && ((k = a.return()), Object(k) !== k))
                  return;
              } finally {
                if (A) throw g;
              }
            }
            return x;
          }
        }),
          (s.exports.__esModule = !0),
          (s.exports.default = s.exports);
      },
      12218: function (s) {
        (s.exports = function () {
          throw TypeError(
            "Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."
          );
        }),
          (s.exports.__esModule = !0),
          (s.exports.default = s.exports);
      },
      94993: function (s, o, a) {
        var c = a(18698).default,
          g = a(66115);
        (s.exports = function (s, o) {
          if (o && ("object" === c(o) || "function" == typeof o)) return o;
          if (void 0 !== o)
            throw TypeError(
              "Derived constructors may only return object or undefined"
            );
          return g(s);
        }),
          (s.exports.__esModule = !0),
          (s.exports.default = s.exports);
      },
      17061: function (s, o, a) {
        var c = a(18698).default;
        function _regeneratorRuntime() {
          "use strict";
          /*! regenerator-runtime -- Copyright (c) 2014-present, Facebook, Inc. -- license (MIT): https://github.com/facebook/regenerator/blob/main/LICENSE */ (s.exports =
            _regeneratorRuntime =
              function () {
                return a;
              }),
            (s.exports.__esModule = !0),
            (s.exports.default = s.exports);
          var o,
            a = {},
            g = Object.prototype,
            w = g.hasOwnProperty,
            k =
              Object.defineProperty ||
              function (s, o, a) {
                s[o] = a.value;
              },
            x = "function" == typeof Symbol ? Symbol : {},
            P = x.iterator || "@@iterator",
            A = x.asyncIterator || "@@asyncIterator",
            j = x.toStringTag || "@@toStringTag";
          function define(s, o, a) {
            return (
              Object.defineProperty(s, o, {
                value: a,
                enumerable: !0,
                configurable: !0,
                writable: !0,
              }),
              s[o]
            );
          }
          try {
            define({}, "");
          } catch (s) {
            define = function (s, o, a) {
              return (s[o] = a);
            };
          }
          function wrap(s, a, c, g) {
            var w,
              x,
              P = Object.create(
                (a && a.prototype instanceof Generator ? a : Generator).prototype
              );
            return (
              k(P, "_invoke", {
                value:
                  ((w = new Context(g || [])),
                  (x = D),
                  function (a, g) {
                    if (x === z) throw Error("Generator is already running");
                    if (x === $) {
                      if ("throw" === a) throw g;
                      return { value: o, done: !0 };
                    }
                    for (w.method = a, w.arg = g; ; ) {
                      var k = w.delegate;
                      if (k) {
                        var P = (function maybeInvokeDelegate(s, a) {
                          var c = a.method,
                            g = s.iterator[c];
                          if (g === o)
                            return (
                              (a.delegate = null),
                              ("throw" === c &&
                                s.iterator.return &&
                                ((a.method = "return"),
                                (a.arg = o),
                                maybeInvokeDelegate(s, a),
                                "throw" === a.method)) ||
                                ("return" !== c &&
                                  ((a.method = "throw"),
                                  (a.arg = TypeError(
                                    "The iterator does not provide a '" +
                                      c +
                                      "' method"
                                  )))),
                              W
                            );
                          var w = tryCatch(g, s.iterator, a.arg);
                          if ("throw" === w.type)
                            return (
                              (a.method = "throw"),
                              (a.arg = w.arg),
                              (a.delegate = null),
                              W
                            );
                          var k = w.arg;
                          return k
                            ? k.done
                              ? ((a[s.resultName] = k.value),
                                (a.next = s.nextLoc),
                                "return" !== a.method &&
                                  ((a.method = "next"), (a.arg = o)),
                                (a.delegate = null),
                                W)
                              : k
                            : ((a.method = "throw"),
                              (a.arg = TypeError(
                                "iterator result is not an object"
                              )),
                              (a.delegate = null),
                              W);
                        })(k, w);
                        if (P) {
                          if (P === W) continue;
                          return P;
                        }
                      }
                      if ("next" === w.method) w.sent = w._sent = w.arg;
                      else if ("throw" === w.method) {
                        if (x === D) throw ((x = $), w.arg);
                        w.dispatchException(w.arg);
                      } else "return" === w.method && w.abrupt("return", w.arg);
                      x = z;
                      var A = tryCatch(s, c, w);
                      if ("normal" === A.type) {
                        if (((x = w.done ? $ : "suspendedYield"), A.arg === W))
                          continue;
                        return { value: A.arg, done: w.done };
                      }
                      "throw" === A.type &&
                        ((x = $), (w.method = "throw"), (w.arg = A.arg));
                    }
                  }),
              }),
              P
            );
          }
          function tryCatch(s, o, a) {
            try {
              return { type: "normal", arg: s.call(o, a) };
            } catch (s) {
              return { type: "throw", arg: s };
            }
          }
          a.wrap = wrap;
          var D = "suspendedStart",
            z = "executing",
            $ = "completed",
            W = {};
          function Generator() {}
          function GeneratorFunction() {}
          function GeneratorFunctionPrototype() {}
          var G = {};
          define(G, P, function () {
            return this;
          });
          var V = Object.getPrototypeOf,
            K = V && V(V(values([])));
          K && K !== g && w.call(K, P) && (G = K);
          var X =
            (GeneratorFunctionPrototype.prototype =
            Generator.prototype =
              Object.create(G));
          function defineIteratorMethods(s) {
            ["next", "throw", "return"].forEach(function (o) {
              define(s, o, function (s) {
                return this._invoke(o, s);
              });
            });
          }
          function AsyncIterator(s, o) {
            var a;
            k(this, "_invoke", {
              value: function (g, k) {
                function callInvokeWithMethodAndArg() {
                  return new o(function (a, x) {
                    !(function invoke(a, g, k, x) {
                      var P = tryCatch(s[a], s, g);
                      if ("throw" !== P.type) {
                        var A = P.arg,
                          j = A.value;
                        return j && "object" == c(j) && w.call(j, "__await")
                          ? o.resolve(j.__await).then(
                              function (s) {
                                invoke("next", s, k, x);
                              },
                              function (s) {
                                invoke("throw", s, k, x);
                              }
                            )
                          : o.resolve(j).then(
                              function (s) {
                                (A.value = s), k(A);
                              },
                              function (s) {
                                return invoke("throw", s, k, x);
                              }
                            );
                      }
                      x(P.arg);
                    })(g, k, a, x);
                  });
                }
                return (a = a
                  ? a.then(callInvokeWithMethodAndArg, callInvokeWithMethodAndArg)
                  : callInvokeWithMethodAndArg());
              },
            });
          }
          function pushTryEntry(s) {
            var o = { tryLoc: s[0] };
            1 in s && (o.catchLoc = s[1]),
              2 in s && ((o.finallyLoc = s[2]), (o.afterLoc = s[3])),
              this.tryEntries.push(o);
          }
          function resetTryEntry(s) {
            var o = s.completion || {};
            (o.type = "normal"), delete o.arg, (s.completion = o);
          }
          function Context(s) {
            (this.tryEntries = [{ tryLoc: "root" }]),
              s.forEach(pushTryEntry, this),
              this.reset(!0);
          }
          function values(s) {
            if (s || "" === s) {
              var a = s[P];
              if (a) return a.call(s);
              if ("function" == typeof s.next) return s;
              if (!isNaN(s.length)) {
                var g = -1,
                  i = function next() {
                    for (; ++g < s.length; )
                      if (w.call(s, g))
                        return (next.value = s[g]), (next.done = !1), next;
                    return (next.value = o), (next.done = !0), next;
                  };
                return (i.next = i);
              }
            }
            throw TypeError(c(s) + " is not iterable");
          }
          return (
            (GeneratorFunction.prototype = GeneratorFunctionPrototype),
            k(X, "constructor", {
              value: GeneratorFunctionPrototype,
              configurable: !0,
            }),
            k(GeneratorFunctionPrototype, "constructor", {
              value: GeneratorFunction,
              configurable: !0,
            }),
            (GeneratorFunction.displayName = define(
              GeneratorFunctionPrototype,
              j,
              "GeneratorFunction"
            )),
            (a.isGeneratorFunction = function (s) {
              var o = "function" == typeof s && s.constructor;
              return (
                !!o &&
                (o === GeneratorFunction ||
                  "GeneratorFunction" === (o.displayName || o.name))
              );
            }),
            (a.mark = function (s) {
              return (
                Object.setPrototypeOf
                  ? Object.setPrototypeOf(s, GeneratorFunctionPrototype)
                  : ((s.__proto__ = GeneratorFunctionPrototype),
                    define(s, j, "GeneratorFunction")),
                (s.prototype = Object.create(X)),
                s
              );
            }),
            (a.awrap = function (s) {
              return { __await: s };
            }),
            defineIteratorMethods(AsyncIterator.prototype),
            define(AsyncIterator.prototype, A, function () {
              return this;
            }),
            (a.AsyncIterator = AsyncIterator),
            (a.async = function (s, o, c, g, w) {
              void 0 === w && (w = Promise);
              var k = new AsyncIterator(wrap(s, o, c, g), w);
              return a.isGeneratorFunction(o)
                ? k
                : k.next().then(function (s) {
                    return s.done ? s.value : k.next();
                  });
            }),
            defineIteratorMethods(X),
            define(X, j, "Generator"),
            define(X, P, function () {
              return this;
            }),
            define(X, "toString", function () {
              return "[object Generator]";
            }),
            (a.keys = function (s) {
              var o = Object(s),
                a = [];
              for (var c in o) a.push(c);
              return (
                a.reverse(),
                function next() {
                  for (; a.length; ) {
                    var s = a.pop();
                    if (s in o) return (next.value = s), (next.done = !1), next;
                  }
                  return (next.done = !0), next;
                }
              );
            }),
            (a.values = values),
            (Context.prototype = {
              constructor: Context,
              reset: function (s) {
                if (
                  ((this.prev = 0),
                  (this.next = 0),
                  (this.sent = this._sent = o),
                  (this.done = !1),
                  (this.delegate = null),
                  (this.method = "next"),
                  (this.arg = o),
                  this.tryEntries.forEach(resetTryEntry),
                  !s)
                )
                  for (var a in this)
                    "t" === a.charAt(0) &&
                      w.call(this, a) &&
                      !isNaN(+a.slice(1)) &&
                      (this[a] = o);
              },
              stop: function () {
                this.done = !0;
                var s = this.tryEntries[0].completion;
                if ("throw" === s.type) throw s.arg;
                return this.rval;
              },
              dispatchException: function (s) {
                if (this.done) throw s;
                var a = this;
                function handle(c, g) {
                  return (
                    (k.type = "throw"),
                    (k.arg = s),
                    (a.next = c),
                    g && ((a.method = "next"), (a.arg = o)),
                    !!g
                  );
                }
                for (var c = this.tryEntries.length - 1; c >= 0; --c) {
                  var g = this.tryEntries[c],
                    k = g.completion;
                  if ("root" === g.tryLoc) return handle("end");
                  if (g.tryLoc <= this.prev) {
                    var x = w.call(g, "catchLoc"),
                      P = w.call(g, "finallyLoc");
                    if (x && P) {
                      if (this.prev < g.catchLoc) return handle(g.catchLoc, !0);
                      if (this.prev < g.finallyLoc) return handle(g.finallyLoc);
                    } else if (x) {
                      if (this.prev < g.catchLoc) return handle(g.catchLoc, !0);
                    } else {
                      if (!P)
                        throw Error("try statement without catch or finally");
                      if (this.prev < g.finallyLoc) return handle(g.finallyLoc);
                    }
                  }
                }
              },
              abrupt: function (s, o) {
                for (var a = this.tryEntries.length - 1; a >= 0; --a) {
                  var c = this.tryEntries[a];
                  if (
                    c.tryLoc <= this.prev &&
                    w.call(c, "finallyLoc") &&
                    this.prev < c.finallyLoc
                  ) {
                    var g = c;
                    break;
                  }
                }
                g &&
                  ("break" === s || "continue" === s) &&
                  g.tryLoc <= o &&
                  o <= g.finallyLoc &&
                  (g = null);
                var k = g ? g.completion : {};
                return (
                  (k.type = s),
                  (k.arg = o),
                  g
                    ? ((this.method = "next"), (this.next = g.finallyLoc), W)
                    : this.complete(k)
                );
              },
              complete: function (s, o) {
                if ("throw" === s.type) throw s.arg;
                return (
                  "break" === s.type || "continue" === s.type
                    ? (this.next = s.arg)
                    : "return" === s.type
                    ? ((this.rval = this.arg = s.arg),
                      (this.method = "return"),
                      (this.next = "end"))
                    : "normal" === s.type && o && (this.next = o),
                  W
                );
              },
              finish: function (s) {
                for (var o = this.tryEntries.length - 1; o >= 0; --o) {
                  var a = this.tryEntries[o];
                  if (a.finallyLoc === s)
                    return (
                      this.complete(a.completion, a.afterLoc), resetTryEntry(a), W
                    );
                }
              },
              catch: function (s) {
                for (var o = this.tryEntries.length - 1; o >= 0; --o) {
                  var a = this.tryEntries[o];
                  if (a.tryLoc === s) {
                    var c = a.completion;
                    if ("throw" === c.type) {
                      var g = c.arg;
                      resetTryEntry(a);
                    }
                    return g;
                  }
                }
                throw Error("illegal catch attempt");
              },
              delegateYield: function (s, a, c) {
                return (
                  (this.delegate = {
                    iterator: values(s),
                    resultName: a,
                    nextLoc: c,
                  }),
                  "next" === this.method && (this.arg = o),
                  W
                );
              },
            }),
            a
          );
        }
        (s.exports = _regeneratorRuntime),
          (s.exports.__esModule = !0),
          (s.exports.default = s.exports);
      },
      6015: function (s) {
        function _setPrototypeOf(o, a) {
          return (
            (s.exports = _setPrototypeOf =
              Object.setPrototypeOf
                ? Object.setPrototypeOf.bind()
                : function (s, o) {
                    return (s.__proto__ = o), s;
                  }),
            (s.exports.__esModule = !0),
            (s.exports.default = s.exports),
            _setPrototypeOf(o, a)
          );
        }
        (s.exports = _setPrototypeOf),
          (s.exports.__esModule = !0),
          (s.exports.default = s.exports);
      },
      27424: function (s, o, a) {
        var c = a(85372),
          g = a(68872),
          w = a(86116),
          k = a(12218);
        (s.exports = function (s, o) {
          return c(s) || g(s, o) || w(s, o) || k();
        }),
          (s.exports.__esModule = !0),
          (s.exports.default = s.exports);
      },
      95036: function (s, o, a) {
        var c = a(18698).default;
        (s.exports = function (s, o) {
          if ("object" !== c(s) || null === s) return s;
          var a = s[Symbol.toPrimitive];
          if (void 0 !== a) {
            var g = a.call(s, o || "default");
            if ("object" !== c(g)) return g;
            throw TypeError("@@toPrimitive must return a primitive value.");
          }
          return ("string" === o ? String : Number)(s);
        }),
          (s.exports.__esModule = !0),
          (s.exports.default = s.exports);
      },
      64062: function (s, o, a) {
        var c = a(18698).default,
          g = a(95036);
        (s.exports = function (s) {
          var o = g(s, "string");
          return "symbol" === c(o) ? o : String(o);
        }),
          (s.exports.__esModule = !0),
          (s.exports.default = s.exports);
      },
      18698: function (s) {
        function _typeof(o) {
          return (
            (s.exports = _typeof =
              "function" == typeof Symbol && "symbol" == typeof Symbol.iterator
                ? function (s) {
                    return typeof s;
                  }
                : function (s) {
                    return s &&
                      "function" == typeof Symbol &&
                      s.constructor === Symbol &&
                      s !== Symbol.prototype
                      ? "symbol"
                      : typeof s;
                  }),
            (s.exports.__esModule = !0),
            (s.exports.default = s.exports),
            _typeof(o)
          );
        }
        (s.exports = _typeof),
          (s.exports.__esModule = !0),
          (s.exports.default = s.exports);
      },
      86116: function (s, o, a) {
        var c = a(73897);
        (s.exports = function (s, o) {
          if (s) {
            if ("string" == typeof s) return c(s, o);
            var a = Object.prototype.toString.call(s).slice(8, -1);
            if (
              ("Object" === a && s.constructor && (a = s.constructor.name),
              "Map" === a || "Set" === a)
            )
              return Array.from(s);
            if (
              "Arguments" === a ||
              /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(a)
            )
              return c(s, o);
          }
        }),
          (s.exports.__esModule = !0),
          (s.exports.default = s.exports);
      },
      33496: function (s, o, a) {
        var c = a(73808),
          g = a(6015),
          w = a(46035),
          k = a(3515);
        function _wrapNativeSuper(o) {
          var a = "function" == typeof Map ? new Map() : void 0;
          return (
            (s.exports = _wrapNativeSuper =
              function (s) {
                if (null === s || !w(s)) return s;
                if ("function" != typeof s)
                  throw TypeError(
                    "Super expression must either be null or a function"
                  );
                if (void 0 !== a) {
                  if (a.has(s)) return a.get(s);
                  a.set(s, Wrapper);
                }
                function Wrapper() {
                  return k(s, arguments, c(this).constructor);
                }
                return (
                  (Wrapper.prototype = Object.create(s.prototype, {
                    constructor: {
                      value: Wrapper,
                      enumerable: !1,
                      writable: !0,
                      configurable: !0,
                    },
                  })),
                  g(Wrapper, s)
                );
              }),
            (s.exports.__esModule = !0),
            (s.exports.default = s.exports),
            _wrapNativeSuper(o)
          );
        }
        (s.exports = _wrapNativeSuper),
          (s.exports.__esModule = !0),
          (s.exports.default = s.exports);
      },
      64687: function (s, o, a) {
        var c = a(17061)();
        s.exports = c;
        try {
          regeneratorRuntime = c;
        } catch (s) {
          "object" == typeof globalThis
            ? (globalThis.regeneratorRuntime = c)
            : Function("r", "regeneratorRuntime = r")(c);
        }
      },
      15761: function (s, o, a) {
        "use strict";
        a.d(o, {
          j: function () {
            return w;
          },
        });
        var c = a(33989),
          g = a(32161);
        let FocusManager = class FocusManager extends c.l {
          constructor() {
            super(),
              (this.setup = (s) => {
                if (!g.sk && window.addEventListener) {
                  let listener = () => s();
                  return (
                    window.addEventListener("visibilitychange", listener, !1),
                    window.addEventListener("focus", listener, !1),
                    () => {
                      window.removeEventListener("visibilitychange", listener),
                        window.removeEventListener("focus", listener);
                    }
                  );
                }
              });
          }
          onSubscribe() {
            this.cleanup || this.setEventListener(this.setup);
          }
          onUnsubscribe() {
            if (!this.hasListeners()) {
              var s;
              null == (s = this.cleanup) || s.call(this), (this.cleanup = void 0);
            }
          }
          setEventListener(s) {
            var o;
            (this.setup = s),
              null == (o = this.cleanup) || o.call(this),
              (this.cleanup = s((s) => {
                "boolean" == typeof s ? this.setFocused(s) : this.onFocus();
              }));
          }
          setFocused(s) {
            let o = this.focused !== s;
            o && ((this.focused = s), this.onFocus());
          }
          onFocus() {
            this.listeners.forEach(({ listener: s }) => {
              s();
            });
          }
          isFocused() {
            return "boolean" == typeof this.focused
              ? this.focused
              : "undefined" == typeof document ||
                  [void 0, "visible", "prerender"].includes(
                    document.visibilityState
                  );
          }
        };
        let w = new FocusManager();
      },
      30081: function (s, o, a) {
        "use strict";
        a.d(o, {
          V: function () {
            return g;
          },
        });
        var c = a(32161);
        let g = (function () {
          let s = [],
            o = 0,
            notifyFn = (s) => {
              s();
            },
            batchNotifyFn = (s) => {
              s();
            },
            schedule = (a) => {
              o
                ? s.push(a)
                : (0, c.A4)(() => {
                    notifyFn(a);
                  });
            },
            flush = () => {
              let o = s;
              (s = []),
                o.length &&
                  (0, c.A4)(() => {
                    batchNotifyFn(() => {
                      o.forEach((s) => {
                        notifyFn(s);
                      });
                    });
                  });
            };
          return {
            batch: (s) => {
              let a;
              o++;
              try {
                a = s();
              } finally {
                --o || flush();
              }
              return a;
            },
            batchCalls:
              (s) =>
              (...o) => {
                schedule(() => {
                  s(...o);
                });
              },
            schedule,
            setNotifyFunction: (s) => {
              notifyFn = s;
            },
            setBatchNotifyFunction: (s) => {
              batchNotifyFn = s;
            },
          };
        })();
      },
      96474: function (s, o, a) {
        "use strict";
        a.d(o, {
          N: function () {
            return k;
          },
        });
        var c = a(33989),
          g = a(32161);
        let w = ["online", "offline"];
        let OnlineManager = class OnlineManager extends c.l {
          constructor() {
            super(),
              (this.setup = (s) => {
                if (!g.sk && window.addEventListener) {
                  let listener = () => s();
                  return (
                    w.forEach((s) => {
                      window.addEventListener(s, listener, !1);
                    }),
                    () => {
                      w.forEach((s) => {
                        window.removeEventListener(s, listener);
                      });
                    }
                  );
                }
              });
          }
          onSubscribe() {
            this.cleanup || this.setEventListener(this.setup);
          }
          onUnsubscribe() {
            if (!this.hasListeners()) {
              var s;
              null == (s = this.cleanup) || s.call(this), (this.cleanup = void 0);
            }
          }
          setEventListener(s) {
            var o;
            (this.setup = s),
              null == (o = this.cleanup) || o.call(this),
              (this.cleanup = s((s) => {
                "boolean" == typeof s ? this.setOnline(s) : this.onOnline();
              }));
          }
          setOnline(s) {
            let o = this.online !== s;
            o && ((this.online = s), this.onOnline());
          }
          onOnline() {
            this.listeners.forEach(({ listener: s }) => {
              s();
            });
          }
          isOnline() {
            return "boolean" == typeof this.online
              ? this.online
              : "undefined" == typeof navigator ||
                  void 0 === navigator.onLine ||
                  navigator.onLine;
          }
        };
        let k = new OnlineManager();
      },
      72379: function (s, o, a) {
        "use strict";
        a.d(o, {
          DV: function () {
            return isCancelledError;
          },
          Kw: function () {
            return canFetch;
          },
          Mz: function () {
            return createRetryer;
          },
        });
        var c = a(15761),
          g = a(96474),
          w = a(32161);
        function defaultRetryDelay(s) {
          return Math.min(1e3 * 2 ** s, 3e4);
        }
        function canFetch(s) {
          return (null != s ? s : "online") !== "online" || g.N.isOnline();
        }
        let CancelledError = class CancelledError {
          constructor(s) {
            (this.revert = null == s ? void 0 : s.revert),
              (this.silent = null == s ? void 0 : s.silent);
          }
        };
        function isCancelledError(s) {
          return s instanceof CancelledError;
        }
        function createRetryer(s) {
          let o,
            a,
            k,
            x = !1,
            P = 0,
            A = !1,
            j = new Promise((s, o) => {
              (a = s), (k = o);
            }),
            shouldPause = () =>
              !c.j.isFocused() || ("always" !== s.networkMode && !g.N.isOnline()),
            resolve = (c) => {
              A ||
                ((A = !0),
                null == s.onSuccess || s.onSuccess(c),
                null == o || o(),
                a(c));
            },
            reject = (a) => {
              A ||
                ((A = !0),
                null == s.onError || s.onError(a),
                null == o || o(),
                k(a));
            },
            pause = () =>
              new Promise((a) => {
                (o = (s) => {
                  let o = A || !shouldPause();
                  return o && a(s), o;
                }),
                  null == s.onPause || s.onPause();
              }).then(() => {
                (o = void 0), A || null == s.onContinue || s.onContinue();
              }),
            run = () => {
              let o;
              if (!A) {
                try {
                  o = s.fn();
                } catch (s) {
                  o = Promise.reject(s);
                }
                Promise.resolve(o)
                  .then(resolve)
                  .catch((o) => {
                    var a, c;
                    if (A) return;
                    let g = null != (a = s.retry) ? a : 3,
                      k = null != (c = s.retryDelay) ? c : defaultRetryDelay,
                      j = "function" == typeof k ? k(P, o) : k,
                      D =
                        !0 === g ||
                        ("number" == typeof g && P < g) ||
                        ("function" == typeof g && g(P, o));
                    if (x || !D) {
                      reject(o);
                      return;
                    }
                    P++,
                      null == s.onFail || s.onFail(P, o),
                      (0, w.Gh)(j)
                        .then(() => {
                          if (shouldPause()) return pause();
                        })
                        .then(() => {
                          x ? reject(o) : run();
                        });
                  });
              }
            };
          return (
            canFetch(s.networkMode) ? run() : pause().then(run),
            {
              promise: j,
              cancel: (o) => {
                A ||
                  (reject(new CancelledError(o)), null == s.abort || s.abort());
              },
              continue: () => {
                let s = null == o ? void 0 : o();
                return s ? j : Promise.resolve();
              },
              cancelRetry: () => {
                x = !0;
              },
              continueRetry: () => {
                x = !1;
              },
            }
          );
        }
      },
      33989: function (s, o, a) {
        "use strict";
        a.d(o, {
          l: function () {
            return Subscribable;
          },
        });
        let Subscribable = class Subscribable {
          constructor() {
            (this.listeners = new Set()),
              (this.subscribe = this.subscribe.bind(this));
          }
          subscribe(s) {
            let o = { listener: s };
            return (
              this.listeners.add(o),
              this.onSubscribe(),
              () => {
                this.listeners.delete(o), this.onUnsubscribe();
              }
            );
          }
          hasListeners() {
            return this.listeners.size > 0;
          }
          onSubscribe() {}
          onUnsubscribe() {}
        };
      },
      32161: function (s, o, a) {
        "use strict";
        a.d(o, {
          A4: function () {
            return scheduleMicrotask;
          },
          G9: function () {
            return getAbortController;
          },
          Gh: function () {
            return sleep;
          },
          I6: function () {
            return parseFilterArgs;
          },
          Kp: function () {
            return timeUntilStale;
          },
          PN: function () {
            return isValidTimeout;
          },
          Rm: function () {
            return hashQueryKeyByOptions;
          },
          SE: function () {
            return functionalUpdate;
          },
          VS: function () {
            return shallowEqualObjects;
          },
          X7: function () {
            return matchMutation;
          },
          ZT: function () {
            return noop;
          },
          _v: function () {
            return parseQueryArgs;
          },
          _x: function () {
            return matchQuery;
          },
          oE: function () {
            return replaceData;
          },
          sk: function () {
            return c;
          },
          to: function () {
            return partialMatchKey;
          },
          yF: function () {
            return hashQueryKey;
          },
        });
        let c = "undefined" == typeof window || "Deno" in window;
        function noop() {}
        function functionalUpdate(s, o) {
          return "function" == typeof s ? s(o) : s;
        }
        function isValidTimeout(s) {
          return "number" == typeof s && s >= 0 && s !== 1 / 0;
        }
        function timeUntilStale(s, o) {
          return Math.max(s + (o || 0) - Date.now(), 0);
        }
        function parseQueryArgs(s, o, a) {
          return isQueryKey(s)
            ? "function" == typeof o
              ? { ...a, queryKey: s, queryFn: o }
              : { ...o, queryKey: s }
            : s;
        }
        function parseFilterArgs(s, o, a) {
          return isQueryKey(s) ? [{ ...o, queryKey: s }, a] : [s || {}, o];
        }
        function matchQuery(s, o) {
          let {
            type: a = "all",
            exact: c,
            fetchStatus: g,
            predicate: w,
            queryKey: k,
            stale: x,
          } = s;
          if (isQueryKey(k)) {
            if (c) {
              if (o.queryHash !== hashQueryKeyByOptions(k, o.options)) return !1;
            } else {
              if (!partialDeepEqual(o.queryKey, k)) return !1;
            }
          }
          if ("all" !== a) {
            let s = o.isActive();
            if (("active" === a && !s) || ("inactive" === a && s)) return !1;
          }
          return (
            ("boolean" != typeof x || o.isStale() === x) &&
            (void 0 === g || g === o.state.fetchStatus) &&
            (!w || !!w(o))
          );
        }
        function matchMutation(s, o) {
          let { exact: a, fetching: c, predicate: g, mutationKey: w } = s;
          if (isQueryKey(w)) {
            if (!o.options.mutationKey) return !1;
            if (a) {
              if (hashQueryKey(o.options.mutationKey) !== hashQueryKey(w))
                return !1;
            } else {
              if (!partialDeepEqual(o.options.mutationKey, w)) return !1;
            }
          }
          return (
            ("boolean" != typeof c || ("loading" === o.state.status) === c) &&
            (!g || !!g(o))
          );
        }
        function hashQueryKeyByOptions(s, o) {
          let a = (null == o ? void 0 : o.queryKeyHashFn) || hashQueryKey;
          return a(s);
        }
        function hashQueryKey(s) {
          return JSON.stringify(s, (s, o) =>
            isPlainObject(o)
              ? Object.keys(o)
                  .sort()
                  .reduce((s, a) => ((s[a] = o[a]), s), {})
              : o
          );
        }
        function partialMatchKey(s, o) {
          return partialDeepEqual(s, o);
        }
        function partialDeepEqual(s, o) {
          return (
            s === o ||
            (typeof s == typeof o &&
              !!s &&
              !!o &&
              "object" == typeof s &&
              "object" == typeof o &&
              !Object.keys(o).some((a) => !partialDeepEqual(s[a], o[a])))
          );
        }
        function shallowEqualObjects(s, o) {
          if ((s && !o) || (o && !s)) return !1;
          for (let a in s) if (s[a] !== o[a]) return !1;
          return !0;
        }
        function isPlainArray(s) {
          return Array.isArray(s) && s.length === Object.keys(s).length;
        }
        function isPlainObject(s) {
          if (!hasObjectPrototype(s)) return !1;
          let o = s.constructor;
          if (void 0 === o) return !0;
          let a = o.prototype;
          return !!(hasObjectPrototype(a) && a.hasOwnProperty("isPrototypeOf"));
        }
        function hasObjectPrototype(s) {
          return "[object Object]" === Object.prototype.toString.call(s);
        }
        function isQueryKey(s) {
          return Array.isArray(s);
        }
        function sleep(s) {
          return new Promise((o) => {
            setTimeout(o, s);
          });
        }
        function scheduleMicrotask(s) {
          sleep(0).then(s);
        }
        function getAbortController() {
          if ("function" == typeof AbortController) return new AbortController();
        }
        function replaceData(s, o, a) {
          return null != a.isDataEqual && a.isDataEqual(s, o)
            ? s
            : "function" == typeof a.structuralSharing
            ? a.structuralSharing(s, o)
            : !1 !== a.structuralSharing
            ? (function replaceEqualDeep(s, o) {
                if (s === o) return s;
                let a = isPlainArray(s) && isPlainArray(o);
                if (a || (isPlainObject(s) && isPlainObject(o))) {
                  let c = a ? s.length : Object.keys(s).length,
                    g = a ? o : Object.keys(o),
                    w = g.length,
                    k = a ? [] : {},
                    x = 0;
                  for (let c = 0; c < w; c++) {
                    let w = a ? c : g[c];
                    (k[w] = replaceEqualDeep(s[w], o[w])), k[w] === s[w] && x++;
                  }
                  return c === w && x === c ? s : k;
                }
                return o;
              })(s, o)
            : o;
        }
      },
      85945: function (s, o, a) {
        "use strict";
        a.d(o, {
          NL: function () {
            return useQueryClient;
          },
          aH: function () {
            return QueryClientProvider;
          },
        });
        var c = a(67294);
        let g = c.createContext(void 0),
          w = c.createContext(!1);
        function getQueryClientContext(s, o) {
          return (
            s ||
            (o && "undefined" != typeof window
              ? (window.ReactQueryClientContext ||
                  (window.ReactQueryClientContext = g),
                window.ReactQueryClientContext)
              : g)
          );
        }
        let useQueryClient = ({ context: s } = {}) => {
            let o = c.useContext(getQueryClientContext(s, c.useContext(w)));
            if (!o)
              throw Error(
                "No QueryClient set, use QueryClientProvider to set one"
              );
            return o;
          },
          QueryClientProvider = ({
            client: s,
            children: o,
            context: a,
            contextSharing: g = !1,
          }) => {
            c.useEffect(
              () => (
                s.mount(),
                () => {
                  s.unmount();
                }
              ),
              [s]
            );
            let k = getQueryClientContext(a, g);
            return c.createElement(
              w.Provider,
              { value: !a && g },
              c.createElement(k.Provider, { value: s }, o)
            );
          };
      },
      91444: function (s, o, a) {
        "use strict";
        a.d(o, {
          Ix: function () {
            return x;
          },
          Am: function () {
            return Q;
          },
        });
        var c = a(67294),
          clsx_m = function () {
            for (var s, o, a = 0, c = ""; a < arguments.length; )
              (s = arguments[a++]) &&
                (o = (function r(s) {
                  var o,
                    a,
                    c = "";
                  if ("string" == typeof s || "number" == typeof s) c += s;
                  else if ("object" == typeof s) {
                    if (Array.isArray(s))
                      for (o = 0; o < s.length; o++)
                        s[o] && (a = r(s[o])) && (c && (c += " "), (c += a));
                    else for (o in s) s[o] && (c && (c += " "), (c += o));
                  }
                  return c;
                })(s)) &&
                (c && (c += " "), (c += o));
            return c;
          };
        let u = (s) => "number" == typeof s && !isNaN(s),
          d = (s) => "string" == typeof s,
          p = (s) => "function" == typeof s,
          m = (s) => (d(s) || p(s) ? s : null),
          f = (s) => (0, c.isValidElement)(s) || d(s) || p(s) || u(s);
        function h(s) {
          let {
            enter: o,
            exit: a,
            appendPosition: g = !1,
            collapse: w = !0,
            collapseDuration: k = 300,
          } = s;
          return function (s) {
            let {
                children: x,
                position: P,
                preventExitTransition: A,
                done: j,
                nodeRef: D,
                isIn: z,
              } = s,
              $ = g ? `${o}--${P}` : o,
              W = g ? `${a}--${P}` : a,
              G = (0, c.useRef)(0);
            return (
              (0, c.useLayoutEffect)(() => {
                let s = D.current,
                  o = $.split(" "),
                  n = (a) => {
                    a.target === D.current &&
                      (s.dispatchEvent(new Event("d")),
                      s.removeEventListener("animationend", n),
                      s.removeEventListener("animationcancel", n),
                      0 === G.current &&
                        "animationcancel" !== a.type &&
                        s.classList.remove(...o));
                  };
                s.classList.add(...o),
                  s.addEventListener("animationend", n),
                  s.addEventListener("animationcancel", n);
              }, []),
              (0, c.useEffect)(() => {
                let s = D.current,
                  e = () => {
                    s.removeEventListener("animationend", e),
                      w
                        ? (function (s, o, a) {
                            void 0 === a && (a = 300);
                            let { scrollHeight: c, style: g } = s;
                            requestAnimationFrame(() => {
                              (g.minHeight = "initial"),
                                (g.height = c + "px"),
                                (g.transition = `all ${a}ms`),
                                requestAnimationFrame(() => {
                                  (g.height = "0"),
                                    (g.padding = "0"),
                                    (g.margin = "0"),
                                    setTimeout(o, a);
                                });
                            });
                          })(s, j, k)
                        : j();
                  };
                z ||
                  (A
                    ? e()
                    : ((G.current = 1),
                      (s.className += ` ${W}`),
                      s.addEventListener("animationend", e)));
              }, [z]),
              c.createElement(c.Fragment, null, x)
            );
          };
        }
        function y(s, o) {
          return null != s
            ? {
                content: s.content,
                containerId: s.props.containerId,
                id: s.props.toastId,
                theme: s.props.theme,
                type: s.props.type,
                data: s.props.data || {},
                isLoading: s.props.isLoading,
                icon: s.props.icon,
                status: o,
              }
            : {};
        }
        let g = {
            list: new Map(),
            emitQueue: new Map(),
            on(s, o) {
              return (
                this.list.has(s) || this.list.set(s, []),
                this.list.get(s).push(o),
                this
              );
            },
            off(s, o) {
              if (o) {
                let a = this.list.get(s).filter((s) => s !== o);
                return this.list.set(s, a), this;
              }
              return this.list.delete(s), this;
            },
            cancelEmit(s) {
              let o = this.emitQueue.get(s);
              return (
                o && (o.forEach(clearTimeout), this.emitQueue.delete(s)), this
              );
            },
            emit(s) {
              this.list.has(s) &&
                this.list.get(s).forEach((o) => {
                  let a = setTimeout(() => {
                    o(...[].slice.call(arguments, 1));
                  }, 0);
                  this.emitQueue.has(s) || this.emitQueue.set(s, []),
                    this.emitQueue.get(s).push(a);
                });
            },
          },
          T = (s) => {
            let { theme: o, type: a, ...g } = s;
            return c.createElement("svg", {
              viewBox: "0 0 24 24",
              width: "100%",
              height: "100%",
              fill:
                "colored" === o
                  ? "currentColor"
                  : `var(--toastify-icon-color-${a})`,
              ...g,
            });
          },
          w = {
            info: function (s) {
              return c.createElement(
                T,
                { ...s },
                c.createElement("path", {
                  d: "M12 0a12 12 0 1012 12A12.013 12.013 0 0012 0zm.25 5a1.5 1.5 0 11-1.5 1.5 1.5 1.5 0 011.5-1.5zm2.25 13.5h-4a1 1 0 010-2h.75a.25.25 0 00.25-.25v-4.5a.25.25 0 00-.25-.25h-.75a1 1 0 010-2h1a2 2 0 012 2v4.75a.25.25 0 00.25.25h.75a1 1 0 110 2z",
                })
              );
            },
            warning: function (s) {
              return c.createElement(
                T,
                { ...s },
                c.createElement("path", {
                  d: "M23.32 17.191L15.438 2.184C14.728.833 13.416 0 11.996 0c-1.42 0-2.733.833-3.443 2.184L.533 17.448a4.744 4.744 0 000 4.368C1.243 23.167 2.555 24 3.975 24h16.05C22.22 24 24 22.044 24 19.632c0-.904-.251-1.746-.68-2.44zm-9.622 1.46c0 1.033-.724 1.823-1.698 1.823s-1.698-.79-1.698-1.822v-.043c0-1.028.724-1.822 1.698-1.822s1.698.79 1.698 1.822v.043zm.039-12.285l-.84 8.06c-.057.581-.408.943-.897.943-.49 0-.84-.367-.896-.942l-.84-8.065c-.057-.624.25-1.095.779-1.095h1.91c.528.005.84.476.784 1.1z",
                })
              );
            },
            success: function (s) {
              return c.createElement(
                T,
                { ...s },
                c.createElement("path", {
                  d: "M12 0a12 12 0 1012 12A12.014 12.014 0 0012 0zm6.927 8.2l-6.845 9.289a1.011 1.011 0 01-1.43.188l-4.888-3.908a1 1 0 111.25-1.562l4.076 3.261 6.227-8.451a1 1 0 111.61 1.183z",
                })
              );
            },
            error: function (s) {
              return c.createElement(
                T,
                { ...s },
                c.createElement("path", {
                  d: "M11.983 0a12.206 12.206 0 00-8.51 3.653A11.8 11.8 0 000 12.207 11.779 11.779 0 0011.8 24h.214A12.111 12.111 0 0024 11.791 11.766 11.766 0 0011.983 0zM10.5 16.542a1.476 1.476 0 011.449-1.53h.027a1.527 1.527 0 011.523 1.47 1.475 1.475 0 01-1.449 1.53h-.027a1.529 1.529 0 01-1.523-1.47zM11 12.5v-6a1 1 0 012 0v6a1 1 0 11-2 0z",
                })
              );
            },
            spinner: function () {
              return c.createElement("div", { className: "Toastify__spinner" });
            },
          };
        function b(s) {
          return s.targetTouches && s.targetTouches.length >= 1
            ? s.targetTouches[0].clientX
            : s.clientX;
        }
        function I(s) {
          return s.targetTouches && s.targetTouches.length >= 1
            ? s.targetTouches[0].clientY
            : s.clientY;
        }
        function L(s) {
          let { closeToast: o, theme: a, ariaLabel: g = "close" } = s;
          return c.createElement(
            "button",
            {
              className: `Toastify__close-button Toastify__close-button--${a}`,
              type: "button",
              onClick: (s) => {
                s.stopPropagation(), o(s);
              },
              "aria-label": g,
            },
            c.createElement(
              "svg",
              { "aria-hidden": "true", viewBox: "0 0 14 16" },
              c.createElement("path", {
                fillRule: "evenodd",
                d: "M7.71 8.23l3.75 3.75-1.48 1.48-3.75-3.75-3.75 3.75L1 11.98l3.75-3.75L1 4.48 2.48 3l3.75 3.75L9.98 3l1.48 1.48-3.75 3.75z",
              })
            )
          );
        }
        function O(s) {
          let {
              delay: o,
              isRunning: a,
              closeToast: g,
              type: w = "default",
              hide: k,
              className: x,
              style: P,
              controlledProgress: A,
              progress: j,
              rtl: D,
              isIn: z,
              theme: $,
            } = s,
            W = k || (A && 0 === j),
            G = {
              ...P,
              animationDuration: `${o}ms`,
              animationPlayState: a ? "running" : "paused",
              opacity: W ? 0 : 1,
            };
          A && (G.transform = `scaleX(${j})`);
          let V = clsx_m(
              "Toastify__progress-bar",
              A
                ? "Toastify__progress-bar--controlled"
                : "Toastify__progress-bar--animated",
              `Toastify__progress-bar-theme--${$}`,
              `Toastify__progress-bar--${w}`,
              { "Toastify__progress-bar--rtl": D }
            ),
            K = p(x) ? x({ rtl: D, type: w, defaultClassName: V }) : clsx_m(V, x);
          return c.createElement("div", {
            role: "progressbar",
            "aria-hidden": W ? "true" : "false",
            "aria-label": "notification timer",
            className: K,
            style: G,
            [A && j >= 1 ? "onTransitionEnd" : "onAnimationEnd"]:
              A && j < 1
                ? null
                : () => {
                    z && g();
                  },
          });
        }
        let N = (s) => {
            let {
                isRunning: o,
                preventExitTransition: a,
                toastRef: g,
                eventHandlers: w,
              } = (function (s) {
                let [o, a] = (0, c.useState)(!1),
                  [g, w] = (0, c.useState)(!1),
                  k = (0, c.useRef)(null),
                  x = (0, c.useRef)({
                    start: 0,
                    x: 0,
                    y: 0,
                    delta: 0,
                    removalDistance: 0,
                    canCloseOnClick: !0,
                    canDrag: !1,
                    boundingRect: null,
                    didMove: !1,
                  }).current,
                  P = (0, c.useRef)(s),
                  {
                    autoClose: A,
                    pauseOnHover: j,
                    closeToast: D,
                    onClick: z,
                    closeOnClick: $,
                  } = s;
                function v(o) {
                  if (s.draggable) {
                    "touchstart" === o.nativeEvent.type &&
                      o.nativeEvent.preventDefault(),
                      (x.didMove = !1),
                      document.addEventListener("mousemove", _),
                      document.addEventListener("mouseup", L),
                      document.addEventListener("touchmove", _),
                      document.addEventListener("touchend", L);
                    let a = k.current;
                    (x.canCloseOnClick = !0),
                      (x.canDrag = !0),
                      (x.boundingRect = a.getBoundingClientRect()),
                      (a.style.transition = ""),
                      (x.x = b(o.nativeEvent)),
                      (x.y = I(o.nativeEvent)),
                      "x" === s.draggableDirection
                        ? ((x.start = x.x),
                          (x.removalDistance =
                            a.offsetWidth * (s.draggablePercent / 100)))
                        : ((x.start = x.y),
                          (x.removalDistance =
                            a.offsetHeight *
                            (80 === s.draggablePercent
                              ? 1.5 * s.draggablePercent
                              : s.draggablePercent / 100)));
                  }
                }
                function T(o) {
                  if (x.boundingRect) {
                    let { top: a, bottom: c, left: g, right: w } = x.boundingRect;
                    "touchend" !== o.nativeEvent.type &&
                    s.pauseOnHover &&
                    x.x >= g &&
                    x.x <= w &&
                    x.y >= a &&
                    x.y <= c
                      ? C()
                      : E();
                  }
                }
                function E() {
                  a(!0);
                }
                function C() {
                  a(!1);
                }
                function _(a) {
                  let c = k.current;
                  x.canDrag &&
                    c &&
                    ((x.didMove = !0),
                    o && C(),
                    (x.x = b(a)),
                    (x.y = I(a)),
                    (x.delta =
                      "x" === s.draggableDirection
                        ? x.x - x.start
                        : x.y - x.start),
                    x.start !== x.x && (x.canCloseOnClick = !1),
                    (c.style.transform = `translate${s.draggableDirection}(${x.delta}px)`),
                    (c.style.opacity =
                      "" + (1 - Math.abs(x.delta / x.removalDistance))));
                }
                function L() {
                  document.removeEventListener("mousemove", _),
                    document.removeEventListener("mouseup", L),
                    document.removeEventListener("touchmove", _),
                    document.removeEventListener("touchend", L);
                  let o = k.current;
                  if (x.canDrag && x.didMove && o) {
                    if (((x.canDrag = !1), Math.abs(x.delta) > x.removalDistance))
                      return w(!0), void s.closeToast();
                    (o.style.transition = "transform 0.2s, opacity 0.2s"),
                      (o.style.transform = `translate${s.draggableDirection}(0)`),
                      (o.style.opacity = "1");
                  }
                }
                (0, c.useEffect)(() => {
                  P.current = s;
                }),
                  (0, c.useEffect)(
                    () => (
                      k.current &&
                        k.current.addEventListener("d", E, { once: !0 }),
                      p(s.onOpen) &&
                        s.onOpen(
                          (0, c.isValidElement)(s.children) && s.children.props
                        ),
                      () => {
                        let s = P.current;
                        p(s.onClose) &&
                          s.onClose(
                            (0, c.isValidElement)(s.children) && s.children.props
                          );
                      }
                    ),
                    []
                  ),
                  (0, c.useEffect)(
                    () => (
                      s.pauseOnFocusLoss &&
                        (document.hasFocus() || C(),
                        window.addEventListener("focus", E),
                        window.addEventListener("blur", C)),
                      () => {
                        s.pauseOnFocusLoss &&
                          (window.removeEventListener("focus", E),
                          window.removeEventListener("blur", C));
                      }
                    ),
                    [s.pauseOnFocusLoss]
                  );
                let W = {
                  onMouseDown: v,
                  onTouchStart: v,
                  onMouseUp: T,
                  onTouchEnd: T,
                };
                return (
                  A && j && ((W.onMouseEnter = C), (W.onMouseLeave = E)),
                  $ &&
                    (W.onClick = (s) => {
                      z && z(s), x.canCloseOnClick && D();
                    }),
                  {
                    playToast: E,
                    pauseToast: C,
                    isRunning: o,
                    preventExitTransition: g,
                    toastRef: k,
                    eventHandlers: W,
                  }
                );
              })(s),
              {
                closeButton: k,
                children: x,
                autoClose: P,
                onClick: A,
                type: j,
                hideProgressBar: D,
                closeToast: z,
                transition: $,
                position: W,
                className: G,
                style: V,
                bodyClassName: K,
                bodyStyle: X,
                progressClassName: Z,
                progressStyle: Y,
                updateId: ee,
                role: et,
                progress: er,
                rtl: en,
                toastId: ei,
                deleteToast: es,
                isIn: eo,
                isLoading: ea,
                iconOut: eu,
                closeOnClick: el,
                theme: ec,
              } = s,
              eh = clsx_m(
                "Toastify__toast",
                `Toastify__toast-theme--${ec}`,
                `Toastify__toast--${j}`,
                { "Toastify__toast--rtl": en },
                { "Toastify__toast--close-on-click": el }
              ),
              ed = p(G)
                ? G({ rtl: en, position: W, type: j, defaultClassName: eh })
                : clsx_m(eh, G),
              ef = !!er || !P,
              ep = { closeToast: z, type: j, theme: ec },
              eg = null;
            return (
              !1 === k ||
                (eg = p(k)
                  ? k(ep)
                  : (0, c.isValidElement)(k)
                  ? (0, c.cloneElement)(k, ep)
                  : L(ep)),
              c.createElement(
                $,
                {
                  isIn: eo,
                  done: es,
                  position: W,
                  preventExitTransition: a,
                  nodeRef: g,
                },
                c.createElement(
                  "div",
                  { id: ei, onClick: A, className: ed, ...w, style: V, ref: g },
                  c.createElement(
                    "div",
                    {
                      ...(eo && { role: et }),
                      className: p(K)
                        ? K({ type: j })
                        : clsx_m("Toastify__toast-body", K),
                      style: X,
                    },
                    null != eu &&
                      c.createElement(
                        "div",
                        {
                          className: clsx_m("Toastify__toast-icon", {
                            "Toastify--animate-icon Toastify__zoom-enter": !ea,
                          }),
                        },
                        eu
                      ),
                    c.createElement("div", null, x)
                  ),
                  eg,
                  c.createElement(O, {
                    ...(ee && !ef ? { key: `pb-${ee}` } : {}),
                    rtl: en,
                    theme: ec,
                    delay: P,
                    isRunning: o,
                    isIn: eo,
                    closeToast: z,
                    hide: D,
                    type: j,
                    style: Y,
                    className: Z,
                    controlledProgress: ef,
                    progress: er || 0,
                  })
                )
              )
            );
          },
          M = function (s, o) {
            return (
              void 0 === o && (o = !1),
              {
                enter: `Toastify--animate Toastify__${s}-enter`,
                exit: `Toastify--animate Toastify__${s}-exit`,
                appendPosition: o,
              }
            );
          },
          k = h(M("bounce", !0)),
          x =
            (h(M("slide", !0)),
            h(M("zoom")),
            h(M("flip")),
            (0, c.forwardRef)((s, o) => {
              let {
                  getToastToRender: a,
                  containerRef: k,
                  isToastActive: x,
                } = (function (s) {
                  let [, o] = (0, c.useReducer)((s) => s + 1, 0),
                    [a, k] = (0, c.useState)([]),
                    x = (0, c.useRef)(null),
                    P = (0, c.useRef)(new Map()).current,
                    T = (s) => -1 !== a.indexOf(s),
                    A = (0, c.useRef)({
                      toastKey: 1,
                      displayedToast: 0,
                      count: 0,
                      queue: [],
                      props: s,
                      containerId: null,
                      isToastActive: T,
                      getToast: (s) => P.get(s),
                    }).current;
                  function b(s) {
                    let { containerId: o } = s,
                      { limit: a } = A.props;
                    !a ||
                      (o && A.containerId !== o) ||
                      ((A.count -= A.queue.length), (A.queue = []));
                  }
                  function I(s) {
                    k((o) => (null == s ? [] : o.filter((o) => o !== s)));
                  }
                  function _() {
                    let {
                      toastContent: s,
                      toastProps: o,
                      staleId: a,
                    } = A.queue.shift();
                    O(s, o, a);
                  }
                  function L(s, a) {
                    var k, j;
                    let { delay: D, staleId: z, ...$ } = a;
                    if (
                      !f(s) ||
                      !x.current ||
                      (A.props.enableMultiContainer &&
                        $.containerId !== A.props.containerId) ||
                      (P.has($.toastId) && null == $.updateId)
                    )
                      return;
                    let { toastId: W, updateId: G, data: V } = $,
                      { props: K } = A,
                      L = () => I(W),
                      X = null == G;
                    X && A.count++;
                    let Z = {
                      ...K,
                      style: K.toastStyle,
                      key: A.toastKey++,
                      ...Object.fromEntries(
                        Object.entries($).filter((s) => {
                          let [o, a] = s;
                          return null != a;
                        })
                      ),
                      toastId: W,
                      updateId: G,
                      data: V,
                      closeToast: L,
                      isIn: !1,
                      className: m($.className || K.toastClassName),
                      bodyClassName: m($.bodyClassName || K.bodyClassName),
                      progressClassName: m(
                        $.progressClassName || K.progressClassName
                      ),
                      autoClose:
                        !$.isLoading &&
                        ((k = $.autoClose),
                        (j = K.autoClose),
                        !1 === k || (u(k) && k > 0) ? k : j),
                      deleteToast() {
                        let s = y(P.get(W), "removed");
                        P.delete(W), g.emit(4, s);
                        let a = A.queue.length;
                        if (
                          ((A.count =
                            null == W ? A.count - A.displayedToast : A.count - 1),
                          A.count < 0 && (A.count = 0),
                          a > 0)
                        ) {
                          let s = null == W ? A.props.limit : 1;
                          if (1 === a || 1 === s) A.displayedToast++, _();
                          else {
                            let o = s > a ? a : s;
                            A.displayedToast = o;
                            for (let s = 0; s < o; s++) _();
                          }
                        } else o();
                      },
                    };
                    (Z.iconOut = (function (s) {
                      let { theme: o, type: a, isLoading: g, icon: k } = s,
                        x = null,
                        P = { theme: o, type: a };
                      return (
                        !1 === k ||
                          (p(k)
                            ? (x = k(P))
                            : (0, c.isValidElement)(k)
                            ? (x = (0, c.cloneElement)(k, P))
                            : d(k) || u(k)
                            ? (x = k)
                            : g
                            ? (x = w.spinner())
                            : a in w && (x = w[a](P))),
                        x
                      );
                    })(Z)),
                      p($.onOpen) && (Z.onOpen = $.onOpen),
                      p($.onClose) && (Z.onClose = $.onClose),
                      (Z.closeButton = K.closeButton),
                      !1 === $.closeButton || f($.closeButton)
                        ? (Z.closeButton = $.closeButton)
                        : !0 === $.closeButton &&
                          (Z.closeButton = !f(K.closeButton) || K.closeButton);
                    let Y = s;
                    (0, c.isValidElement)(s) && !d(s.type)
                      ? (Y = (0, c.cloneElement)(s, {
                          closeToast: L,
                          toastProps: Z,
                          data: V,
                        }))
                      : p(s) &&
                        (Y = s({ closeToast: L, toastProps: Z, data: V })),
                      K.limit && K.limit > 0 && A.count > K.limit && X
                        ? A.queue.push({
                            toastContent: Y,
                            toastProps: Z,
                            staleId: z,
                          })
                        : u(D)
                        ? setTimeout(() => {
                            O(Y, Z, z);
                          }, D)
                        : O(Y, Z, z);
                  }
                  function O(s, o, a) {
                    let { toastId: c } = o;
                    a && P.delete(a);
                    let w = { content: s, props: o };
                    P.set(c, w),
                      k((s) => [...s, c].filter((s) => s !== a)),
                      g.emit(
                        4,
                        y(w, null == w.props.updateId ? "added" : "updated")
                      );
                  }
                  return (
                    (0, c.useEffect)(
                      () => (
                        (A.containerId = s.containerId),
                        g
                          .cancelEmit(3)
                          .on(0, L)
                          .on(1, (s) => x.current && I(s))
                          .on(5, b)
                          .emit(2, A),
                        () => {
                          P.clear(), g.emit(3, A);
                        }
                      ),
                      []
                    ),
                    (0, c.useEffect)(() => {
                      (A.props = s),
                        (A.isToastActive = T),
                        (A.displayedToast = a.length);
                    }),
                    {
                      getToastToRender: function (o) {
                        let a = new Map(),
                          c = Array.from(P.values());
                        return (
                          s.newestOnTop && c.reverse(),
                          c.forEach((s) => {
                            let { position: o } = s.props;
                            a.has(o) || a.set(o, []), a.get(o).push(s);
                          }),
                          Array.from(a, (s) => o(s[0], s[1]))
                        );
                      },
                      containerRef: x,
                      isToastActive: T,
                    }
                  );
                })(s),
                { className: P, style: A, rtl: j, containerId: D } = s;
              return (
                (0, c.useEffect)(() => {
                  o && (o.current = k.current);
                }, []),
                c.createElement(
                  "div",
                  { ref: k, className: "Toastify", id: D },
                  a((s, o) => {
                    let a = o.length ? { ...A } : { ...A, pointerEvents: "none" };
                    return c.createElement(
                      "div",
                      {
                        className: (function (s) {
                          let o = clsx_m(
                            "Toastify__toast-container",
                            `Toastify__toast-container--${s}`,
                            { "Toastify__toast-container--rtl": j }
                          );
                          return p(P)
                            ? P({ position: s, rtl: j, defaultClassName: o })
                            : clsx_m(o, m(P));
                        })(s),
                        style: a,
                        key: `container-${s}`,
                      },
                      o.map((s, a) => {
                        let { content: g, props: w } = s;
                        return c.createElement(
                          N,
                          {
                            ...w,
                            isIn: x(w.toastId),
                            style: {
                              ...w.style,
                              "--nth": a + 1,
                              "--len": o.length,
                            },
                            key: `toast-${w.key}`,
                          },
                          g
                        );
                      })
                    );
                  })
                )
              );
            }));
        (x.displayName = "ToastContainer"),
          (x.defaultProps = {
            position: "top-right",
            transition: k,
            autoClose: 5e3,
            closeButton: L,
            pauseOnHover: !0,
            pauseOnFocusLoss: !0,
            closeOnClick: !0,
            draggable: !0,
            draggablePercent: 80,
            draggableDirection: "x",
            role: "alert",
            theme: "light",
          });
        let P,
          A = new Map(),
          j = [],
          D = 1;
        function H(s, o) {
          return (
            A.size > 0 ? g.emit(0, s, o) : j.push({ content: s, options: o }),
            o.toastId
          );
        }
        function S(s, o) {
          return {
            ...o,
            type: (o && o.type) || s,
            toastId: o && (d(o.toastId) || u(o.toastId)) ? o.toastId : "" + D++,
          };
        }
        function q(s) {
          return (o, a) => H(o, S(s, a));
        }
        function Q(s, o) {
          return H(s, S("default", o));
        }
        (Q.loading = (s, o) =>
          H(
            s,
            S("default", {
              isLoading: !0,
              autoClose: !1,
              closeOnClick: !1,
              closeButton: !1,
              draggable: !1,
              ...o,
            })
          )),
          (Q.promise = function (s, o, a) {
            let c,
              { pending: g, error: w, success: k } = o;
            g &&
              (c = d(g) ? Q.loading(g, a) : Q.loading(g.render, { ...a, ...g }));
            let x = {
                isLoading: null,
                autoClose: null,
                closeOnClick: null,
                closeButton: null,
                draggable: null,
              },
              l = (s, o, g) => {
                if (null == o) return void Q.dismiss(c);
                let w = { type: s, ...x, ...a, data: g },
                  k = d(o) ? { render: o } : o;
                return (
                  c ? Q.update(c, { ...w, ...k }) : Q(k.render, { ...w, ...k }), g
                );
              },
              P = p(s) ? s() : s;
            return (
              P.then((s) => l("success", k, s)).catch((s) => l("error", w, s)), P
            );
          }),
          (Q.success = q("success")),
          (Q.info = q("info")),
          (Q.error = q("error")),
          (Q.warning = q("warning")),
          (Q.warn = Q.warning),
          (Q.dark = (s, o) => H(s, S("default", { theme: "dark", ...o }))),
          (Q.dismiss = (s) => {
            A.size > 0
              ? g.emit(1, s)
              : (j = j.filter((o) => null != s && o.options.toastId !== s));
          }),
          (Q.clearWaitingQueue = function (s) {
            return void 0 === s && (s = {}), g.emit(5, s);
          }),
          (Q.isActive = (s) => {
            let o = !1;
            return (
              A.forEach((a) => {
                a.isToastActive && a.isToastActive(s) && (o = !0);
              }),
              o
            );
          }),
          (Q.update = function (s, o) {
            void 0 === o && (o = {}),
              setTimeout(() => {
                let a = (function (s, o) {
                  let { containerId: a } = o,
                    c = A.get(a || P);
                  return c && c.getToast(s);
                })(s, o);
                if (a) {
                  let { props: c, content: g } = a,
                    w = {
                      delay: 100,
                      ...c,
                      ...o,
                      toastId: o.toastId || s,
                      updateId: "" + D++,
                    };
                  w.toastId !== s && (w.staleId = s);
                  let k = w.render || g;
                  delete w.render, H(k, w);
                }
              }, 0);
          }),
          (Q.done = (s) => {
            Q.update(s, { progress: 1 });
          }),
          (Q.onChange = (s) => (
            g.on(4, s),
            () => {
              g.off(4, s);
            }
          )),
          (Q.POSITION = {
            TOP_LEFT: "top-left",
            TOP_RIGHT: "top-right",
            TOP_CENTER: "top-center",
            BOTTOM_LEFT: "bottom-left",
            BOTTOM_RIGHT: "bottom-right",
            BOTTOM_CENTER: "bottom-center",
          }),
          (Q.TYPE = {
            INFO: "info",
            SUCCESS: "success",
            WARNING: "warning",
            ERROR: "error",
            DEFAULT: "default",
          }),
          g
            .on(2, (s) => {
              (P = s.containerId || s),
                A.set(P, s),
                j.forEach((s) => {
                  g.emit(0, s.content, s.options);
                }),
                (j = []);
            })
            .on(3, (s) => {
              A.delete(s.containerId || s),
                0 === A.size && g.off(0).off(1).off(5);
            });
      },
    },
    function (s) {
      var __webpack_exec__ = function (o) {
        return s((s.s = o));
      };
      s.O(0, [9774, 179], function () {
        return __webpack_exec__(6840), __webpack_exec__(59974);
      }),
        (_N_E = s.O());
    },
  ]);
  